/**
 * ScrollStory Component
 * Scroll-based narrative reveals with progressive animation
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollStory = ({ items = [] }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="space-y-24">
          {items.map((item, index) => {
            const itemProgress = useTransform(
              scrollYProgress,
              [(index) / items.length, (index + 1) / items.length],
              [0, 1]
            );

            return (
              <motion.div
                key={index}
                style={{
                  opacity: itemProgress
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="h-80 bg-gradient-to-br from-gold-500/20 to-peacock-500/20 rounded-2xl" />
                  </>
                ) : (
                  <>
                    <div className="h-80 bg-gradient-to-br from-peacock-500/20 to-gold-500/20 rounded-2xl" />
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScrollStory;
