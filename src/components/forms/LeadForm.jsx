import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { FormInput, FormTextarea } from '../ui/FormInput';
import { submitLead, validateFormData } from '../../services/leadService';
import { LEAD_TYPES } from '../../services/leadTypes';

/**
 * Reusable Lead Form Component
 * Handles submission, validation, and success/error states
 * Used across Contact, Courses, Services, Internships, etc.
 */
export const LeadForm = ({
  leadType = LEAD_TYPES.GENERAL_INQUIRY,
  fields = [],
  title = 'Connect With Us',
  subtitle = '',
  onSuccess = null,
  onError = null,
  metadata = {},
  showModal = false,
  onClose = null,
  className = '',
}) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [successMessage, setSuccessMessage] = useState('');
  const [submittedFields, setSubmittedFields] = useState({});

  const requiredFields = fields
    .filter(field => field.required)
    .map(field => field.name);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = '';

    // Basic validation
    if (requiredFields.includes(name) && !value.trim()) {
      const fieldLabel = fields.find(f => f.name === name)?.label || name;
      error = `${fieldLabel} is required`;
    }

    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
      setSubmittedFields(prev => ({ ...prev, [name]: false }));
    } else if (value.trim()) {
      setSubmittedFields(prev => ({ ...prev, [name]: true }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus(null);

    // Validate all required fields
    const validationErrors = validateFormData(formData, requiredFields);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitLead(formData, leadType, metadata);

      if (result.success) {
        setSubmitStatus('success');
        setSuccessMessage(result.message);
        setFormData({});
        setSubmittedFields({});

        // Call success callback
        if (onSuccess) {
          onSuccess(result);
        }

        // Auto-close modal after 3 seconds if provided
        if (showModal && onClose) {
          setTimeout(onClose, 3000);
        }
      } else {
        setSubmitStatus('error');
        setSuccessMessage(result.message || 'An error occurred. Please try again.');
        if (result.errors) {
          setErrors(result.errors);
        }

        if (onError) {
          onError(result);
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      setSuccessMessage('An unexpected error occurred. Please try again later.');
      if (onError) {
        onError(error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold text-offwhite mb-2">
          {title}
        </h3>
        {subtitle && (
          <p className="text-offwhite/70 text-sm">{subtitle}</p>
        )}
      </div>

      {/* Success State */}
      <AnimatePresence>
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-6 p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-start gap-3"
          >
            <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-emerald-400">Success!</p>
              <p className="text-emerald-200 text-sm mt-1">{successMessage}</p>
              <p className="text-emerald-200/60 text-xs mt-2">
                You'll receive a confirmation email shortly.
              </p>
            </div>
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="mb-6 p-4 rounded-xl bg-red-950/30 border border-red-500/30 flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-red-400">Error</p>
              <p className="text-red-200 text-sm mt-1">{successMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form (only show if not successfully submitted) */}
      {submitStatus !== 'success' && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Render form fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((field, idx) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
                className={field.type === 'textarea' ? 'md:col-span-2' : ''}
              >
                {field.type === 'textarea' ? (
                  <FormTextarea
                    name={field.name}
                    label={field.label}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors[field.name]}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    required={field.required}
                  />
                ) : field.type === 'select' ? (
                  <div>
                    <label className="block text-sm font-medium text-offwhite mb-2">
                      {field.label}
                      {field.required && <span className="text-red-400 ml-1">*</span>}
                    </label>
                    <select
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full px-4 py-2.5 rounded-lg bg-navy-900 border border-gold-DEFAULT/20 text-offwhite placeholder-offwhite/40 focus:outline-none focus:border-gold-DEFAULT focus:ring-2 focus:ring-gold-DEFAULT/30 transition-all duration-200"
                    >
                      <option value="">Select {field.label.toLowerCase()}</option>
                      {field.options?.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors[field.name] && (
                      <p className="text-red-400 text-xs mt-1">{errors[field.name]}</p>
                    )}
                  </div>
                ) : (
                  <FormInput
                    type={field.type}
                    name={field.name}
                    label={field.label}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors[field.name]}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    required={field.required}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: fields.length * 0.05 }}
            className="pt-2"
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </motion.div>

          {/* Privacy Note */}
          <p className="text-xs text-offwhite/50 text-center">
            We respect your privacy. Your information will never be shared.
          </p>
        </form>
      )}
    </motion.div>
  );

  // Render as modal if requested
  if (showModal) {
    return (
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-navy-900 rounded-2xl border border-gold-DEFAULT/20 p-6 md:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 hover:bg-gold-DEFAULT/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-offwhite/70" />
              </button>

              {formContent}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  // Render as inline form
  return (
    <div className={`glass-peacock gloss rounded-2xl p-6 md:p-8 border border-gold-DEFAULT/20 ${className}`}>
      {formContent}
    </div>
  );
};

export default LeadForm;
