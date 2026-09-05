/**
 * Case Studies Page
 * Showcase major project successes and implementations
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { CaseStudyPreview } from '../components/trust';
import { Code, TrendingUp, Lock, Zap } from 'lucide-react';

const CaseStudies = () => {
  const [selectedPillar, setSelectedPillar] = useState('all');

  const pillars = [
    { id: 'all', name: 'All Projects', icon: Code },
    { id: 'build', name: 'Build', icon: Code, color: '#1ECDB0' },
    { id: 'grow', name: 'Grow', icon: TrendingUp, color: '#FFF3B0' },
    { id: 'secure', name: 'Secure', icon: Lock, color: '#C9A84C' },
  ];

  const caseStudies = [
    {
      id: 'fintech-mobile-app',
      title: 'FinTech Mobile Banking App',
      client: 'FinanceHub Inc',
      industry: 'Financial Services',
      pillar: 'build',
      challenge: 'Build a secure mobile banking app with real-time transaction processing and AI-powered fraud detection',
      solution: 'Developed React Native app with blockchain integration, ML fraud detection, and 256-bit encryption',
      technology: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'TensorFlow', 'Stripe API'],
      results: [
        'Processed $50M+ in transactions',
        '99.9% uptime',
        'Zero security breaches',
        '2.5M+ active users'
      ],
      resultMetric: '₹5.2 Cr in GMV processed',
      metrics: {
        'Performance': '200ms avg response time',
        'Security': 'SOC 2 Type II compliant',
        'Scalability': '10,000 transactions/sec capacity',
        'Adoption': '2.5M users in 12 months'
      },
      testimonial: 'SASTRAVA delivered a world-class fintech solution that exceeded our expectations in every way.',
      testimonialAuthor: 'Rajesh Iyer, CEO FinanceHub'
    },
    {
      id: 'ecommerce-ai-personalization',
      title: 'AI-Powered E-commerce Personalization Engine',
      client: 'EcommercePro',
      industry: 'E-commerce',
      pillar: 'build',
      challenge: 'Implement personalized product recommendations to increase conversion rates and average order value',
      solution: 'Built collaborative filtering ML model with real-time recommendation engine and A/B testing framework',
      technology: ['Python', 'PyTorch', 'Redis', 'Apache Kafka', 'FastAPI', 'PostgreSQL'],
      results: [
        '32% increase in conversion rate',
        '28% boost in AOV',
        '45% improvement in customer retention',
        '3x ROI in 6 months'
      ],
      resultMetric: '₹8.5 Cr incremental revenue',
      metrics: {
        'Conversion': '32% increase',
        'AOV': '₹2,840 → ₹3,635',
        'Retention': '45% improvement',
        'ROI': '3x in 6 months'
      },
      testimonial: 'The AI recommendation engine transformed our business metrics. Best investment in technology!',
      testimonialAuthor: 'Priya Sharma, Founder EcommercePro'
    },
    {
      id: 'healthcare-data-platform',
      title: 'Healthcare Data Analytics Platform',
      client: 'HealthPlus Digital',
      industry: 'Healthcare',
      pillar: 'grow',
      challenge: 'Build data analytics platform to track patient outcomes and improve operational efficiency',
      solution: 'Developed comprehensive data warehouse with real-time dashboards and predictive analytics',
      technology: ['BigQuery', 'Looker', 'Python', 'Apache Airflow', 'TensorFlow'],
      results: [
        '40% improvement in patient outcomes',
        '25% reduction in operational costs',
        '99.95% data accuracy',
        'Real-time insights for 500+ healthcare providers'
      ],
      resultMetric: '₹2.3 Cr annual cost savings',
      metrics: {
        'Outcomes': '+40% patient satisfaction',
        'Efficiency': '-25% operational costs',
        'Accuracy': '99.95% data quality',
        'Users': '500+ healthcare facilities'
      },
      testimonial: 'Data-driven insights from their platform helped us improve patient care significantly.',
      testimonialAuthor: 'Dr. Arun Kumar, Medical Director HealthPlus'
    },
    {
      id: 'enterprise-security-audit',
      title: 'Enterprise Security Infrastructure Audit & Remediation',
      client: 'InsuranceNow',
      industry: 'Insurance',
      pillar: 'secure',
      challenge: 'Conduct comprehensive security audit for multi-cloud infrastructure and remediate critical vulnerabilities',
      solution: 'Performed VAPT, cloud security assessment, and implemented automated vulnerability management',
      technology: ['Nessus', 'Burp Suite', 'Terraform', 'AWS Security Hub', 'Kubernetes Security'],
      results: [
        '127 critical vulnerabilities fixed',
        '99.7% compliance score',
        'ISO 27001 certification achieved',
        '0 breaches in 18 months'
      ],
      resultMetric: '₹1.8 Cr security debt eliminated',
      metrics: {
        'Vulnerabilities': '127 critical fixed',
        'Compliance': '99.7% score achieved',
        'Certification': 'ISO 27001 gained',
        'Uptime': '99.9% maintained'
      },
      testimonial: 'Their comprehensive security approach gave us complete peace of mind.',
      testimonialAuthor: 'Vikram Sharma, CISO InsuranceNow'
    },
    {
      id: 'digital-marketing-campaign',
      title: 'Enterprise Digital Marketing Transformation',
      client: 'RetailMax',
      industry: 'Retail',
      pillar: 'grow',
      challenge: 'Build integrated digital marketing strategy to reach 18-35 demographic across 10 markets',
      solution: 'Multi-channel campaign with SEO, paid advertising, content marketing, and social media strategy',
      technology: ['Google Analytics 4', 'Salesforce Marketing Cloud', 'HubSpot', 'SEMrush', 'Mailchimp'],
      results: [
        '156% ROI on marketing spend',
        '3.2M+ impressions/month',
        '12% CTR improvement',
        '250% lead generation increase'
      ],
      resultMetric: '₹6.4 Cr revenue attributed to digital',
      metrics: {
        'ROI': '156% marketing return',
        'Reach': '3.2M impressions/month',
        'Conversion': '+12% CTR',
        'Leads': '+250% qualified leads'
      },
      testimonial: 'Their integrated approach transformed our digital presence from startup to enterprise level.',
      testimonialAuthor: 'Arjun Singh, Marketing Director RetailMax'
    },
    {
      id: 'supply-chain-optimization',
      title: 'Supply Chain AI Optimization',
      client: 'LogisticsPro',
      industry: 'Logistics',
      pillar: 'build',
      challenge: 'Optimize supply chain with AI to reduce delivery time and improve inventory management',
      solution: 'Built ML-powered demand forecasting and route optimization system',
      technology: ['Python', 'OR-Tools', 'TensorFlow', 'PostgreSQL', 'React'],
      results: [
        '18% reduction in delivery time',
        '22% inventory optimization',
        '₹3.5 Cr cost savings',
        'Real-time tracking for 50,000+ shipments/day'
      ],
      resultMetric: '₹3.5 Cr annual savings',
      metrics: {
        'Delivery': '-18% time reduction',
        'Inventory': '-22% cost',
        'Savings': '₹3.5 Cr/year',
        'Scale': '50,000 shipments tracked'
      },
      testimonial: 'The AI optimization transformed our supply chain efficiency. Outstanding results!',
      testimonialAuthor: 'Megha Patel, CTO LogisticsPro'
    },
  ];

  const filteredCaseStudies = selectedPillar === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.pillar === selectedPillar);

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
          title="Case Studies"
          subtitle="Real projects. Real results. Real impact."
          description="Explore how we've helped enterprises transform their operations, grow revenue, and secure their infrastructure"
        />

        {/* Filter */}
        <section className="py-12 bg-navy-900 border-b border-gold/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {pillars.map(pillar => {
                const IconComponent = pillar.icon;
                return (
                  <motion.button
                    key={pillar.id}
                    onClick={() => setSelectedPillar(pillar.id)}
                    className={`flex items-center gap-2 px-5 py-2 rounded-lg font-semibold transition-all text-sm md:text-base ${
                      selectedPillar === pillar.id
                        ? 'bg-gold text-navy-950 shadow-lg shadow-gold/50'
                        : 'bg-navy-800 text-white border border-gold/20 hover:border-gold/40'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={16} />
                    {pillar.name}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPillar}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {filteredCaseStudies.map((caseStudy, idx) => (
                  <motion.div
                    key={caseStudy.id}
                    variants={itemVariants}
                    onClick={() => {
                      // In a real app, this would navigate to detail page
                      console.log('View case study:', caseStudy.id);
                    }}
                  >
                    <CaseStudyPreview
                      title={caseStudy.title}
                      client={caseStudy.client}
                      challenge={caseStudy.challenge}
                      result={caseStudy.resultMetric}
                      industry={caseStudy.industry}
                      resultMetric={caseStudy.resultMetric}
                      pillarColor={pillars.find(p => p.id === caseStudy.pillar)?.color || '#C9A84C'}
                      index={idx}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-gold/10 to-peacock/10 border-y border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's create your success story
            </p>
            <Button size="lg" variant="primary">
              Schedule Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudies;
