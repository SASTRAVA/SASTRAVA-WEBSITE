/**
 * Lead Management Service
 * Handles all lead submission, validation, and retrieval operations
 */

import { LEAD_TYPES, LEAD_STATUS, createLeadObject } from './leadTypes';
import { GOOGLE_FORM_CONFIG, isGoogleFormConfigured, submitToGoogleForm } from '../config/googleFormConfig';

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

/**
 * Validation Utilities
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  // Indian phone format: 10 digits
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

export const validateFormData = (data, requiredFields = []) => {
  const errors = {};

  requiredFields.forEach(field => {
    if (!data[field] || (typeof data[field] === 'string' && !data[field].trim())) {
      errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }
  });

  // Email validation
  if (data.email && !validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone validation
  if (data.phone && data.phone.trim() && !validatePhone(data.phone)) {
    errors.phone = 'Please enter a valid 10-digit phone number';
  }

  return errors;
};

/**
 * Sanitization & Security
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets to prevent HTML injection
    .slice(0, 1000); // Limit length
};

export const sanitizeFormData = (data) => {
  const sanitized = {};
  
  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value);
    } else {
      sanitized[key] = value;
    }
  });

  return sanitized;
};

/**
 * Spam Prevention
 */
const submissionLog = {}; // In-memory log, use Redis in production

export const isRateLimited = (email, limit = 5, timeWindow = 3600000) => {
  const now = Date.now();
  
  if (!submissionLog[email]) {
    submissionLog[email] = [];
  }

  // Remove old submissions outside time window
  submissionLog[email] = submissionLog[email].filter(
    timestamp => now - timestamp < timeWindow
  );

  if (submissionLog[email].length >= limit) {
    return true;
  }

  submissionLog[email].push(now);
  return false;
};

/**
 * Lead Submission
 */
export const submitLead = async (formData, leadType = LEAD_TYPES.GENERAL_INQUIRY, metadata = {}) => {
  try {
    // Validate
    const requiredFields = ['firstName', 'lastName', 'email'];
    const errors = validateFormData(formData, requiredFields);
    
    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors,
        message: 'Please correct the errors in the form',
      };
    }

    // Check rate limiting
    if (isRateLimited(formData.email)) {
      return {
        success: false,
        message: 'Too many submissions. Please try again later.',
      };
    }

    // Sanitize input
    const sanitizedData = sanitizeFormData(formData);

    const persistManualSheetEntry = (payload) => {
      if (typeof window === 'undefined') return;
      try {
        const key = 'sastrava_contact_sheet';
        const current = JSON.parse(localStorage.getItem(key) || '[]');
        const existing = Array.isArray(current) ? current : [];
        existing.push({
          ...payload,
          submittedAt: new Date().toISOString(),
          sourcePage: metadata.sourcePage || window.location.pathname,
        });
        localStorage.setItem(key, JSON.stringify(existing));
      } catch (error) {
        console.warn('Manual contact sheet fallback failed:', error);
      }
    };

    // The Contact page's "Send Message" form is wired to submit to a
    // Google Form associated with neeraj@sastrava.com (see
    // src/config/googleFormConfig.js) instead of the generic lead API.
    if (leadType === LEAD_TYPES.CONTACT_INQUIRY) {
      if (!isGoogleFormConfigured()) {
        console.warn(
          'Google Form integration is not configured yet. ' +
          'Set GOOGLE_FORM_CONFIG.formActionUrl and entryIds in ' +
          'src/config/googleFormConfig.js to enable Contact form delivery.'
        );

        persistManualSheetEntry(sanitizedData);

        return {
          success: true,
          message: 'Your inquiry has been saved to the local contact sheet for now. Please email siri@sastrava.com when the live sheet is connected.',
        };
      }

      await submitToGoogleForm(sanitizedData);
      persistManualSheetEntry(sanitizedData);

      return {
        success: true,
        message: 'Thank you! We\'ll be in touch shortly.',
      };
    }

    // Get system metadata
    const systemMetadata = {
      sourcePage: metadata.sourcePage || window.location.pathname,
      sourceButton: metadata.sourceButton || '',
      campaign: metadata.campaign || '',
      ipAddress: await getUserIP(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      submittedAt: new Date().toISOString(),
    };

    // Create lead object
    const leadObject = createLeadObject({
      ...sanitizedData,
      leadType,
      status: LEAD_STATUS.NEW,
      ...systemMetadata,
    });

    // Submit to backend
    const response = await fetch(`${API_BASE_URL}/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadObject),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const result = await response.json();

    return {
      success: true,
      leadId: result.leadId,
      message: 'Thank you! We\'ll be in touch shortly.',
    };
  } catch (error) {
    console.error('Lead submission error:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again later.',
      error: error.message,
    };
  }
};

/**
 * Helper: Get User IP (using free IP service)
 */
const getUserIP = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip || 'unknown';
  } catch {
    return 'unknown';
  }
};

/**
 * Get Lead Status
 */
export const getLeadStatus = async (leadId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/leads/${leadId}`);
    
    if (!response.ok) {
      throw new Error('Lead not found');
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch lead status:', error);
    return null;
  }
};

/**
 * Update Lead Status (admin use)
 */
export const updateLeadStatus = async (leadId, newStatus, note = '') => {
  try {
    const response = await fetch(`${API_BASE_URL}/leads/${leadId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
      },
      body: JSON.stringify({
        status: newStatus,
        note,
        updatedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to update lead');
    }

    return await response.json();
  } catch (error) {
    console.error('Lead update error:', error);
    throw error;
  }
};

/**
 * Email Notification (after lead submission)
 * This would be called by backend, but can also be triggered from frontend
 */
export const sendLeadNotification = async (leadId, type = 'confirmation') => {
  try {
    const response = await fetch(`${API_BASE_URL}/leads/${leadId}/notify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ notificationType: type }),
    });

    return await response.json();
  } catch (error) {
    console.error('Notification error:', error);
    return null;
  }
};

/**
 * Export Leads (CSV)
 * Admin functionality
 */
export const exportLeadsCSV = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams(filters);
    const response = await fetch(
      `${API_BASE_URL}/leads/export/csv?${queryParams}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Export failed');
    }

    // Download CSV file
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);

    return true;
  } catch (error) {
    console.error('Export error:', error);
    throw error;
  }
};

/**
 * Get Lead Analytics
 */
export const getLeadAnalytics = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams(filters);
    const response = await fetch(
      `${API_BASE_URL}/leads/analytics?${queryParams}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch analytics');
    }

    return await response.json();
  } catch (error) {
    console.error('Analytics error:', error);
    return null;
  }
};

/**
 * Bulk Actions
 */
export const bulkUpdateLeads = async (leadIds, updates) => {
  try {
    const response = await fetch(`${API_BASE_URL}/leads/bulk-update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`,
      },
      body: JSON.stringify({
        leadIds,
        updates,
        updatedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error('Bulk update failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Bulk update error:', error);
    throw error;
  }
};
