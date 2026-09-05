/**
 * WhyChooseSection Component
 * Displays why SASTRAVA is different
 * Four key value propositions
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ValuePropositionCard } from '../trust/ValuePropositionCard';
import { VALUE_PROPOSITIONS } from '../../config/businessModel';

export const WhyChooseSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p variants={itemVariants} className="text-gold-500 font-semibold mb-4 uppercase tracking-wide">
            What Sets Us Apart
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why 10,000+ Choose SASTRAVA
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We combine expertise, innovation, and practical experience to deliver real results.
          </motion.p>
        </motion.div>

        {/* Value Propositions Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {VALUE_PROPOSITIONS.map((prop, index) => (
            <motion.div key={prop.id} variants={itemVariants}>
              <ValuePropositionCard
                proposition={prop}
                index={index}
                layout="horizontal"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-16 border-t border-gray-200 dark:border-gray-700"
        >
          {[
            { stat: '98%', label: 'Student Satisfaction', icon: '😊' },
            { stat: '85%', label: 'Job Placement Rate', icon: '🎯' },
            { stat: '50+', label: 'Expert Instructors', icon: '👨‍🎓' },
            { stat: '500+', label: 'Live Projects', icon: '💻' }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <p className="text-4xl font-black mb-2">{item.stat}</p>
              <p className="text-gray-600 dark:text-gray-400 font-semibold mb-2">{item.label}</p>
              <p className="text-3xl">{item.icon}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
