/**
 * Generative AI Solutions Service Page
 * LLM fine-tuning, RAG systems, and enterprise GenAI applications
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { TestimonialCard } from '../components/trust';
import { CheckCircle, Brain, Zap, Settings } from 'lucide-react';

const GenerativeAI = () => {
  const phases = [
    {
      phase: 'Phase 1',
      name: 'Discovery & Strategy',
      description: 'Identify use cases, define objectives, and plan GenAI implementation',
      tasks: ['Use Case Analysis', 'Model Selection', 'Architecture Design']
    },
    {
      phase: 'Phase 2',
      name: 'Fine-tuning & Training',
      description: 'Prepare data, fine-tune models, and optimize performance',
      tasks: ['Data Preparation', 'Model Fine-tuning', 'Performance Optimization']
    },
    {
      phase: 'Phase 3',
      name: 'Integration & Testing',
      description: 'Integrate with existing systems and comprehensive testing',
      tasks: ['API Integration', 'Quality Assurance', 'Security Testing']
    },
    {
      phase: 'Phase 4',
      name: 'Deployment & Support',
      description: 'Deploy to production and provide ongoing optimization',
      tasks: ['Production Deployment', 'Monitoring Setup', 'Continuous Improvement']
    },
  ];

  const benefits = [
    'Automate complex business processes with AI',
    'Generate personalized content at scale',
    'Improve customer experience with intelligent interactions',
    'Reduce operational costs through automation',
    'Gain competitive advantage with cutting-edge AI',
    'Make faster, data-driven decisions',
  ];

  const deliverables = [
    { name: 'Fine-tuned Model', desc: 'Custom LLM trained on your data' },
    { name: 'RAG System', desc: 'Retrieval-augmented generation pipeline' },
    { name: 'API Integration', desc: 'Seamless integration with your apps' },
    { name: 'Admin Dashboard', desc: 'Monitor usage and performance' },
    { name: 'Documentation', desc: 'Complete technical documentation' },
    { name: 'Support & Training', desc: '30 days of dedicated support' },
  ];

  const testimonials = [
    {
      quote: 'Their GenAI solution reduced our content creation time by 70%. The fine-tuned model understands our brand voice perfectly.',
      author: 'VP Marketing',
      title: 'Fortune 500 Tech Company',
      rating: 5
    },
    {
      quote: 'Impressive accuracy and customization. Deployed their GenAI chatbot in 2 weeks. Customer satisfaction improved 45%.',
      author: 'Operations Director',
      title: 'E-commerce Startup',
      rating: 5
    },
  ];

  const faqs = [
    {
      q: 'What LLMs do you work with?',
      a: 'We work with leading models: GPT-4, Claude, Gemini, LLaMA, and open-source options. We select based on your requirements.'
    },
    {
      q: 'How long does implementation take?',
      a: 'Typically 4-8 weeks from discovery to production. Simple implementations 2-3 weeks, complex enterprise solutions 8-12 weeks.'
    },
    {
      q: 'Can you fine-tune on our proprietary data?',
      a: 'Yes, we specialize in fine-tuning on proprietary and sensitive data with full security and compliance measures.'
    },
    {
      q: 'What about data privacy and security?',
      a: 'Data stays within your infrastructure. We implement enterprise-grade security, encryption, and comply with GDPR/HIPAA.'
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
          title="Generative AI Solutions"
          subtitle="Custom LLM & GenAI Implementation"
          description="Fine-tuned models, RAG systems, and enterprise GenAI applications tailored to your business"
        />

        {/* Methodology */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Our Implementation Approach</h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {phases.map((phase, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <div className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-peacock/20 p-6 h-full hover:border-peacock/40 transition-all">
                    <p className="text-sm font-bold text-peacock mb-2">{phase.phase}</p>
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
            <h2 className="text-3xl font-bold text-white mb-12">Business Benefits</h2>

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
                  <Brain className="w-6 h-6 text-peacock flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">What You Receive</h2>

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
                  className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-peacock/20 p-6 hover:border-peacock/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-peacock/20 flex items-center justify-center mb-3">
                    <Settings size={20} className="text-peacock" />
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
            <h2 className="text-3xl font-bold text-white mb-12">Client Success Stories</h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {testimonials.map((testimonial, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                  <TestimonialCard {...testimonial} pillarColor="#1ECDB0" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Common Questions</h2>

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
                  className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-peacock/20 p-6 hover:border-peacock/40 transition-all"
                >
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <Zap size={18} className="text-peacock" />
                    {faq.q}
                  </h4>
                  <p className="text-gray-400 ml-8">{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-peacock/10 to-gold/10 border-y border-peacock/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Harness Generative AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how custom GenAI can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                Schedule GenAI Consultation
              </Button>
              <Button size="lg" variant="secondary">
                Download AI Implementation Guide
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GenerativeAI;
