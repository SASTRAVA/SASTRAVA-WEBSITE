/**
 * CounterAnimation Component
 * Animated number counter for inline statistics
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const CounterAnimation = ({
  from = 0,
  to = 100,
  duration = 2,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = ''
}) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const range = to - from;
    const increment = range / (duration * 60); // 60fps
    let current = from;

    const timer = setInterval(() => {
      current += increment;
      if (current >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current * Math.pow(10, decimals)) / Math.pow(10, decimals));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, from, to, duration, decimals]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <span className="font-bold">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
    </motion.div>
  );
};

export default CounterAnimation;
