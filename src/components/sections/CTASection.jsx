import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { SectionLabel } from '../ui/SectionLabel';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="relative py-section overflow-hidden">
      {/* Animated Peacock Gradient Background */}
      <div className="absolute inset-0 bg-gradient-peacock-animated bg-300% opacity-50 animate-gradient-flow" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy-950/60" />

      {/* Decorative Elements with Glow */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 bg-gold-DEFAULT/15 rounded-full filter blur-3xl shadow-glow-gold"
        animate={{ y: [0, 60, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-peacock-blue/15 rounded-full filter blur-3xl shadow-glow-teal"
        animate={{ y: [0, -60, 0], x: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-peacock gloss rounded-3xl p-12 md:p-16 backdrop-blur-lg border border-peacock-light/30 text-center shadow-elevation-lg"
          style={{
            boxShadow: '0 0 40px rgba(20, 184, 166, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Premium Shine Overlay */}
          <div className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none" style={{
            background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)',
          }} />

          {/* Headline with Limited Time Offer Styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-gold/15 border border-gold-DEFAULT/40 mb-8 relative z-10"
            style={{
              boxShadow: '0 0 20px rgba(201, 168, 76, 0.25)',
            }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
              <Sparkles className="w-5 h-5 text-gold-light" />
            </motion.div>
            <span className="text-lg font-semibold text-gold-light tracking-wide">
              Make a Move with SASTRAVA
            </span>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-offwhite/70 max-w-2xl mx-auto mb-12 relative z-10"
          >
            Join thousands of students who have successfully transitioned into tech roles and advanced their careers with our programs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center relative z-10"
          >
            <Button variant="secondary" size="lg">
              Get an Experience
            </Button>
          </motion.div>

          {/* Decorative Divider with Gradient */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 relative z-10"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent via-peacock-DEFAULT to-transparent opacity-40" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="w-2 h-2 rounded-full bg-gradient-gold shadow-glow-gold"
              />
              <div className="h-px flex-grow bg-gradient-to-l from-transparent via-peacock-DEFAULT to-transparent opacity-40" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
