import React from 'react';
import { motion } from 'framer-motion';

export const SectionLabel = ({ label, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 mb-4"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-gold/10 border border-gold-DEFAULT/30 backdrop-blur-sm">
        {Icon && <Icon className="w-4 h-4 text-gold-DEFAULT" />}
        <span className="text-sm font-semibold text-gold-DEFAULT uppercase tracking-widest">{label}</span>
      </div>
    </motion.div>
  );
};

export default SectionLabel;
