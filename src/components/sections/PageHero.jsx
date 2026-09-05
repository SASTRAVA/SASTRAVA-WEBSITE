import React from 'react';
import { motion } from 'framer-motion';

/**
 * PageHero Component
 * Reusable page header section matching homepage premium design system
 * Includes: title with gold gradient, description, optional subtitle
 */
export const PageHero = ({ 
  title, 
  description, 
  subtitle,
  showGradientBackground = true,
}) => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-navy-950">
      {/* 🎨 SUBTLE PEACOCK GRADIENT BACKGROUND */}
      {showGradientBackground && (
        <>
          <div className="absolute inset-0 bg-gradient-peacock-animated bg-300% opacity-30 animate-gradient-flow" />
          <div className="absolute inset-0 bg-navy-950/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/6 via-transparent to-white/2 pointer-events-none" />
        </>
      )}

      {/* 🌀 SUBTLE FLOATING ACCENT - Hide on mobile for performance */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-peacock-green/8 rounded-full filter blur-3xl opacity-40 pointer-events-none hidden md:block will-change-transform" />
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-gold-DEFAULT/6 rounded-full filter blur-3xl opacity-30 pointer-events-none hidden md:block will-change-transform" />

      {/* CONTENT */}
      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Optional Subtitle Badge */}
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
              className="inline-flex items-center px-4 py-2 rounded-full 
                bg-gradient-gold/5 backdrop-blur-sm md:backdrop-blur-glass
                border border-gold-DEFAULT/40
                mb-8"
              style={{
                boxShadow: '0 0 16px rgba(201, 168, 76, 0.12), inset 0 0 12px rgba(201, 168, 76, 0.04)',
              }}
            >
              <span className="text-sm font-semibold text-gold-light uppercase tracking-widest">
                {subtitle}
              </span>
            </motion.div>
          )}

          {/* Main Title with Gold Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-offwhite mb-6 leading-tight"
          >
            {title.split('').map((char, idx) => 
              char === ' ' ? (
                <span key={`space-${idx}`}> </span>
              ) : null
            )}
            {title.includes(' ') ? (
              <>
                {title.split(' ').slice(0, -1).join(' ')}
                {' '}
                <motion.span
                  className="text-transparent bg-gradient-to-r from-gold-mid via-gold-light to-gold-mid bg-clip-text"
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {title.split(' ').pop()}
                </motion.span>
              </>
            ) : (
              <motion.span
                className="text-transparent bg-gradient-to-r from-gold-mid via-gold-light to-gold-mid bg-clip-text"
                style={{
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                {title}
              </motion.span>
            )}
          </motion.h1>

          {/* Animated Divider */}
          <motion.div
            className="h-1.5 w-16 bg-gradient-to-r from-transparent via-gold-light to-transparent rounded-full mx-0"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 64, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            style={{
              boxShadow: '0 0 20px rgba(255, 243, 176, 0.25), 0 0 40px rgba(201, 168, 76, 0.12)',
            }}
          />
        </motion.div>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-xl text-offwhite/85 max-w-3xl mt-8 leading-relaxed font-light tracking-wide"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
