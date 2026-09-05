import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { SectionLabel } from '../ui/SectionLabel';
import { BarChart3 } from 'lucide-react';

export const StatsSection = () => {
  const stats = [
    {
      end: 500,
      suffix: '+',
      label: 'Active Students',
    },
    {
      end: 50,
      suffix: '+',
      label: 'Expert Courses',
    },
    {
      end: 95,
      suffix: '%',
      label: 'Job Placement Rate',
    },
    {
      end: 4.9,
      suffix: '/5',
      label: 'Average Rating',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative py-section bg-navy-950 overflow-hidden">
      {/* Gradient Background */}
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
          <SectionLabel label="By The Numbers" icon={BarChart3} />
          <h2 className="text-h1 text-offwhite">
            Trusted by
            <span className="block text-transparent bg-gradient-peacock bg-clip-text">
              Thousands
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-gold gloss p-8 rounded-2xl text-center group border border-gold-DEFAULT/20 shadow-glow-gold hover:shadow-glow-gold-lg transition-all duration-300"
              whileHover={{ y: -12, boxShadow: '0 0 40px rgba(201, 168, 76, 0.5)' }}
              style={{
                boxShadow: '0 0 20px rgba(201, 168, 76, 0.15)',
              }}
            >
              {/* Premium shimmer line on top with animation */}
              <motion.div 
                className="h-1 w-12 mx-auto mb-6 bg-gradient-gold rounded-full group-hover:w-full transition-all duration-300"
                initial={{ width: 48 }}
                whileHover={{ width: '100%' }}
                style={{
                  boxShadow: '0 0 15px rgba(201, 168, 76, 0.4)',
                }}
              />

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <AnimatedCounter
                  end={stat.end}
                  suffix={stat.suffix}
                  delay={idx * 0.1}
                />
              </motion.div>
              <p className="text-offwhite/70 text-sm mt-4 font-medium">{stat.label}</p>

              {/* Subtle glow background on hover */}
              <motion.div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-DEFAULT/5 to-transparent rounded-2xl" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/2 -left-20 w-40 h-40 bg-gold-DEFAULT/5 rounded-full filter blur-3xl pointer-events-none"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 -right-20 w-40 h-40 bg-peacock-blue/5 rounded-full filter blur-3xl pointer-events-none"
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
    </section>
  );
};

export default StatsSection;
