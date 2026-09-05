import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Logo = ({ size = 'sm', className = '' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const sizeMap = {
    sm: { width: 62, height: 78 },
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
      <motion.img
        src="/images/sastrava-mark.png"
        alt="SASTRAVA Logo"
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 object-contain"
        style={{
          backgroundColor: 'transparent',
        }}
      />
    </motion.div>
  );
};

export default Logo;
