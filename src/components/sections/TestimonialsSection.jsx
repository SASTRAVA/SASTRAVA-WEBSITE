import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { MessageCircle } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [];

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
    <section className="relative py-section bg-navy-950 overflow-hidden noise">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-peacock-green/5 rounded-full filter blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <SectionLabel label="Success Stories" icon={MessageCircle} />
          <h2 className="text-h1 text-offwhite mb-6">
            A Clear, Practical
            <span className="block text-transparent bg-gradient-gold bg-clip-text">
              Working Approach
            </span>
          </h2>
          <p className="text-lg text-offwhite/60 max-w-2xl mx-auto">
            Every engagement starts with understanding the goal, scope, constraints, and evidence of progress. We publish client feedback only with permission and attribution.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        {testimonials.length > 0 ? <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 0 40px rgba(20, 184, 166, 0.2)' }}
              className="glass-peacock gloss p-8 rounded-2xl group border border-peacock-light/20 shadow-glow-teal hover:shadow-glow-teal-lg transition-all duration-300 relative overflow-hidden"
              style={{
                boxShadow: '0 0 20px rgba(20, 184, 166, 0.1)',
              }}
            >
              {/* Premium gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-peacock-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              <div className="relative z-10">
                {/* Gold Stars Rating */}
                <motion.div 
                  className="flex gap-1 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.span 
                      key={i} 
                      className="text-gold-light text-lg text-glow-gold"
                      style={{
                        textShadow: '0 0 10px rgba(255, 243, 176, 0.5)',
                      }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      ★
                    </motion.span>
                  ))}
                </motion.div>

                {/* Quote */}
                <p className="text-offwhite/85 mb-8 leading-relaxed italic text-base font-light">
                  "{testimonial.quote}"
                </p>

                {/* Author with Premium Avatar */}
                <div className="flex items-center gap-4 pt-4 border-t border-peacock-light/10">
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center text-navy-950 font-bold text-sm shadow-glow-gold"
                    whileHover={{ scale: 1.1 }}
                    style={{
                      boxShadow: '0 0 20px rgba(201, 168, 76, 0.3)',
                    }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <p className="text-offwhite font-semibold text-sm leading-tight">{testimonial.author}</p>
                    <p className="text-peacock-light text-xs mt-1 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div> : <p className="mx-auto max-w-2xl rounded-2xl border border-peacock-light/20 bg-navy-900/60 p-6 text-center leading-relaxed text-offwhite/70">Client feedback will be shared here when the client has approved publication.</p>}
      </div>
    </section>
  );
};

export default TestimonialsSection;
