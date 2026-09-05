import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  loading = false,
  // New action props
  action = null, // 'navigate', 'scroll', 'openForm', 'email', 'phone', 'whatsapp', 'external'
  actionConfig = {}, // Configuration for the action
  onFormOpen = null, // Callback when form action is triggered
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = useCallback((e) => {
    // Execute action if defined
    if (action) {
      switch (action) {
        case 'navigate':
          navigate(actionConfig.path || '/');
          break;

        case 'scroll':
          const element = document.getElementById(actionConfig.sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          break;

        case 'openForm':
        case 'openContact':
        case 'openEnrollment':
        case 'openServiceInquiry':
        case 'openConsultation':
        case 'openInternship':
          if (onFormOpen) {
            onFormOpen(action, actionConfig);
          }
          break;

        case 'email':
          window.location.href = `mailto:${actionConfig.email}`;
          break;

        case 'phone':
          window.location.href = `tel:${actionConfig.phone}`;
          break;

        case 'whatsapp':
          const message = encodeURIComponent(actionConfig.message || 'Hi, I\'m interested in SASTRAVA\'s services.');
          window.open(`https://wa.me/${actionConfig.phone}?text=${message}`, '_blank');
          break;

        case 'external':
          window.open(actionConfig.url, actionConfig.newWindow !== false ? '_blank' : '_self');
          break;

        case 'download':
          const link = document.createElement('a');
          link.href = actionConfig.url;
          link.download = actionConfig.filename || 'download';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          break;

        default:
          console.warn('Unknown button action:', action);
      }
    }

    // Call original onClick if provided
    if (onClick) {
      onClick(e);
    }
  }, [action, actionConfig, onClick, navigate, onFormOpen]);
  const baseStyles = 'relative font-semibold rounded-xl transition-all duration-300 ease-out overflow-hidden inline-flex items-center justify-center gap-2 will-change-transform';

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm min-h-10',
    md: 'px-6 py-3 text-base min-h-12',
    lg: 'px-8 py-4 text-lg min-h-14',
    xl: 'px-10 py-5 text-xl min-h-16',
  };

  const variantStyles = {
    primary: `${baseStyles} gloss
      bg-gradient-gold bg-shine text-white font-bold
      shadow-glow-gold hover:shadow-glow-gold-lg
      hover:scale-104 hover:-translate-y-0.5
      active:scale-95
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
      border border-gold-light/20
      relative overflow-hidden`,

    secondary: `${baseStyles} gloss
      bg-gradient-peacock text-white font-semibold
      shadow-glow-teal hover:shadow-glow-teal-lg
      hover:scale-104 hover:-translate-y-0.5
      active:scale-95
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
      border border-peacock-light/30`,

    outline: `${baseStyles}
      bg-transparent text-gold-DEFAULT border-2 border-gold-DEFAULT
      hover:bg-gold-DEFAULT hover:text-navy-950
      hover:shadow-glow-gold
      active:scale-95
      disabled:opacity-50 disabled:cursor-not-allowed`,

    ghost: `${baseStyles}
      bg-transparent text-offwhite
      hover:bg-white/5 hover:text-gold-light
      active:scale-95
      disabled:opacity-50 disabled:cursor-not-allowed`,
  };

  return (
    <motion.button
      whileHover={!loading && !disabled ? { scale: 1.04, y: -2 } : {}}
      whileTap={!loading && !disabled ? { scale: 0.97 } : {}}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={handleClick}
      disabled={disabled || loading}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              <Loader2 className="w-4 h-4" />
            </motion.div>
            <span>Processing...</span>
          </>
        ) : (
          children
        )}
      </span>
      {/* Shine effect overlay */}
      {variant === 'primary' && !loading && (
        <motion.div
          className="absolute inset-0 bg-gradient-gold-shimmer opacity-0"
          animate={{
            opacity: [0, 0.3, 0],
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
          }}
          style={{ backgroundSize: '200% 100%' }}
        />
      )}
    </motion.button>
  );
};

export default Button;
