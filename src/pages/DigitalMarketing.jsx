/**
 * Digital Marketing Division Hub Page
 * Growth and revenue-driving marketing solutions
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { TrendingUp, Target, Share2, PenTool, BarChart3, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DigitalMarketingHub = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: BarChart3,
      title: 'SEO',
      subtitle: 'Search Engine Optimization',
      description: 'Organic search visibility, keyword optimization, and technical SEO',
      path: '/digital-marketing/seo',
      color: '#C9A84C'
    },
    {
      icon: Share2,
      title: 'Social Media',
      subtitle: 'Community & Engagement',
      description: 'Content strategy, community management, and paid social campaigns',
      path: '/digital-marketing/social-media',
      color: '#1ECDB0'
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      subtitle: 'Thought Leadership',
      description: 'Blog strategy, whitepaper creation, and educational content programs',
      path: '/digital-marketing/content-marketing',
      color: '#C9A84C'
    },
    {
      icon: Target,
      title: 'Lead Generation',
      subtitle: 'Conversion Optimization',
      description: 'Landing pages, lead magnets, and funnel optimization',
      path: '/digital-marketing/lead-generation',
      color: '#1ECDB0'
    },
    {
      icon: TrendingUp,
      title: 'Email Marketing',
      subtitle: 'Customer Retention',
      description: 'Automation, segmentation, and lifecycle email campaigns',
      path: '/digital-marketing/email-marketing',
      color: '#C9A84C'
    },
    {
      icon: Users,
      title: 'Brand Building',
      subtitle: 'Market Positioning',
      description: 'Brand strategy, visual identity, and market positioning',
      path: '/digital-marketing/branding',
      color: '#1ECDB0'
    },
  ];

  const stats = [
    { metric: 'Businesses Grown', value: '300+', description: 'Revenue increased' },
    { metric: 'Avg Growth Rate', value: '156%', description: 'ROI in 6 months' },
    { metric: 'Leads Generated', value: '1M+', description: 'Annually for clients' },
    { metric: 'Team Size', value: '80+', description: 'Marketing specialists' },
  ];

  const services_breakdown = [
    {
      category: 'Search & Discovery',
      items: ['SEO Strategy', 'Paid Search (SEM)', 'Local SEO', 'Technical Optimization']
    },
    {
      category: 'Social & Community',
      items: ['Social Media Management', 'Influencer Partnerships', 'Community Building', 'Paid Social']
    },
    {
      category: 'Content & Engagement',
      items: ['Content Strategy', 'Blog Creation', 'Video Marketing', 'Podcast Production']
    },
    {
      category: 'Conversion & Retention',
      items: ['Email Marketing', 'Marketing Automation', 'Retargeting', 'Customer Journey Mapping']
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
          title="Digital Marketing"
          subtitle="Growth-driven marketing strategies"
          description="End-to-end digital marketing solutions that drive traffic, generate leads, and increase revenue"
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
                  className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 text-center hover:border-gold/40 transition-all"
                >
                  <p className="text-3xl font-bold text-gold mb-2">{stat.value}</p>
                  <p className="font-semibold text-white text-sm mb-1">{stat.metric}</p>
                  <p className="text-xs text-gray-400">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Our Marketing Solutions
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

        {/* Services Breakdown */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Complete Service Portfolio</h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {services_breakdown.map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 hover:border-gold/40 transition-all"
                >
                  <h4 className="text-lg font-bold text-gold mb-4">{service.category}</h4>
                  <ul className="space-y-3">
                    {service.items.map((item, iidx) => (
                      <li key={iidx} className="flex items-center gap-2 text-gray-300">
                        <Target size={16} className="text-gold flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Our Approach</h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Audit', desc: 'Comprehensive analysis of current marketing' },
                { step: '2', title: 'Strategy', desc: 'Customized roadmap and goal setting' },
                { step: '3', title: 'Execution', desc: 'Implementation across all channels' },
                { step: '4', title: 'Optimization', desc: 'Continuous testing and improvement' },
              ].map((approach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 text-center hover:border-gold/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-gold">{approach.step}</span>
                  </div>
                  <h4 className="font-bold text-white mb-2">{approach.title}</h4>
                  <p className="text-sm text-gray-400">{approach.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-gold/10 to-peacock/10 border-y border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's create a marketing strategy that drives real results for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                Schedule Marketing Consultation
              </Button>
              <Button size="lg" variant="secondary">
                Download Marketing Audit Template
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DigitalMarketingHub;
