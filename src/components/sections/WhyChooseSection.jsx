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
            Why Work with SASTRAVA
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We shape practical work around clear objectives, evidence, and the people who will use the result.
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

      </div>
    </section>
  );
};

export default WhyChooseSection;
