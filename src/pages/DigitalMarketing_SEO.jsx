/**
 * SEO Services Page
 * Search Engine Optimization for organic visibility and rankings
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { TestimonialCard } from '../components/trust';
import { CheckCircle, Search, TrendingUp, BarChart3 } from 'lucide-react';

const SEO = () => {
  const phases = [
    {
      phase: 'Phase 1',
      name: 'Audit & Analysis',
      description: 'Comprehensive website and competitor SEO analysis',
      tasks: ['Site Audit', 'Keyword Analysis', 'Competitor Benchmarking']
    },
    {
      phase: 'Phase 2',
      name: 'Strategy & Planning',
      description: 'Develop SEO strategy with realistic targets',
      tasks: ['Keyword Planning', 'Content Strategy', 'Technical Roadmap']
    },
    {
      phase: 'Phase 3',
      name: 'Implementation',
      description: 'Execute on-page, technical, and off-page optimization',
      tasks: ['On-Page Optimization', 'Technical SEO', 'Content Creation']
    },
    {
      phase: 'Phase 4',
      name: 'Monitoring & Optimization',
      description: 'Continuous monitoring and optimization for better results',
      tasks: ['Rank Tracking', 'Performance Analysis', 'Continuous Improvement']
    },
  ];

  const benefits = [
    'Increase organic visibility for target keywords',
    'Drive qualified traffic to your website',
    'Build long-term sustainable rankings',
    'Improve user experience and engagement',
    'Generate leads and conversions at scale',
    'Establish authority in your industry',
  ];

  const deliverables = [
    { name: 'SEO Audit Report', desc: 'Detailed findings with recommendations' },
    { name: 'Keyword Strategy', desc: 'Priority keywords with traffic potential' },
    { name: 'Content Calendar', desc: '12-month content plan' },
    { name: 'Technical Improvements', desc: 'Site optimization for search' },
    { name: 'Monthly Reports', desc: 'Ranking and traffic analytics' },
    { name: 'Strategy Calls', desc: 'Bi-weekly optimization discussions' },
  ];

  const testimonials = [
    {
      quote: 'Their SEO work increased our organic traffic by 250% in 8 months. Rankings improved for all target keywords.',
      author: 'Marketing Director',
      title: 'B2B SaaS Company',
      rating: 5
    },
    {
      quote: 'Professional, transparent, and results-driven. They explained everything clearly and delivered beyond expectations.',
      author: 'CEO',
      title: 'Digital Service Provider',
      rating: 5
    },
  ];

  const faqs = [
    {
      q: 'How long before we see SEO results?',
      a: 'Typically 3-6 months to see meaningful improvements. Competitive keywords may take 6-12 months. We focus on sustainable growth.'
    },
    {
      q: 'Do you guarantee rankings?',
      a: 'No legitimate SEO company guarantees rankings. We guarantee effort, transparency, and best practices. Results depend on market competition.'
    },
    {
      q: 'What is your SEO approach?',
      a: 'We follow Google guidelines using white-hat techniques: quality content, technical optimization, authority building, and user experience.'
    },
    {
      q: 'Can you improve existing rankings?',
      a: 'Yes, we analyze current rankings, identify gaps, and develop strategies to improve positions for underperforming keywords.'
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
          title="Search Engine Optimization"
          subtitle="Organic Rankings & Qualified Traffic"
          description="Strategic SEO to increase visibility, drive organic traffic, and generate qualified leads"
        />

        {/* Methodology */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Our SEO Process</h2>

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
            <h2 className="text-3xl font-bold text-white mb-12">Why Invest in SEO</h2>

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
                  <Search className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">What's Included</h2>

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
                    <BarChart3 size={20} className="text-gold" />
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
            <h2 className="text-3xl font-bold text-white mb-12">Client Results</h2>

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
            <h2 className="text-3xl font-bold text-white mb-12">SEO Questions Answered</h2>

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
                    <TrendingUp size={18} className="text-gold" />
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
              Ready to Dominate Search Results?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's develop an SEO strategy that drives sustainable organic growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                Get Free SEO Audit
              </Button>
              <Button size="lg" variant="secondary">
                Download SEO Checklist
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SEO;
