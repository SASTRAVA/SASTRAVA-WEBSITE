/**
 * Penetration Testing Service Page
 * Advanced security testing and attack simulation
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { TestimonialCard, CaseStudyPreview } from '../components/trust';
import { CheckCircle, Shield, Target, Zap } from 'lucide-react';

const PenetrationTesting = () => {
  const phases = [
    {
      phase: 'Phase 1',
      name: 'Reconnaissance',
      description: 'Information gathering, asset discovery, and threat modeling',
      tasks: ['Target Identification', 'Network Mapping', 'Open Source Intelligence']
    },
    {
      phase: 'Phase 2',
      name: 'Scanning & Enumeration',
      description: 'Port scanning, service identification, and vulnerability enumeration',
      tasks: ['Port Scanning', 'Service Detection', 'Configuration Analysis']
    },
    {
      phase: 'Phase 3',
      name: 'Exploitation',
      description: 'Exploit identified vulnerabilities and simulate real attacks',
      tasks: ['Active Testing', 'Chain Attacks', 'Privilege Escalation']
    },
    {
      phase: 'Phase 4',
      name: 'Reporting',
      description: 'Comprehensive reporting with remediation recommendations',
      tasks: ['Risk Assessment', 'Remediation Plans', 'Executive Summary']
    },
  ];

  const benefits = [
    'Identify critical security vulnerabilities before attackers',
    'Test incident response procedures and team readiness',
    'Validate security controls and defense mechanisms',
    'Compliance with regulatory requirements (PCI-DSS, HIPAA)',
    'Reduce security breach risk and liability',
    'Improve overall security posture',
  ];

  const deliverables = [
    { name: 'Vulnerability Report', desc: 'Detailed findings with severity ratings' },
    { name: 'Remediation Plan', desc: 'Step-by-step fix recommendations' },
    { name: 'Risk Assessment', desc: 'Business impact and prioritization' },
    { name: 'Executive Summary', desc: 'High-level overview for leadership' },
    { name: 'Proof of Concept', desc: 'Demonstration of exploits and impact' },
    { name: 'Re-test Verification', desc: 'Confirmation of fixes post-remediation' },
  ];

  const testimonials = [
    {
      quote: 'Their thorough penetration test uncovered critical vulnerabilities we didn\'t know about. The recommendations were actionable and realistic.',
      author: 'Security Director',
      title: 'Fortune 500 Tech Company',
      rating: 5
    },
    {
      quote: 'Professional, ethical approach to testing our security. Helped us pass compliance audits and improve defenses.',
      author: 'CTO',
      title: 'FinTech Startup',
      rating: 5
    },
  ];

  const faqs = [
    {
      q: 'Will testing cause downtime?',
      a: 'We work with your team to schedule testing during approved windows. Our testing is designed to minimize impact.'
    },
    {
      q: 'How long does a penetration test take?',
      a: 'Typically 1-4 weeks depending on scope. Web applications take 1-2 weeks, network infrastructure 2-3 weeks.'
    },
    {
      q: 'What\'s included in the report?',
      a: 'Executive summary, detailed findings, severity ratings, remediation steps, and post-test verification.'
    },
    {
      q: 'Do you do re-testing after fixes?',
      a: 'Yes, re-testing is included to verify that vulnerabilities have been properly remediated.'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <PageHero
          title="Penetration Testing"
          subtitle="Advanced Security Testing & Attack Simulation"
          description="Identify vulnerabilities before attackers do. Comprehensive security testing aligned with industry standards"
        />

        {/* Methodology */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Our Methodology</h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {phases.map((phase, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 h-full hover:border-gold/40 transition-all">
                    <p className="text-sm font-bold text-gold mb-2">{phase.phase}</p>
                    <h4 className="text-lg font-bold text-white mb-2">{phase.name}</h4>
                    <p className="text-sm text-gray-400 mb-4">{phase.description}</p>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, tidx) => (
                        <li key={tidx} className="flex items-center gap-2 text-xs text-gray-300">
                          <CheckCircle size={14} className="text-peacock flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Why Penetration Testing</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <Shield className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Deliverables</h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {deliverables.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 hover:border-gold/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mb-3">
                    <Target size={20} className="text-gold" />
                  </div>
                  <h4 className="font-bold text-white mb-2">{item.name}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Client Feedback</h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {testimonials.map((testimonial, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <TestimonialCard {...testimonial} pillarColor="#C9A84C" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Frequently Asked Questions</h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 hover:border-gold/40 transition-all"
                >
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <Zap size={18} className="text-gold" />
                    {faq.q}
                  </h4>
                  <p className="text-gray-400 ml-8">{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-gold/10 to-peacock/10 border-y border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for a Security Assessment?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's test your infrastructure and strengthen your defenses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                Schedule Assessment
              </Button>
              <Button size="lg" variant="secondary">
                Download Methodology Guide
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PenetrationTesting;
