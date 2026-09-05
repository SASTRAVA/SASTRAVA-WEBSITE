import React from 'react';
import { motion } from 'framer-motion';

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  gradient = 'gold',
  delay = 0,
  index = 0,
}) => {
  const gradientClass = gradient === 'gold' ? 'from-gold-DEFAULT to-gold-mid' : 'from-peacock-blue to-peacock-green';
  const glowColor = gradient === 'gold' ? 'shadow-glow-gold' : 'shadow-glow-teal';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      className="group"
    >
      <div className={`relative h-full glass-gold gloss p-8 rounded-2xl overflow-hidden border border-gold-DEFAULT/20 ${glowColor} transition-all duration-300 group-hover:${gradient === 'gold' ? 'shadow-glow-gold-lg' : 'shadow-glow-teal-lg'}`}>
        
        {/* Animated gradient overlay on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.1 }}
        />

        {/* Icon container with glow */}
        <motion.div
          className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-${gradient} shadow-lg transition-all duration-300 group-hover:shadow-glow-gold-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          style={{
            boxShadow: gradient === 'gold' ? '0 0 20px rgba(201, 168, 76, 0.3)' : '0 0 20px rgba(20, 184, 166, 0.2)',
          }}
        >
          {Icon && <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />}
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <motion.h3 
            className="text-h3 text-offwhite mb-3 transition-colors group-hover:text-gold-light"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {title}
          </motion.h3>
          <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
        </div>

        {/* Glow halo effect on hover */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-gold-DEFAULT/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-peacock-green/5 rounded-full filter blur-3xl" />
        </motion.div>

        {/* Premium border highlight */}
        <div className="absolute inset-0 rounded-2xl border border-gradient-to-r from-gold-DEFAULT/20 to-peacock-green/10 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export const Card = ({ children, className = '', style, ...props }) => (
  <div
    className={`glass-dark rounded-2xl border border-white/10 ${className}`}
    style={style}
    {...props}
  >
    {children}
  </div>
);

export const GlassCard = ({ children, className = '', variant = 'default' }) => {
  const variantClass = {
    default: 'glass p-6 rounded-2xl backdrop-blur-glass border border-white/10',
    gold: 'glass-gold gloss p-6 rounded-2xl backdrop-blur-glass border border-gold-DEFAULT/20 shadow-glow-gold',
    peacock: 'glass-peacock gloss p-6 rounded-2xl backdrop-blur-glass border border-peacock-light/20 shadow-glow-teal',
  }[variant];

  return (
    <div className={`${variantClass} ${className}`}>
      {children}
    </div>
  );
};

export default FeatureCard;
