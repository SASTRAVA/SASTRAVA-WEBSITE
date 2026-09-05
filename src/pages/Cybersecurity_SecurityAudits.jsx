/**
 * Security Audits Service Page
 * Comprehensive system security evaluation and compliance verification
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { TestimonialCard } from '../components/trust';
import { CheckCircle, Shield, ClipboardList, Zap } from 'lucide-react';

const SecurityAudits = () => {
  const phases = [
    {
      phase: 'Phase 1',
      name: 'Planning & Scope',
      description: 'Define audit objectives, scope, and compliance requirements',
      tasks: ['Requirement Analysis', 'Asset Inventory', 'Risk Assessment']
    },
    {
      phase: 'Phase 2',
      name: 'Assessment',
      description: 'Evaluate security controls, policies, and infrastructure',
      tasks: ['Control Review', 'Policy Audit', 'Infrastructure Analysis']
    },
    {
      phase: 'Phase 3',
      name: 'Testing & Validation',
      description: 'Verify effectiveness of security controls through testing',
      tasks: ['Control Testing', 'Compliance Validation', 'Gap Analysis']
    },
    {
      phase: 'Phase 4',
      name: 'Reporting',
      description: 'Comprehensive audit report with remediation roadmap',
      tasks: ['Findings Report', 'Risk Prioritization', 'Action Plan']
    },
  ];

  const benefits = [
    'Verify compliance with regulatory requirements',
    'Identify security gaps and weaknesses',
    'Validate effectiveness of controls',
    'Meet audit and certification requirements',
    'Establish baseline for continuous improvement',
    'Reduce organizational risk and liability',
  ];

  const deliverables = [
    { name: 'Audit Report', desc: 'Complete findings with risk ratings' },
    { name: 'Compliance Matrix', desc: 'Requirements vs current state' },
    { name: 'Gap Analysis', desc: 'Missing controls and capabilities' },
    { name: 'Remediation Plan', desc: 'Prioritized action items' },
    { name: 'Executive Summary', desc: 'High-level overview for leadership' },
    { name: 'Implementation Guidance', desc: 'Steps to close gaps' },
  ];

  const testimonials = [
    {
      quote: 'Their thorough audit helped us achieve ISO 27001 certification. Professional and comprehensive approach.',
      author: 'Head of Security',
      title: 'Healthcare Organization',
      rating: 5
    },
    {
      quote: 'Identified critical gaps we missed. Their remediation plan was clear and actionable.',
      author: 'CISO',
      title: 'Financial Services',
      rating: 5
    },
  ];

  const faqs = [
    {
      q: 'How long does a security audit take?',
      a: 'Typically 2-4 weeks depending on organization size and complexity. Small organizations 1-2 weeks, enterprises 3-4 weeks.'
    },
    {
      q: 'What compliance standards do you cover?',
      a: 'We audit against ISO 27001, SOC 2, PCI-DSS, HIPAA, GDPR, and industry-specific requirements.'
    },
    {
      q: 'Will you help implement remediation?',
      a: 'Yes, we provide detailed remediation plans and can support implementation through our consulting services.'
    },
    {
      q: 'How often should we conduct audits?',
      a: 'Annually is recommended. For highly regulated industries, semi-annual or quarterly audits may be required.'
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
        <PageHero
          title="Security Audits"
          subtitle="Comprehensive Security Assessment"
          description="Evaluate your security posture against industry standards and identify improvement areas"
        />

        {/* Methodology */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Our Audit Process</h2>

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
                          <CheckCircle size={14} className="text-gold flex-shrink-0" />
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
            <h2 className="text-3xl font-bold text-white mb-12">Why Choose Security Audits</h2>

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
            <h2 className="text-3xl font-bold text-white mb-12">Audit Deliverables</h2>

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
                    <ClipboardList size={20} className="text-gold" />
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
              Ready for a Security Audit?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Understand your security posture and compliance status
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                Schedule Audit Consultation
              </Button>
              <Button size="lg" variant="secondary">
                Download Audit Checklist
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SecurityAudits;
