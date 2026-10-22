/**
 * Build Pillar Page
 * Development, software services, projects, and innovation
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ServiceLegalNote } from '../components/sections/ServiceLegalNote';
import { PageHero } from '../components/sections/PageHero';
import { ECOSYSTEM_PILLARS } from '../config/businessModel';
import * as Icons from 'lucide-react';
import { Button } from '../components/ui/Button';
import { contrastTextColor } from '../utils/contrastText';
import { SeoAnswers } from '../components/seo/SeoAnswers';
import { ExplodedAnatomyStage } from '../components/interactive/ExplodedAnatomyStage';
import { DeliverablesBento } from '../components/interactive/DeliverablesBento';
import { buildSteps, deliverables } from '../config/phase7Experiences';

export const BuildPillar = () => {
  const pillar = ECOSYSTEM_PILLARS.BUILD;
  const serviceDetails = [
    { description: 'Design and deliver websites and applications with accessible interfaces, maintainable architecture, and clear acceptance criteria.', bullets: ['Requirements and system architecture', 'Responsive interface and API implementation', 'Release, handover, and support plan'] },
    { description: 'Identify suitable workflow automation and AI integrations, with human review and safe failure handling built into the scope.', bullets: ['Workflow and data assessment', 'Integration and model evaluation', 'Human review and fallback design'] },
    { description: 'Reduce product uncertainty with a focused prototype or MVP based on user needs and testable assumptions.', bullets: ['User and problem definition', 'Prototype and prioritized backlog', 'Feedback and validation plan'] },
    { description: 'Explore applied research questions and technical options before investing in a larger implementation.', bullets: ['Research question and constraints', 'Feasibility review or proof of concept', 'Findings and recommended next steps'] },
    { description: 'Support startup teams with product, technology, and operating guidance matched to their current stage.', bullets: ['Product and technical discovery', 'Milestones and resource priorities', 'Founder review and iteration checkpoints'] },
    { description: 'Create reusable developer resources with documentation, maintenance expectations, and licensing considered before release.', bullets: ['Reusable component or workflow design', 'Usage and contribution documentation', 'License and maintenance plan'] },
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
              <motion.p variants={itemVariants} className="text-[#00695C] font-semibold uppercase mb-4">
                About {pillar.name}
              </motion.p>
              <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Transform Ideas Into Reality
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                {pillar.description}
              </motion.p>
            </motion.div>

            <ExplodedAnatomyStage eyebrow="Software architecture stack" title="Explore the layers behind a maintainable product." description="Select a layer to see how product experience, application logic, infrastructure, and release practice fit together." steps={buildSteps} tone="teal" />
            <DeliverablesBento items={deliverables.build} />

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
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-peacock-500 transition-colors">
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
                      Start Project
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
              Ready to Build Something Great?
            </h3>
            <p className="text-lg text-offwhite/85 mb-8">
              Let's turn your vision into a powerful solution
            </p>
            <Button
              className="font-bold"
              style={{ backgroundColor: pillar.color.primary, color: contrastTextColor(pillar.color.primary) }}
              action="openContact"
            >
              Get Started
            </Button>
          </div>
        </section>
        <SeoAnswers />
      <ServiceLegalNote />
      </main>
      <Footer />
    </>
  );
};

export default BuildPillar;
