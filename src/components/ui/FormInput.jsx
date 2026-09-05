import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';

/**
 * FormInput Component
 * Reusable input with focus glow, error states, and success feedback
 * Provides premium, accessible form interaction
 */
export const FormInput = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  success,
  required = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-6">
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-offwhite mb-2"
        >
          {label}
          {required && <span className="text-gold-DEFAULT ml-1">*</span>}
        </label>
      )}

      {/* Input Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          placeholder={placeholder}
          className={`
            w-full px-4 py-3 
            bg-navy-900/40 backdrop-blur-sm
            border border-gold-DEFAULT/20
            text-offwhite placeholder-offwhite/40
            rounded-lg
            transition-all duration-300
            ${isFocused && !error ? 'border-gold-light/60 shadow-lg' : ''}
            ${error ? 'border-red-500/60 bg-red-500/5' : ''}
            ${success && !isFocused ? 'border-green-500/60' : ''}
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-text'}
            focus:outline-none
            ${className}
          `}
          style={{
            boxShadow: isFocused && !error
              ? '0 0 16px rgba(201, 168, 76, 0.25), inset 0 0 8px rgba(201, 168, 76, 0.08)'
              : error
              ? '0 0 12px rgba(239, 68, 68, 0.15)'
              : '',
          }}
          {...props}
        />

        {/* Focus Ring for accessibility */}
        {isFocused && !error && (
          <div
            className="absolute inset-0 border border-gold-light/30 rounded-lg pointer-events-none"
            style={{
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          />
        )}

        {/* Success Icon */}
        {success && !isFocused && (
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute right-3 top-3 text-green-500"
          >
            <CheckCircle className="w-5 h-5" />
          </motion.div>
        )}

        {/* Error Icon */}
        {error && (
          <motion.div
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute right-3 top-3 text-red-500"
          >
            <AlertCircle className="w-5 h-5" />
          </motion.div>
        )}
      </motion.div>

      {/* Error Message */}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm text-red-500 mt-2 font-medium"
        >
          {error}
        </motion.p>
      )}

      {/* Success Message */}
      {success && !isFocused && (
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-sm text-green-500 mt-2 font-medium"
        >
          ✓ {success}
        </motion.p>
      )}
    </div>
  );
};

/**
 * FormTextarea Component
 * Multi-line text input with same styling system
 */
export const FormTextarea = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  success,
  required = false,
  disabled = false,
  rows = 5,
  className = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="mb-6">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-semibold text-offwhite mb-2"
        >
          {label}
          {required && <span className="text-gold-DEFAULT ml-1">*</span>}
        </label>
      )}

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={disabled}
          placeholder={placeholder}
          rows={rows}
          className={`
            w-full px-4 py-3 
            bg-navy-900/40 backdrop-blur-sm
            border border-gold-DEFAULT/20
            text-offwhite placeholder-offwhite/40
            rounded-lg
            transition-all duration-300 resize-none
            ${isFocused && !error ? 'border-gold-light/60 shadow-lg' : ''}
            ${error ? 'border-red-500/60 bg-red-500/5' : ''}
            ${success && !isFocused ? 'border-green-500/60' : ''}
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-text'}
            focus:outline-none
            ${className}
          `}
          style={{
            boxShadow: isFocused && !error
              ? '0 0 16px rgba(201, 168, 76, 0.25), inset 0 0 8px rgba(201, 168, 76, 0.08)'
              : error
              ? '0 0 12px rgba(239, 68, 68, 0.15)'
              : '',
          }}
          {...props}
        />

        {error && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute right-3 top-3 text-red-500"
          >
            <AlertCircle className="w-5 h-5" />
          </motion.div>
        )}

        {success && !isFocused && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute right-3 top-3 text-green-500"
          >
            <CheckCircle className="w-5 h-5" />
          </motion.div>
        )}
      </motion.div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500 mt-2 font-medium"
        >
          {error}
        </motion.p>
      )}

      {success && !isFocused && (
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-green-500 mt-2 font-medium"
        >
          ✓ {success}
        </motion.p>
      )}
    </div>
  );
};
