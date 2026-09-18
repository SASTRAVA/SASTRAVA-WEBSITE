import React from 'react';
import { motion } from 'framer-motion';
import { glass } from '../../styles/colors';

export const GlowCard = ({
  children,
  glowColor = 'peacock',
  className = '',
  hover = true,
}) => {
  const glowStyles = {
    peacock: {
      boxShadow: '0 8px 30px rgba(20, 184, 166, 0.25)',
    },
    gold: {
      boxShadow: '0 8px 30px rgba(201, 168, 76, 0.25)',
    },
  };

  return (
    <motion.div
      whileHover={hover ? { y: -6 } : {}}
      transition={{ duration: 0.3 }}
    >
      <div
        style={{
          ...glass.card,
          ...glowStyles[glowColor],
          background: `rgba(14, 124, 123, 0.12)`,
        }}
        className={`glossy ${className}`}
      >
        {children}
      </div>
    </motion.div>
  );
};
