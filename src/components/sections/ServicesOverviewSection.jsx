/**
 * ServicesOverviewSection Component
 * Displays all services organized by pillar
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ECOSYSTEM_PILLARS } from '../../config/businessModel';
import * as Icons from 'lucide-react';

export const ServicesOverviewSection = () => {
  const [activePillar, setActivePillar] = useState('LEARN');
  const currentPillar = ECOSYSTEM_PILLARS[activePillar];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
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
            Complete Service Portfolio
          </motion.p>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Explore Our Services
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the services that align with your goals
          </motion.p>
        </motion.div>

        {/* Pillar Selector Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {Object.values(ECOSYSTEM_PILLARS).map((pillar) => {
            const Icon = Icons[pillar.icon];
            const isActive = activePillar === pillar.name.toUpperCase();

            return (
              <motion.button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.name.toUpperCase())}
                className={`
                  px-6 py-3 rounded-lg font-semibold transition-all duration-300
                  flex items-center gap-2
                  ${isActive
                    ? 'text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }
                `}
                style={isActive ? { backgroundColor: pillar.color.primary } : {}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
                {pillar.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePillar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentPillar.services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`
                  p-6 rounded-xl border-2 cursor-pointer transition-all duration-300
                  hover:shadow-xl hover:-translate-y-1
                  bg-white dark:bg-gray-800
                `}
                style={{
                  borderColor: currentPillar.color.primary + '40',
                  ':hover': { borderColor: currentPillar.color.primary }
                }}
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {service}
                </h4>
                <p 
                  className="text-sm font-semibold mb-4"
                  style={{ color: currentPillar.color.primary }}
                >
                  Part of {currentPillar.name}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Professional-grade service with personalized support
                </p>
                <button
                  className="text-sm font-semibold flex items-center gap-2 transition-all hover:gap-3"
                  style={{ color: currentPillar.color.primary }}
                >
                  Learn More
                  <Icons.ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 mb-6">
            Don't see what you're looking for?
          </motion.p>
          <motion.button
            variants={itemVariants}
            className="px-8 py-4 rounded-lg font-bold text-white transition-all"
            style={{ backgroundColor: currentPillar.color.primary }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
