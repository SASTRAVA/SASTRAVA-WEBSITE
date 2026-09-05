/**
 * TimelineAnimation Component
 * Animated timeline for milestones and history
 */

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export const TimelineAnimation = ({ events = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-500 to-peacock-500"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />

          {/* Timeline Events */}
          <div className="space-y-12 pl-24">
            {events.map((event, index) => {
              const EventIcon = Icons[event.icon] || Icons.CheckCircle;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute -left-20 top-2 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-gold-500 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <EventIcon size={16} className="text-gold-500" />
                  </motion.div>

                  {/* Content */}
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <motion.p
                      className="text-gold-500 font-bold mb-2"
                      whileHover={{ x: 5 }}
                    >
                      {event.date}
                    </motion.p>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {event.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineAnimation;
