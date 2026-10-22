/**
 * Grow Pillar Page
 * Digital marketing, business growth, revenue optimization
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { ECOSYSTEM_PILLARS } from '../config/businessModel';
import * as Icons from 'lucide-react';
import { Button } from '../components/ui/Button';
import { contrastTextColor } from '../utils/contrastText';
import { SeoAnswers } from '../components/seo/SeoAnswers';

export const GrowPillar = () => {
  const pillar = ECOSYSTEM_PILLARS.GROW;
  const serviceDetails = [
    { description: 'Assess the venture, customer problem, and market evidence to prioritize a viable next experiment.', bullets: ['Customer and competitor discovery', 'Business model and market validation', 'Prioritized venture roadmap'] },
    { description: 'Clarify what the business stands for and make its value easier for the intended audience to recognize.', bullets: ['Positioning and audience definition', 'Messaging and visual direction', 'Brand consistency guide'] },
    { description: 'Improve organic and local discovery with useful content, technical foundations, and clear service-area signals.', bullets: ['Keyword and intent map', 'Local SEO and Google Business Profile review', 'AEO/GEO content recommendations'] },
    { description: 'Plan a repeatable content engine that connects expertise to audience needs and business goals.', bullets: ['Editorial themes and calendar', 'Channel-ready content briefs', 'Engagement and conversion measures'] },
    { description: 'Build a sustainable social presence through a clear community purpose and a manageable publishing rhythm.', bullets: ['Channel and community audit', 'Content and response playbook', 'Reach and qualified inquiry reporting'] },
    { description: 'Turn founder priorities into an operating plan with milestones, owners, and regular decision points.', bullets: ['Current-state and constraint review', '90-day operating roadmap', 'Milestone and decision review'] },
  ];

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
              <motion.p variants={itemVariants} className="text-[#725300] font-semibold uppercase mb-4">
                About {pillar.name}
              </motion.p>
              <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Accelerate Your Business Growth
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                {pillar.description}
              </motion.p>
            </motion.div>

            <div className="mb-16 rounded-2xl border border-gold/20 bg-gray-50 p-6 dark:bg-gray-800 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">A scope shaped around your goals</h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-300">We agree the audience, priorities, deliverables, and review measures before work begins. The right approach depends on your context and the requirements of the engagement.</p>
            </div>

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
                      {serviceDetails[index].description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {serviceDetails[index].bullets.map((bullet) => <li key={bullet} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"><Icons.CheckCircle size={16} style={{ color: pillar.color.primary }} />{bullet}</li>)}
                    </ul>
                    <Button
                      className="w-full"
                      style={{ backgroundColor: pillar.color.primary, color: contrastTextColor(pillar.color.primary) }}
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
            <h3 className="text-3xl font-bold text-offwhite mb-4">
              Ready to Scale Your Business?
            </h3>
            <p className="text-lg text-offwhite/85 mb-8">
              Let's create a growth strategy tailored to your business
            </p>
            <Button
              className="font-bold"
              style={{ backgroundColor: pillar.color.primary, color: contrastTextColor(pillar.color.primary) }}
              action="openContact"
            >
              Schedule Consultation
            </Button>
          </div>
        </section>
        <SeoAnswers />
      </main>
      <Footer />
    </>
  );
};

export default GrowPillar;
