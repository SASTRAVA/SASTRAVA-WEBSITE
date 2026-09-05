/**
 * Services Hub Page
 * Phase 2: Complete service ecosystem interface
 * Navigate between Learn, Build, Grow, Secure pillars
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { PillarCard } from '../components/services/PillarCard';
import { ServiceCard } from '../components/services/ServiceCard';
import { ECOSYSTEM_PILLARS, SERVICE_HIERARCHY } from '../config/businessModel';
import * as Icons from 'lucide-react';
import { Button } from '../components/ui/Button';

export const ServicesHub = () => {
  const { pillar: urlPillar } = useParams();
  const navigate = useNavigate();
  
  const [selectedPillar, setSelectedPillar] = useState(
    urlPillar ? urlPillar.toUpperCase() : 'LEARN'
  );

  const currentPillar = ECOSYSTEM_PILLARS[selectedPillar];
  const currentHierarchy = SERVICE_HIERARCHY[selectedPillar.toLowerCase()];

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
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <PageHero
          title="Service Ecosystem"
          subtitle="Everything you need to learn, build, grow, and secure"
          backgroundImage="gradient"
        />

        {/* Pillar Selection Grid */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.p variants={itemVariants} className="text-gold-500 font-semibold uppercase mb-4">
                Four Pillars
              </motion.p>
              <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Choose Your Path
              </motion.h2>
              <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Select a pillar to explore all related services and offerings
              </motion.p>
            </motion.div>

            {/* Pillar Selection Tabs */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            >
              {Object.values(ECOSYSTEM_PILLARS).map((pillar) => (
                <motion.button
                  key={pillar.id}
                  onClick={() => setSelectedPillar(pillar.name.toUpperCase())}
                  className="h-full"
                  variants={itemVariants}
                >
                  <PillarCard
                    pillar={pillar}
                    size="md"
                    interactive={true}
                    featured={selectedPillar === pillar.name.toUpperCase()}
                  />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pillar Detail Section */}
        <AnimatePresence mode="wait">
          <motion.section
            key={selectedPillar}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Pillar Header */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center mb-16"
              >
                <motion.div variants={itemVariants} className="mb-6 flex justify-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: currentPillar.color.primary + '20' }}
                  >
                    {React.createElement(Icons[currentPillar.icon], {
                      size: 48,
                      style: { color: currentPillar.color.primary }
                    })}
                  </div>
                </motion.div>

                <motion.h2
                  variants={itemVariants}
                  className="text-5xl font-black mb-4"
                  style={{ color: currentPillar.color.primary }}
                >
                  {currentPillar.name}
                </motion.h2>

                <motion.p variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {currentPillar.tagline}
                </motion.p>

                <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                  {currentPillar.description}
                </motion.p>

                <motion.p variants={itemVariants} className="text-lg text-gray-500 dark:text-gray-400 italic mb-8">
                  {currentPillar.callout}
                </motion.p>

                <motion.button
                  variants={itemVariants}
                  className="px-8 py-4 rounded-lg font-bold text-white transition-all inline-block"
                  style={{ backgroundColor: currentPillar.color.primary }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentPillar.cta}
                </motion.button>
              </motion.div>

              {/* Services by Subcategory */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-16"
              >
                {currentHierarchy.subcategories.map((category) => (
                  <motion.div
                    key={category.id}
                    variants={itemVariants}
                    className="space-y-8"
                  >
                    {/* Subcategory Header */}
                    <div className="flex items-center gap-4 pb-6 border-b-2" style={{ borderColor: currentPillar.color.primary + '30' }}>
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: currentPillar.color.primary + '20' }}
                      >
                        {React.createElement(Icons[category.icon], {
                          size: 24,
                          style: { color: currentPillar.color.primary }
                        })}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {category.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {category.count}+ offerings
                        </p>
                      </div>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {Array(3).fill(null).map((_, i) => (
                        <ServiceCard
                          key={i}
                          service={{
                            name: `${category.name} Service ${i + 1}`,
                            description: 'Professional service with expert support',
                            icon: category.icon
                          }}
                          pillarColor={currentPillar.color.primary}
                          index={i}
                          onClick={() => navigate(`/services/${selectedPillar.toLowerCase()}/${category.id}`)}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Featured Services */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mt-24 pt-24 border-t-2 border-gray-200 dark:border-gray-700"
              >
                <motion.h3 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Featured Offerings
                </motion.h3>

                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {currentPillar.featured.map((offering, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="p-8 rounded-xl border-2 cursor-pointer hover:shadow-xl transition-all"
                      style={{
                        borderColor: currentPillar.color.primary + '40',
                        backgroundColor: currentPillar.color.primary + '05'
                      }}
                      whileHover={{ y: -10 }}
                    >
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {offering.name}
                      </h4>
                      <p className="text-2xl font-black mb-4" style={{ color: currentPillar.color.primary }}>
                        {offering.price}
                      </p>
                      <Button
                        className="w-full"
                        style={{ backgroundColor: currentPillar.color.primary }}
                        action="openContact"
                      >
                        Enroll Now
                      </Button>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </AnimatePresence>

        {/* Integration CTA */}
        <section className="py-16 bg-gradient-to-r from-gold-500/10 to-peacock-500/10 border-t border-b border-gold-500/20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Looking for Multiple Services?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Combine services from different pillars for maximum impact
            </p>
            <Button
              className="bg-gold-500 hover:bg-gold-600 text-black font-bold"
              action="openContact"
            >
              Create a Custom Bundle
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesHub;
