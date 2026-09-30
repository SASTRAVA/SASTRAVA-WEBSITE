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
  type = 'button',
  disabled = false,
  loading = false,
  // New action props
  action = null, // 'navigate', 'scroll', 'openForm', 'email', 'phone', 'whatsapp', 'external'
  actionConfig = {}, // Configuration for the action
  onFormOpen = null, // Callback when form action is triggered
  style: customStyle = {},
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
          // eslint-disable-next-line no-case-declarations -- Scoped to this case branch.
          const element = document.getElementById(actionConfig.sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            console.warn(`Button scroll target not found: ${actionConfig.sectionId}`);
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
          } else {
            navigate('/contact');
          }
          break;

        case 'email':
          // eslint-disable-next-line no-case-declarations -- Scoped to this case branch.
          const emailAddress = actionConfig.email;
          if (typeof emailAddress === 'string' && emailAddress.includes('@')) {
            const emailParams = new URLSearchParams();
            if (actionConfig.subject) emailParams.set('subject', actionConfig.subject);
            if (actionConfig.body) emailParams.set('body', actionConfig.body);
            window.location.href = `mailto:${emailAddress}${emailParams.size ? `?${emailParams.toString()}` : ''}`;
          } else {
            console.warn('Email button action requires actionConfig.email.');
          }
          break;

        case 'phone':
          window.location.href = `tel:${actionConfig.phone}`;
          break;

        case 'whatsapp':
          // eslint-disable-next-line no-case-declarations -- Scoped to this case branch.
          const message = encodeURIComponent(actionConfig.message || 'Hi, I\'m interested in SASTRAVA\'s services.');
          // eslint-disable-next-line no-case-declarations -- Scoped to this case branch.
          const phone = String(actionConfig.phone || '').replace(/\D/g, '');
          if (phone) window.open(`https://wa.me/${phone}?text=${message}`, '_blank', 'noopener,noreferrer');
          else console.warn('WhatsApp button requires actionConfig.phone.');
          break;

        case 'external':
        case 'externalLink':
        case 'external-link':
          // eslint-disable-next-line no-case-declarations -- Scoped to this case branch.
          const externalUrl = actionConfig.url;
          if (typeof externalUrl !== 'string' || !/^(https:\/\/|mailto:|tel:)/i.test(externalUrl)) {
            console.warn('External button action requires a valid https, mailto, or tel URL.');
          } else if (actionConfig.newWindow === false) {
            window.location.href = externalUrl;
          } else {
            window.open(externalUrl, '_blank', 'noopener,noreferrer');
          }
          break;

        case 'download':
          if (typeof actionConfig.url === 'string' && actionConfig.url) {
            const link = document.createElement('a');
            link.href = actionConfig.url;
            link.download = actionConfig.filename || 'download';
            link.rel = 'noopener noreferrer';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          } else {
            console.warn('Download button requires actionConfig.url.');
          }
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
      bg-gradient-gold bg-shine text-navy-950 font-bold
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
  const variantBackgrounds = {
    primary: {
      backgroundImage: 'linear-gradient(135deg, #C9A84C 0%, #E6C200 25%, #FFF3B0 50%, #C9A84C 75%, #A67C00 100%)',
      color: '#0B0F1A',
    },
    secondary: {
      backgroundImage: 'linear-gradient(135deg, #0F3D3E 0%, #0A6E6E 55%, #0A7A70 100%)',
      color: '#FFFFFF',
    },
  };

  return (
    <motion.button
      type={type}
      aria-busy={loading || undefined}
      whileHover={!loading && !disabled ? { scale: 1.04, y: -2 } : {}}
      whileTap={!loading && !disabled ? { scale: 0.97 } : {}}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      style={{
        ...variantBackgrounds[variant],
        ...customStyle,
        ...(customStyle.backgroundColor && !customStyle.backgroundImage ? { backgroundImage: 'none' } : {}),
      }}
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
