/**
 * PillarCard Component
 * Displays one of the 4 main business pillars
 * Used in both hero and dedicated pillar sections
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import * as Icons from 'lucide-react';

export const PillarCard = ({
  pillar,
  size = 'md',
  interactive = true,
  onClick,
  featured = false
}) => {
  const Icon = Icons[pillar.icon];
  
  const sizeStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const containerVariants = {
    rest: { scale: 1 },
    hover: interactive ? { scale: 1.05, y: -10 } : {}
  };

  const contentVariants = {
    rest: { opacity: 1, y: 0 },
    hover: { opacity: 1, y: -5 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="rest"
      whileHover="hover"
      onClick={onClick}
      className={`cursor-pointer h-full ${interactive ? 'hover:shadow-2xl' : ''}`}
    >
      <Card 
        className={`
          h-full ${sizeStyles[size]}
          border-2 transition-all duration-300
          ${featured ? 'border-opacity-100' : 'border-opacity-20'}
          bg-gradient-to-br from-white to-gray-50
          dark:from-gray-900 dark:to-gray-800
        `}
        style={{
          borderColor: pillar.color.primary,
          ...(featured && {
            boxShadow: `0 20px 60px ${pillar.color.primary}20`
          })
        }}
      >
        {/* Icon */}
        <motion.div
          className="mb-6 inline-block p-4 rounded-xl"
          style={{ backgroundColor: `${pillar.color.primary}15` }}
          variants={contentVariants}
        >
          <Icon 
            size={size === 'lg' ? 48 : size === 'md' ? 36 : 28}
            style={{ color: pillar.color.primary }}
          />
        </motion.div>

        {/* Title */}
        <h3 
          className="text-2xl font-bold mb-2"
          style={{ color: pillar.color.primary }}
        >
          {pillar.name}
        </h3>

        {/* Tagline */}
        <p className="text-sm font-semibold mb-3 text-gray-600 dark:text-gray-400">
          {pillar.tagline}
        </p>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
          {pillar.description}
        </p>

        {/* Services Count */}
        <div className="mb-6 pb-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-gray-500 uppercase tracking-wide">
            {pillar.count} Services
          </p>
          <p className="text-xs text-gray-400 mt-2 leading-relaxed">
            {pillar.services.slice(0, 3).join(', ')}...
          </p>
        </div>

        {/* CTA */}
        <motion.button
          className="w-full py-3 rounded-lg font-semibold transition-all"
          style={{
            backgroundColor: pillar.color.primary,
            color: pillar.color.primary === '#FFF3B0' ? '#000' : '#fff'
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {pillar.cta}
        </motion.button>

        {/* Badge */}
        {featured && (
          <div 
            className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: pillar.color.primary }}
          >
            Featured
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default PillarCard;
