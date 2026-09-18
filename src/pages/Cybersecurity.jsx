/**
 * Cybersecurity Hub Page
 * Enterprise security solutions and services
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Lock, Shield, AlertCircle, CheckCircle, Users, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CybersecurityHub = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: AlertCircle,
      title: 'VAPT',
      subtitle: 'Vulnerability Assessment & Penetration Testing',
      description: 'Comprehensive security testing for web apps, APIs, and cloud infrastructure',
      path: '/cybersecurity/vapt',
      color: '#C9A84C'
    },
    {
      icon: Shield,
      title: 'Security Audits',
      subtitle: 'Complete Security Infrastructure Review',
      description: 'End-to-end security assessment aligned with ISO 27001 and SOC 2',
      path: '/cybersecurity/security-audits',
      color: '#1ECDB0'
    },
    {
      icon: Lock,
      title: 'Cloud Security',
      subtitle: 'Multi-Cloud Protection',
      description: 'AWS, Azure, GCP security hardening and compliance management',
      path: '/cybersecurity/cloud-security',
      color: '#C9A84C'
    },
    {
      icon: CheckCircle,
      title: 'Compliance',
      subtitle: 'Regulatory Framework Implementation',
      description: 'ISO 27001, SOC 2, GDPR, PCI-DSS compliance automation',
      path: '/cybersecurity/compliance',
      color: '#1ECDB0'
    },
    {
      icon: Users,
      title: 'Security Training',
      subtitle: 'Awareness & Certification Programs',
      description: 'Employee training, certifications, and security awareness campaigns',
      path: '/cybersecurity/security-awareness-training',
      color: '#C9A84C'
    },
    {
      icon: TrendingUp,
      title: 'Incident Response',
      subtitle: '24/7 Breach Response',
      description: 'Rapid incident detection, containment, and post-breach forensics',
      path: '/cybersecurity/incident-response',
      color: '#1ECDB0'
    },
  ];

  const stats = [
    { metric: 'Systems Secured', value: '500+', description: 'Enterprises protected' },
    { metric: 'Threats Detected', value: '50K+', description: 'Annually prevented' },
    { metric: 'Uptime Maintained', value: '99.7%', description: 'Average security uptime' },
    { metric: 'Team Expertise', value: '50+', description: 'Certified professionals' },
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
          title="Cybersecurity Services"
          subtitle="Enterprise-grade security protecting your infrastructure"
          description="Zero-trust architecture, real-time threat detection, and compliance management for organizations of all sizes"
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
                  className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 text-center"
                >
                  <p className="text-3xl font-bold text-gold mb-2">{stat.value}</p>
                  <p className="font-semibold text-white text-sm mb-1">{stat.metric}</p>
                  <p className="text-xs text-gray-400">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Our Security Solutions
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
                    className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 hover:border-gold/40 transition-all cursor-pointer group"
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <IconComponent size={24} style={{ color: service.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm font-semibold text-gold mb-2">{service.subtitle}</p>
                    <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                    <div className="text-gold text-sm font-medium group-hover:gap-2 transition-all flex items-center gap-1">
                      Learn More →
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Why Choose Our Security Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Expert Team',
                  description: '50+ certified security professionals with 15+ years average experience',
                  icon: Users
                },
                {
                  title: '24/7 Monitoring',
                  description: 'Real-time threat detection and response across your infrastructure',
                  icon: AlertCircle
                },
                {
                  title: 'Compliance Ready',
                  description: 'Full compliance with ISO 27001, SOC 2, GDPR, PCI-DSS standards',
                  icon: CheckCircle
                },
                {
                  title: 'Proven Track Record',
                  description: '500+ enterprises secured, zero breaches in 18 months',
                  icon: Shield
                },
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <IconComponent size={24} className="text-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-gold/10 to-peacock/10 border-y border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Protect Your Enterprise Today
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get a comprehensive security assessment and custom remediation plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                Schedule Security Assessment
              </Button>
              <Button size="lg" variant="secondary">
                Download Security Whitepaper
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CybersecurityHub;
