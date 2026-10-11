import { SeoAnswers } from '../components/seo/SeoAnswers';
/**
 * Digital Marketing Division Hub Page
 * Growth and revenue-driving marketing solutions
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { TrendingUp, Target, Share2, PenTool, BarChart3, Users, Megaphone, LineChart } from 'lucide-react';

const DigitalMarketingHub = () => {
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
      path: '/contact',
      color: '#1ECDB0'
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      subtitle: 'Thought Leadership',
      description: 'Blog strategy, whitepaper creation, and educational content programs',
      path: '/contact',
      color: '#C9A84C'
    },
    {
      icon: TrendingUp,
      title: 'Performance Marketing',
      subtitle: 'Paid Media & Acquisition',
      description: 'Plan paid search, Google Ads, paid social, and retargeting around tracked goals, budgets, and landing page experiments.',
      path: '/contact',
      color: '#1ECDB0'
    },
    {
      icon: Target,
      title: 'Lifecycle & Conversion',
      subtitle: 'From Inquiry to Retention',
      description: 'Improve landing pages and journeys, then use CRM, email, and automation to nurture and retain customers.',
      path: '/contact',
      color: '#C9A84C'
    },
    {
      icon: Users,
      title: 'Brand Marketing',
      subtitle: 'Positioning & Preference',
      description: 'Clarify audience, differentiation, message, and identity, then build consistent campaigns that strengthen recognition and trust.',
      path: '/contact',
      color: '#1ECDB0'
    },
    {
      icon: LineChart,
      title: 'Measurement & Scaling',
      subtitle: 'Insight-Led Improvement',
      description: 'Set up campaign measurement, test channels and creative, and scale investment in steps using agreed performance signals.',
      path: '/contact',
      color: '#C9A84C'
    },
  ];
  const services_breakdown = [
    {
      category: 'Brand & Positioning',
      items: ['Audience and market research', 'Brand positioning and messaging', 'Visual identity and brand consistency', 'Brand awareness and campaign planning']
    },
    {
      category: 'Search & Discovery',
      items: ['SEO, keyword research, AEO and GEO', 'Technical and local SEO', 'Google Business Profile content support', 'Paid search and Google Ads']
    },
    {
      category: 'Performance & Conversion',
      items: ['Paid social and campaign management', 'Retargeting and audience testing', 'Landing pages and conversion optimization', 'Budget pacing and performance reporting']
    },
    {
      category: 'Content, Social & Community',
      items: ['Content strategy, blogs, and creative assets', 'Short-form video and campaign content', 'Social publishing and community plans', 'Influencer and partnership campaigns']
    },
    {
      category: 'Lifecycle & Measurement',
      items: ['CRM and email nurture journeys', 'Marketing automation and retention campaigns', 'Analytics, UTM tagging, and event tracking', 'Funnel, channel, and campaign insights']
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
          description="Build brand preference and grow demand through performance marketing, SEO, content, paid campaigns, conversion improvements, and clear measurement."
        />

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
                  >
                    <Link to={service.path} className="group block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950">
                    <div className="h-full bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 hover:border-gold/40 transition-all">
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
                      {service.path === '/contact' ? 'Discuss this service →' : 'Learn More →'}
                    </div>
                    </div>
                    </Link>
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
            <p className="-mt-8 mb-10 max-w-4xl leading-relaxed text-gray-300">SASTRAVA brings brand marketing and performance marketing together: define why your brand matters, reach the right audience through organic and paid channels, improve the path from click to inquiry, and use measurement to guide the next investment. The mix may include brand positioning, SEO and local search, Google Ads, paid social, content, retargeting, lifecycle campaigns, and conversion rate optimization.</p>

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

        {/* Scalable growth system */}
        <section className="py-20 bg-navy-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-peacock-light">A practical route to scale</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Build the signal before increasing the spend.</h2>
              <p className="mt-4 leading-relaxed text-gray-300">Scaling works best when the brand promise, customer journey, and measurement agree. We establish a baseline, test a focused plan, improve what the evidence supports, then expand in deliberate steps.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                { title: 'Position', icon: Megaphone, text: 'Define priority audiences, differentiation, offer, and consistent brand messages.' },
                { title: 'Instrument', icon: BarChart3, text: 'Agree goals and set up practical tracking for inquiries, conversions, and campaign costs.' },
                { title: 'Experiment', icon: Target, text: 'Run focused tests across channels, creative, audiences, and landing page experiences.' },
                { title: 'Scale', icon: LineChart, text: 'Expand the channels and campaigns that meet agreed quality and efficiency signals; keep reviewing.' },
              ].map(({ title, icon: Icon, text }) => (
                <article key={title} className="rounded-xl border border-gold/20 bg-gradient-to-br from-navy-800 to-navy-900 p-6">
                  <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">{text}</p>
                </article>
              ))}
            </div>
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
              Ready to Grow Your Brand and Demand?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's shape a brand and performance marketing plan around your audience, goals, budget, and measurement needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" action="navigate" actionConfig={{ path: '/contact' }}>
                Discuss a marketing plan
              </Button>
        <SeoAnswers />

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default DigitalMarketingHub;
