import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Lightbulb, Briefcase } from 'lucide-react';

/**
 * HighlightsSection Component
 * The homepage's central focus: the three core SASTRAVA areas.
 * Incubators / Innovators / Business Consultants
 */

const highlights = [
  { title: 'Incubators', icon: Rocket, accent: 'gold' },
  { title: 'Innovators', icon: Lightbulb, accent: 'peacock' },
  { title: 'Business Consultants', icon: Briefcase, accent: 'gold' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const HighlightsSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-navy-950 overflow-hidden">
      <div className="absolute top-10 right-0 w-96 h-96 bg-peacock-green/6 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-DEFAULT/6 rounded-full filter blur-3xl pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto px-6 z-10 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {highlights.map((item) => {
          const Icon = item.icon;
          const isGold = item.accent === 'gold';
          return (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`group relative ${isGold ? 'glass-gold' : 'glass-peacock'} gloss p-10 md:p-12 rounded-2xl
                border ${isGold ? 'border-gold-DEFAULT/25 hover:border-gold-light/40' : 'border-peacock-light/30 hover:border-peacock-light/40'}
                backdrop-blur-sm md:backdrop-blur-glass text-center
                transition-all duration-300 will-change-transform`}
              style={{
                boxShadow: isGold
                  ? '0 0 20px rgba(201, 168, 76, 0.15), inset 0 0 12px rgba(201, 168, 76, 0.04)'
                  : '0 0 20px rgba(20, 184, 166, 0.1), inset 0 0 12px rgba(20, 184, 166, 0.04)',
              }}
            >
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                  isGold ? 'from-gold-DEFAULT/0 via-gold-DEFAULT/3' : 'from-peacock-light/0 via-peacock-light/3'
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`mb-6 p-5 rounded-2xl ${
                    isGold ? 'bg-gold-DEFAULT/10' : 'bg-peacock-light/10'
                  }`}
                >
                  <Icon
                    className={`w-10 h-10 ${isGold ? 'text-gold-light' : 'text-peacock-light'}`}
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="text-2xl font-bold text-offwhite">{item.title}</h3>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default HighlightsSection;
