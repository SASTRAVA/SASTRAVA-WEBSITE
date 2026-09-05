/**
 * SuccessMetricCard Component
 * Display key success metrics
 */

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

export const SuccessMetricCard = ({
  metric,
  value,
  unit = '',
  description,
  icon: Icon = TrendingUp,
  color = '#C9A84C',
  animated = true,
  delay = 0
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6 }
    }
  };

  return (
    <motion.div
      variants={animated ? variants : {}}
      initial={animated ? 'hidden' : 'visible'}
      whileInView={animated ? 'visible' : undefined}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <div className="h-full bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 flex flex-col hover:border-gold/40 transition-all group">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon size={24} style={{ color }} />
        </div>

        {/* Metric Name */}
        <p className="text-sm text-gray-400 mb-2">{metric}</p>

        {/* Value */}
        <p className="text-3xl md:text-4xl font-bold text-white mb-1">
          {value}
          <span className="text-lg text-gray-400 ml-1">{unit}</span>
        </p>

        {/* Description */}
        <p className="text-sm text-gray-400 mt-auto">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default SuccessMetricCard;
