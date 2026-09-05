/**
 * ServiceCard Component
 * Displays individual service offerings
 * Clickable to navigate to service details
 */

import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export const ServiceCard = ({
  service,
  pillarColor,
  onClick,
  index = 0
}) => {
  const Icon = Icons[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="group cursor-pointer h-full"
    >
      <div 
        className="
          h-full p-6 rounded-xl border-2 border-transparent
          transition-all duration-300
          hover:border-opacity-100 hover:shadow-lg
          bg-gradient-to-br from-gray-50 to-white
          dark:from-gray-800 dark:to-gray-900
        "
        style={{
          borderColor: pillarColor + '30',
          ':hover': { borderColor: pillarColor }
        }}
      >
        {/* Icon Container */}
        <div 
          className="
            mb-4 w-12 h-12 rounded-lg flex items-center justify-center
            transition-all duration-300 group-hover:scale-110
            group-hover:shadow-lg
          "
          style={{ backgroundColor: pillarColor + '15' }}
        >
          <Icon 
            size={24}
            style={{ color: pillarColor }}
            className="transition-colors"
          />
        </div>

        {/* Service Name */}
        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
          {service.name}
        </h4>

        {/* Description */}
        {service.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {service.description}
          </p>
        )}

        {/* Features (if any) */}
        {service.features && (
          <ul className="text-xs text-gray-500 space-y-1 mb-4">
            {service.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex items-center">
                <span className="mr-2" style={{ color: pillarColor }}>✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}

        {/* Learn More Arrow */}
        <div className="flex items-center text-sm font-semibold" style={{ color: pillarColor }}>
          Learn More
          <Icons.ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
