/**
 * PillarsSection Component
 * Displays the 4 main business pillars
 * Learn, Build, Grow, Secure
 */

import React from 'react';
import { motion } from 'framer-motion';
import { PillarCard } from '../services/PillarCard';
import { ECOSYSTEM_PILLARS } from '../../config/businessModel';

export const PillarsSection = () => {
  const pillars = Object.values(ECOSYSTEM_PILLARS);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="pillars" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
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
            Integrated Ecosystem
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Four Pillars, Unlimited Possibilities
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our complete ecosystem interconnects learning, innovation, growth, and security. Choose one pillar or combine them to create your perfect solution.
          </motion.p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {pillars.map((pillar, index) => (
            <motion.div key={pillar.id} variants={itemVariants}>
              <PillarCard
                pillar={pillar}
                size="md"
                interactive={true}
                featured={index === 0}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Integration Benefits */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gold-500/10 to-peacock-500/10 border border-gold-500/30 rounded-2xl p-8 md:p-12"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Why Choose Our Integrated Approach?
          </motion.h3>
          
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'Seamless Integration',
                description: 'Connect learning outcomes with project building and marketing campaigns',
                icon: '🔗'
              },
              {
                title: 'Cost Efficiency',
                description: 'Get all services from one trusted partner at competitive rates',
                icon: '💰'
              },
              {
                title: 'Unified Support',
                description: 'Single point of contact for all your business needs',
                icon: '🤝'
              },
              {
                title: 'Synergistic Growth',
                description: 'Leverage multiple services for exponential business growth',
                icon: '📈'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4"
              >
                <span className="text-4xl flex-shrink-0">{benefit.icon}</span>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PillarsSection;
