/**
 * 3DCardHover Component
 * CSS 3D transforms with perspective hover effects
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Card3DHover = ({
  children,
  intensity = 20,
  className = ''
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!isHovering) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateXVal = ((y - rect.height / 2) / rect.height) * intensity;
    const rotateYVal = ((x - rect.width / 2) / rect.width) * intensity;

    setRotateX(-rotateXVal);
    setRotateY(rotateYVal);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};

export default Card3DHover;
