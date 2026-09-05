import React from 'react';
import { motion } from 'framer-motion';

export const Terminal = ({ title = 'Terminal', children, code }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="glass rounded-xl overflow-hidden border border-peacock-light/30 shadow-xl"
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 bg-black/30 border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        <span className="text-sm text-slate-400 ml-2">{title}</span>
      </div>

      {/* Code Block */}
      <div className="p-6 overflow-x-auto font-mono text-sm text-green-400 bg-black/50">
        {code && (
          <pre>
            <code>{code}</code>
          </pre>
        )}
        {children}
      </div>
    </motion.div>
  );
};

export default Terminal;
