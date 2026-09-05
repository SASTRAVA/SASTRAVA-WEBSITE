/**
 * Grow Pillar Page
 * Digital marketing, business growth, revenue optimization
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { PillarCard } from '../components/services/PillarCard';
import { StatCounter } from '../components/trust/StatCounter';
import { ECOSYSTEM_PILLARS, PILLAR_STATISTICS } from '../config/businessModel';
import * as Icons from 'lucide-react';
import { Button } from '../components/ui/Button';

export const GrowPillar = () => {
  const pillar = ECOSYSTEM_PILLARS.GROW;
  const stats = PILLAR_STATISTICS.GROW;

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
        {/* Hero Section */}
        <PageHero
          title={`${pillar.name}: ${pillar.tagline}`}
          subtitle={pillar.description}
          backgroundImage="gradient"
        />

        {/* Main Content Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overview */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <motion.p variants={itemVariants} className="text-gold-500 font-semibold uppercase mb-4">
                About {pillar.name}
              </motion.p>
              <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Accelerate Your Business Growth
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                {pillar.description}
              </motion.p>
            </motion.div>

            {/* Statistics */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 pb-16 border-b border-gray-200 dark:border-gray-700"
            >
              <motion.div variants={itemVariants}>
                <StatCounter
                  value={`${stats.businessesGrown}+`}
                  label="Businesses Grown"
                  icon={Icons.TrendingUp}
                  color={pillar.color.primary}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <StatCounter
                  value={`${stats.avgGrowth}%`}
                  label="Avg Growth Rate"
                  icon={Icons.BarChart2}
                  color={pillar.color.primary}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <StatCounter
                  value={`${stats.campaignRuns}+`}
                  label="Campaigns Run"
                  icon={Icons.Megaphone}
                  color={pillar.color.primary}
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <StatCounter
                  value={`${stats.leadGenerated}+`}
                  label="Leads Generated"
                  icon={Icons.Target}
                  color={pillar.color.primary}
                />
              </motion.div>
            </motion.div>

            {/* Services */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
                Our Services
              </motion.h3>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {pillar.services.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-8 rounded-xl border-2 hover:shadow-xl transition-all group"
                    style={{
                      borderColor: pillar.color.primary + '40',
                      backgroundColor: pillar.color.primary + '05'
                    }}
                    whileHover={{ y: -10 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gold-500 transition-colors">
                      {service}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Data-driven strategies designed to scale your business and revenue
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <Icons.CheckCircle size={16} style={{ color: pillar.color.primary }} />
                        ROI Focused
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <Icons.CheckCircle size={16} style={{ color: pillar.color.primary }} />
                        Real-Time Analytics
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <Icons.CheckCircle size={16} style={{ color: pillar.color.primary }} />
                        Continuous Optimization
                      </li>
                    </ul>
                    <Button
                      className="w-full"
                      style={{ backgroundColor: pillar.color.primary }}
                      action="openContact"
                    >
                      Start Growth Plan
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16" style={{ backgroundColor: pillar.color.primary + '10' }}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Scale Your Business?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let's create a growth strategy tailored to your business
            </p>
            <Button
              className="text-white font-bold"
              style={{ backgroundColor: pillar.color.primary }}
              action="openContact"
            >
              Schedule Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GrowPillar;
