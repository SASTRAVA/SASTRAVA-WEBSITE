/**
 * ValuePropositionCard Component
 * Displays key value propositions (Why Choose SASTRAVA)
 */

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Card } from '../ui/Card';

export const ValuePropositionCard = ({
  proposition,
  index = 0,
  layout = 'vertical'
}) => {
  const Icon = Icons[proposition.icon];
  const colors = ['#C9A84C', '#1ECDB0', '#FFF3B0', '#0F3D3E'];
  const color = colors[index % colors.length];

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    hover: { y: -10, boxShadow: '0 30px 60px rgba(0,0,0,0.2)' }
  };

  const horizontalLayout = (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="flex gap-6 p-6"
    >
      {/* Icon */}
      <div 
        className="
          flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center
          transform group-hover:scale-110 transition-transform
        "
        style={{ backgroundColor: color + '20' }}
      >
        <Icon size={32} style={{ color }} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {proposition.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-3">
          {proposition.description}
        </p>
        <p className="text-sm font-semibold" style={{ color }}>
          {proposition.stat}
        </p>
      </div>
    </motion.div>
  );

  const verticalLayout = (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full p-8 text-center hover:shadow-xl transition-shadow">
        {/* Icon */}
        <motion.div 
          className="
            mb-6 inline-block p-4 rounded-xl
            group-hover:scale-110 transition-transform
          "
          style={{ backgroundColor: color + '20' }}
        >
          <Icon size={40} style={{ color }} />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
          {proposition.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
          {proposition.description}
        </p>

        {/* Stat */}
        <motion.p 
          className="text-lg font-bold"
          style={{ color }}
        >
          {proposition.stat}
        </motion.p>
      </Card>
    </motion.div>
  );

  return layout === 'horizontal' ? horizontalLayout : verticalLayout;
};

export default ValuePropositionCard;
