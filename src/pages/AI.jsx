/**
 * AI Business Division Hub Page
 * Enterprise AI and Machine Learning Solutions
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { Brain, Zap, TrendingUp, Users, Database, Code } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AIHub = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Brain,
      title: 'Generative AI',
      subtitle: 'Custom GenAI Solutions',
      description: 'LLM fine-tuning, RAG systems, and enterprise GenAI applications',
      path: '/ai/genai',
      color: '#C9A84C'
    },
    {
      icon: Database,
      title: 'Machine Learning',
      subtitle: 'Predictive Intelligence',
      description: 'Custom ML models, recommendation engines, and predictive analytics',
      path: '/ai/mlops',
      color: '#1ECDB0'
    },
    {
      icon: Code,
      title: 'LLM Integration',
      subtitle: 'ChatBots & Assistants',
      description: 'Intelligent chatbots, customer service automation, and AI assistants',
      path: '/ai/chatbots',
      color: '#C9A84C'
    },
    {
      icon: Zap,
      title: 'Automation',
      subtitle: 'Process Intelligence',
      description: 'RPA, workflow automation, and intelligent process automation',
      path: '/ai/automation',
      color: '#1ECDB0'
    },
    {
      icon: TrendingUp,
      title: 'NLP Solutions',
      subtitle: 'Language Understanding',
      description: 'Text analysis, sentiment analysis, and document intelligence',
      path: '/ai/nlp',
      color: '#C9A84C'
    },
    {
      icon: Users,
      title: 'AI Consulting',
      subtitle: 'Strategy & Implementation',
      description: 'AI roadmap planning, vendor evaluation, and implementation guidance',
      path: '/ai/ai-consulting',
      color: '#1ECDB0'
    },
  ];

  const stats = [
    { metric: 'AI Models Deployed', value: '200+', description: 'In production' },
    { metric: 'Data Processed', value: '500B+', description: 'Records annually' },
    { metric: 'Average Uplift', value: '35%', description: 'In key metrics' },
    { metric: 'Happy Clients', value: '150+', description: 'Enterprises' },
  ];

  const useCases = [
    'Customer Churn Prediction',
    'Fraud Detection & Prevention',
    'Recommendation Engines',
    'Demand Forecasting',
    'Sentiment Analysis',
    'Document Classification',
    'Process Automation',
    'Predictive Maintenance',
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
          title="AI & Machine Learning"
          subtitle="Enterprise-grade artificial intelligence solutions"
          description="From strategy to deployment: custom AI solutions that drive business growth and operational excellence"
        />

        {/* Statistics */}
        <section className="py-16 bg-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-peacock/20 p-6 text-center hover:border-peacock/40 transition-all"
                >
                  <p className="text-3xl font-bold text-peacock mb-2">{stat.value}</p>
                  <p className="font-semibold text-white text-sm mb-1">{stat.metric}</p>
                  <p className="text-xs text-gray-400">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              AI Solutions We Offer
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    onClick={() => navigate(service.path)}
                    className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-peacock/20 p-6 hover:border-peacock/40 transition-all cursor-pointer group"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <IconComponent size={24} style={{ color: service.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-peacock transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-peacock mb-2">{service.subtitle}</p>
                    <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                    <div className="text-peacock text-sm font-medium group-hover:gap-2 transition-all flex items-center gap-1">
                      Learn More →
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Common Use Cases</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {useCases.map((useCase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-peacock/20 p-4 hover:border-peacock/40 transition-all flex items-center gap-3"
                >
                  <Zap size={18} className="text-peacock flex-shrink-0" />
                  <p className="text-white font-medium">{useCase}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Why Choose Our AI Solutions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Proven Expertise',
                  description: 'AI specialists with experience deploying 200+ models in production'
                },
                {
                  title: 'End-to-End Solutions',
                  description: 'From strategy and development to deployment and optimization'
                },
                {
                  title: 'Enterprise Ready',
                  description: 'Secure, scalable, and compliant with enterprise requirements'
                },
                {
                  title: 'Measurable ROI',
                  description: '35% average improvement in key business metrics within 6 months'
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-peacock/20 p-6 hover:border-peacock/40 transition-all"
                >
                  <h4 className="font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-peacock/10 to-gold/10 border-y border-peacock/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unlock AI Potential for Your Enterprise
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how AI can transform your business operations and drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                Schedule AI Consultation
              </Button>
              <Button size="lg" variant="secondary">
                Download AI Roadmap Template
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AIHub;
