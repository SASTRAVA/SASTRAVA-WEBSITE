/**
 * ResearchPreview Component
 * Display research paper/whitepaper previews
 */

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ArrowRight } from 'lucide-react';

export const ResearchPreview = ({
  title,
  description,
  author,
  date,
  category,
  readTime,
  downloads,
  onClick,
  downloadLink,
  index = 0
}) => {
  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.1, duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="h-full"
    >
      <div className="h-full bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-peacock/20 p-6 flex flex-col hover:border-peacock/40 transition-all group">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-peacock/20 flex items-center justify-center group-hover:bg-peacock/30 transition-colors">
            <FileText size={20} className="text-peacock" />
          </div>
          <span className="text-xs bg-peacock/20 text-peacock px-2 py-1 rounded">
            {category}
          </span>
        </div>

        {/* Title */}
        <h4 className="font-bold text-lg text-white mb-2 group-hover:text-peacock transition-colors line-clamp-2">
          {title}
        </h4>

        {/* Description */}
        <p className="text-sm text-gray-400 mb-4 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Meta */}
        <div className="space-y-2 mb-4 text-xs text-gray-500 border-t border-navy-700 pt-4">
          <div className="flex justify-between">
            <span>by {author}</span>
            <span>{date}</span>
          </div>
          <div className="flex justify-between">
            <span>{readTime} min read</span>
            <span>{downloads} downloads</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={onClick}
            className="flex-1 flex items-center justify-center gap-1 text-sm font-medium text-white hover:text-peacock transition-colors"
          >
            <ArrowRight size={14} />
            Read
          </button>
          {downloadLink && (
            <button
              onClick={() => window.open(downloadLink, '_blank')}
              className="flex-1 flex items-center justify-center gap-1 text-sm font-medium text-peacock hover:text-peacock/80 transition-colors border border-peacock/30 rounded hover:border-peacock/60"
            >
              <Download size={14} />
              Download
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchPreview;
