/**
 * RevealOnScroll Component
 * Progressive text and content reveals on scroll
 */

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const RevealOnScroll = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directionVariants = {
    up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={directionVariants[direction] || directionVariants.up}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const RevealTextOnScroll = ({
  text = '',
  delay = 0,
  className = ''
}) => {
  const words = text.split(' ');

  return (
    <div className={className}>
      {words.map((word, index) => (
        <RevealOnScroll
          key={index}
          direction="up"
          delay={delay + index * 0.05}
          duration={0.5}
          className="inline-block mr-2"
        >
          <span>{word}</span>
        </RevealOnScroll>
      ))}
    </div>
  );
};

export default RevealOnScroll;
