// Example: How to Build a Custom Page Using SASTRAVA Components

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Code2, Users, Rocket } from 'lucide-react';

// Import Layout
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

// Import UI Components
import { Button } from '@/components/ui/Button';
import { FeatureCard, GlassCard } from '@/components/ui/Card';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { SectionLabel } from '@/components/ui/SectionLabel';

/**
 * EXAMPLE PAGE: Services/Products Page
 * 
 * This example shows how to:
 * - Compose sections using our components
 * - Use animations and transitions
 * - Create responsive layouts
 * - Customize content while keeping design consistent
 */

// ============================================
// HERO SECTION
// ============================================
const ServicesHero = () => {
  return (
    <section className="relative min-h-screen pt-20 pb-20 bg-navy-950 overflow-hidden noise">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-peacock-blue/10 rounded-full filter blur-3xl"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-gold/10 border border-gold-DEFAULT/30 backdrop-blur-sm mb-6"
        >
          <Zap className="w-4 h-4 text-gold-DEFAULT" />
          <span className="text-sm font-semibold text-gold-DEFAULT uppercase tracking-widest">
            Our Services
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-display text-offwhite mb-6"
        >
          World-Class
          <span className="block text-transparent bg-gradient-gold bg-clip-text">
            Solutions
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-offwhite/70 max-w-2xl mb-12"
        >
          Comprehensive services tailored to transform your organization.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center"
        >
          <Button variant="primary" size="lg" className="shine">
            View All Services
          </Button>
          <Button variant="secondary" size="lg">
            Get a Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// SERVICES GRID SECTION
// ============================================
const ServicesGrid = () => {
  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Build modern, scalable web applications with cutting-edge technologies.',
      gradient: 'gold',
    },
    {
      icon: Users,
      title: 'Team Augmentation',
      description: 'Scale your development team with experienced engineers.',
      gradient: 'peacock',
    },
    {
      icon: Rocket,
      title: 'Product Launch',
      description: 'From concept to production in weeks, not months.',
      gradient: 'gold',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-section bg-navy-950 overflow-hidden noise">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <SectionLabel label="What We Offer" icon={Code2} />
          <h2 className="text-h1 text-offwhite mb-6">
            Our Core
            <span className="block text-transparent bg-gradient-peacock bg-clip-text">
              Services
            </span>
          </h2>
          <p className="text-lg text-offwhite/60 max-w-2xl mx-auto">
            End-to-end solutions designed to accelerate your digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, idx) => (
            <FeatureCard key={idx} {...service} index={idx} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-offwhite/60 mb-6">
            Need something custom? Let's talk about your specific needs.
          </p>
          <Button variant="outline" size="lg">
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// PRICING/PLANS SECTION
// ============================================
const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      features: [
        'Up to 2 developers',
        '40 hours/week',
        'Weekly sync meetings',
        'Slack communication',
      ],
      highlight: false,
    },
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      features: [
        'Up to 5 developers',
        'Full-time engagement',
        'Daily stand-ups',
        'Slack + email + phone',
        'Project management included',
      ],
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      features: [
        'Dedicated team',
        'Custom hours',
        'Dedicated account manager',
        'All communication channels',
        'Custom SLA',
      ],
      highlight: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-section bg-navy-950">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <SectionLabel label="Pricing" icon={Rocket} />
          <h2 className="text-h1 text-offwhite mb-6">
            Simple,
            <span className="block text-transparent bg-gradient-gold bg-clip-text">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-offwhite/60 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our quality guarantee.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`glass rounded-2xl p-8 transition-all duration-300 ${
                plan.highlight
                  ? 'border-gold-DEFAULT/50 ring-1 ring-gold-DEFAULT/30 scale-105 md:scale-100'
                  : 'border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="mb-4 inline-block px-3 py-1 rounded-full bg-gradient-gold text-navy-950 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-offwhite mb-2">
                {plan.name}
              </h3>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gold-light">
                  {plan.price}
                </span>
                <span className="text-offwhite/60 ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <span className="text-gold-DEFAULT mt-1">✓</span>
                    <span className="text-offwhite/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? 'primary' : 'outline'}
                size="lg"
                className="w-full"
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// FAQs SECTION
// ============================================
const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState(0);

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer:
        'Most projects take 4-12 weeks depending on scope. We use agile methodology for flexibility.',
    },
    {
      question: 'Do you offer support after launch?',
      answer:
        'Yes! We offer ongoing support, maintenance, and optimization packages.',
    },
    {
      question: 'Can you work in my timezone?',
      answer:
        'Absolutely! Our team spans multiple timezones and we adapt to your schedule.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer:
        'React, Node.js, Python, Cloud platforms (AWS, GCP, Azure), and more.',
    },
  ];

  return (
    <section className="py-section bg-navy-950">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <SectionLabel label="FAQs" icon={Users} />
          <h2 className="text-h2 text-offwhite">
            Common Questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="glass rounded-xl overflow-hidden"
              whileHover={{ y: -2 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-offwhite text-left">
                  {faq.question}
                </h3>
                <span
                  className={`text-gold-DEFAULT transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                >
                  ↓
                </span>
              </button>

              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 border-t border-white/10"
                >
                  <p className="text-offwhite/70">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// ============================================
// MAIN SERVICES PAGE
// ============================================
export const ServicesExample = () => {
  return (
    <>
      <Navbar />
      <main>
        <ServicesHero />
        <ServicesGrid />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
};

export default ServicesExample;

/**
 * KEY PATTERNS USED:
 * 
 * 1. MOTION ANIMATIONS
 *    - initial={{ opacity: 0, y: 40 }}
 *    - whileInView={{ opacity: 1, y: 0 }}
 *    - Smooth scroll-triggered animations
 * 
 * 2. REUSABLE COMPONENTS
 *    - FeatureCard for services
 *    - GlassCard for pricing plans
 *    - Button with variants
 * 
 * 3. RESPONSIVE DESIGN
 *    - grid-cols-1 md:grid-cols-3
 *    - Scale adjustments for mobile
 *    - Touch-friendly interactions
 * 
 * 4. COLOR SYSTEM
 *    - bg-navy-950 for backgrounds
 *    - text-gold-DEFAULT for primary
 *    - text-offwhite for body text
 *    - glass for card containers
 * 
 * 5. INTERACTIVE ELEMENTS
 *    - Hover effects with whileHover
 *    - Click handlers for accordions
 *    - Smooth transitions
 * 
 * HOW TO USE:
 * 1. Import components at the top
 * 2. Build sections using the pattern above
 * 3. Wrap with Navbar and Footer
 * 4. Add to your router in App.jsx
 * 5. Customize content to your needs
 */
