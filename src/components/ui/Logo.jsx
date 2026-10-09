import React from 'react';
import { motion } from 'framer-motion';

export const Logo = ({ size = 'sm', className = '' }) => {
  const sizeMap = {
    sm: { width: 56, height: 56 },
    md: { width: 82, height: 102 },
    xl: { width: 98, height: 122 },
    lg: { width: 116, height: 144 },
  };

  const { width, height } = sizeMap[size];

  return (
    <motion.div
      className={`relative flex shrink-0 items-center justify-center ${className}`}
      whileHover={{ scale: 1.12 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
      style={{ width, height }}
    >
      <img
        src="/images/sastrava-mark.webp"
        alt="SASTRAVA — Learn, Build, Grow, Secure"
        width={width}
        height={height}
        className="relative z-10 object-contain"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
    </motion.div>
  );
};

export default Logo;
