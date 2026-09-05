/**
 * StatCounter Component
 * Animated counter for business metrics
 * Used in stats section
 */

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const StatCounter = ({
  value,
  label,
  icon: Icon,
  description,
  color = '#C9A84C',
  delay = 0
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  // Parse numeric value from string (e.g., "10,000+" => 10000)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9,]/g, '');

  useEffect(() => {
    if (!isInView) return;

    let currentValue = 0;
    const increment = numericValue / 50;
    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(currentValue));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="text-center"
    >
      {/* Icon */}
      {Icon && (
        <div 
          className="mb-4 inline-block p-3 rounded-lg"
          style={{ backgroundColor: color + '15' }}
        >
          <Icon size={32} style={{ color }} />
        </div>
      )}

      {/* Value */}
      <motion.div
        className="text-4xl font-bold mb-2"
        style={{ color }}
      >
        {formatNumber(displayValue)}{suffix}
      </motion.div>

      {/* Label */}
      <p className="text-gray-700 dark:text-gray-300 font-semibold mb-1">
        {label}
      </p>

      {/* Description */}
      {description && (
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default StatCounter;
