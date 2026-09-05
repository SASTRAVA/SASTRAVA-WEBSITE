/**
 * AwardCard Component
 * Display awards and recognitions
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap } from 'lucide-react';

export const AwardCard = ({
  award,
  organization,
  year,
  category,
  description,
  icon: Icon = Award,
  color = '#C9A84C',
  index = 0
}) => {
  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: index * 0.1, duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
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

        {/* Award Name */}
        <h4 className="font-bold text-lg text-white mb-1 group-hover:text-gold transition-colors">
          {award}
        </h4>

        {/* Organization */}
        <p className="text-sm text-peacock font-semibold mb-2">
          {organization}
        </p>

        {/* Category & Year */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs bg-gold/20 text-gold px-2 py-1 rounded">
            {category}
          </span>
          <span className="text-xs text-gray-500">{year}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default AwardCard;
