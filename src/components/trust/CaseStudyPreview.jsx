/**
 * CaseStudyPreview Component
 * Display mini case study preview cards
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const CaseStudyPreview = ({
  title,
  client,
  challenge,
  industry,
  resultMetric,
  pillarColor = '#C9A84C',
  onClick,
  index = 0
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="cursor-pointer h-full"
    >
      <div className="h-full bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 flex flex-col hover:border-gold/40 transition-all group">
        {/* Industry Badge */}
        <div className="inline-block mb-3">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ backgroundColor: `${pillarColor}30` }}
          >
            {industry}
          </span>
        </div>

        {/* Title & Client */}
        <h4 className="font-bold text-lg text-white mb-2 group-hover:text-gold transition-colors">
          {title}
        </h4>
        <p className="text-sm text-gray-400 mb-4">
          Client: <span className="font-semibold text-peacock">{client}</span>
        </p>

        {/* Challenge & Result */}
        <div className="space-y-3 mb-4 flex-grow">
          <div>
            <p className="text-xs text-gray-500 mb-1">Challenge</p>
            <p className="text-sm text-gray-300">{challenge}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Solution Impact</p>
            <p className="text-sm text-gold font-semibold">{resultMetric}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-gold group-hover:gap-3 transition-all pt-4 border-t border-navy-700">
          <span className="text-sm font-medium">View Case Study</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default CaseStudyPreview;
