/**
 * Conversion Helpers Utility Functions
 * Helper functions for tracking and managing conversions
 */

/**
 * Generate unique conversion ID
 */
export const generateConversionId = () => {
  return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Create conversion object
 */
export const createConversion = (type, data = {}) => {
  return {
    id: generateConversionId(),
    type,
    timestamp: new Date().toISOString(),
    data,
    source: typeof window !== 'undefined' ? window.location.href : '',
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : '',
    sessionId: getSessionId()
  };
};

/**
 * Get or create session ID
 */
export const getSessionId = () => {
  if (typeof window === 'undefined') return null;
  
  let sessionId = localStorage.getItem('sastrava_session_id');
  
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('sastrava_session_id', sessionId);
  }
  
  return sessionId;
};

/**
 * Track conversion to local storage (for offline support)
 */
export const storeConversionLocally = (conversion) => {
  if (typeof window === 'undefined') return false;
  
  try {
    const conversions = JSON.parse(localStorage.getItem('sastrava_conversions') || '[]');
    conversions.push(conversion);
    localStorage.setItem('sastrava_conversions', JSON.stringify(conversions));
    return true;
  } catch (error) {
    console.error('Error storing conversion:', error);
    return false;
  }
};

/**
 * Get stored conversions from local storage
 */
export const getStoredConversions = () => {
  if (typeof window === 'undefined') return [];
  
  try {
    return JSON.parse(localStorage.getItem('sastrava_conversions') || '[]');
  } catch (error) {
    console.error('Error retrieving conversions:', error);
    return [];
  }
};

/**
 * Clear stored conversions
 */
export const clearStoredConversions = () => {
  if (typeof window === 'undefined') return false;
  
  try {
    localStorage.removeItem('sastrava_conversions');
    return true;
  } catch (error) {
    console.error('Error clearing conversions:', error);
    return false;
  }
};

/**
 * Calculate conversion rate
 */
export const calculateConversionRate = (conversions = 0, visitors = 0) => {
  if (visitors === 0) return 0;
  return ((conversions / visitors) * 100).toFixed(2);
};

/**
 * Calculate average conversion value
 */
export const calculateAverageConversionValue = (conversions = []) => {
  if (conversions.length === 0) return 0;
  
  const totalValue = conversions.reduce((sum, conv) => {
    return sum + (conv.data?.value || 0);
  }, 0);
  
  return (totalValue / conversions.length).toFixed(2);
};

/**
 * Get conversions by type
 */
export const getConversionsByType = (conversions = [], type) => {
  return conversions.filter(conv => conv.type === type);
};

/**
 * Get conversions by date range
 */
export const getConversionsByDateRange = (conversions = [], startDate, endDate) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  
  return conversions.filter(conv => {
    const convTime = new Date(conv.timestamp).getTime();
    return convTime >= start && convTime <= end;
  });
};

/**
 * Group conversions by type
 */
export const groupConversionsByType = (conversions = []) => {
  return conversions.reduce((groups, conv) => {
    if (!groups[conv.type]) {
      groups[conv.type] = [];
    }
    groups[conv.type].push(conv);
    return groups;
  }, {});
};

/**
 * Create funnel step
 */
export const createFunnelStep = (stepName, count = 0) => {
  return {
    name: stepName,
    count,
    percentage: 0
  };
};

/**
 * Calculate funnel metrics
 */
export const calculateFunnelMetrics = (steps = []) => {
  if (steps.length === 0) return [];
  
  const firstStepCount = steps[0].count || 1;
  
  return steps.map(step => ({
    ...step,
    percentage: firstStepCount > 0 ? ((step.count / firstStepCount) * 100).toFixed(2) : 0,
    dropoff: step.count > 0 ? ((1 - (step.count / firstStepCount)) * 100).toFixed(2) : 0
  }));
};

/**
 * Get conversion funnel (sample)
 */
export const getConversionFunnel = (conversions = []) => {
  const funnel = [
    createFunnelStep('Page Views', getConversionsByType(conversions, 'page_view').length),
    createFunnelStep('Service Viewed', getConversionsByType(conversions, 'service_viewed').length),
    createFunnelStep('Form Opened', getConversionsByType(conversions, 'form_opened').length),
    createFunnelStep('Form Submitted', getConversionsByType(conversions, 'form_submitted').length),
    createFunnelStep('Enrolled', getConversionsByType(conversions, 'course_enrolled').length)
  ];
  
  return calculateFunnelMetrics(funnel);
};

/**
 * Track UTM parameters
 */
export const extractUTMParameters = () => {
  if (typeof window === 'undefined') return {};
  
  const url = new URL(window.location.href);
  return {
    source: url.searchParams.get('utm_source'),
    medium: url.searchParams.get('utm_medium'),
    campaign: url.searchParams.get('utm_campaign'),
    content: url.searchParams.get('utm_content'),
    term: url.searchParams.get('utm_term')
  };
};

/**
 * Build UTM URL
 */
export const buildUTMUrl = (baseUrl, utm = {}) => {
  const url = new URL(baseUrl);
  
  if (utm.source) url.searchParams.set('utm_source', utm.source);
  if (utm.medium) url.searchParams.set('utm_medium', utm.medium);
  if (utm.campaign) url.searchParams.set('utm_campaign', utm.campaign);
  if (utm.content) url.searchParams.set('utm_content', utm.content);
  if (utm.term) url.searchParams.set('utm_term', utm.term);
  
  return url.toString();
};

/**
 * Get referrer information
 */
export const getReferrerInfo = () => {
  if (typeof document === 'undefined') return {};
  
  return {
    referrer: document.referrer,
    hostname: typeof window !== 'undefined' ? window.location.hostname : '',
    currentPath: typeof window !== 'undefined' ? window.location.pathname : ''
  };
};

/**
 * Format conversion data for display
 */
export const formatConversionData = (conversion) => {
  return {
    id: conversion.id,
    type: conversion.type,
    timestamp: new Date(conversion.timestamp).toLocaleString(),
    value: conversion.data?.value || 0,
    source: conversion.source,
    sessionId: conversion.sessionId
  };
};

export default {
  generateConversionId,
  createConversion,
  getSessionId,
  storeConversionLocally,
  getStoredConversions,
  clearStoredConversions,
  calculateConversionRate,
  calculateAverageConversionValue,
  getConversionsByType,
  getConversionsByDateRange,
  groupConversionsByType,
  createFunnelStep,
  calculateFunnelMetrics,
  getConversionFunnel,
  extractUTMParameters,
  buildUTMUrl,
  getReferrerInfo,
  formatConversionData
};
