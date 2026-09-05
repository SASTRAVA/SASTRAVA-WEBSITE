/**
 * ClientLogoGrid Component
 * Display client logos in a professional grid
 */

import React from 'react';
import { motion } from 'framer-motion';

export const ClientLogoGrid = ({
  clients = [],
  title = 'Trusted by Leading Organizations',
  columns = 4
}) => {
  // Default realistic client data
  const defaultClients = [
    { name: 'TechCorp India', sector: 'Technology' },
    { name: 'FinanceHub Inc', sector: 'Financial Services' },
    { name: 'HealthPlus Digital', sector: 'Healthcare' },
    { name: 'EcommercePro', sector: 'E-commerce' },
    { name: 'InsuranceNow', sector: 'Insurance' },
    { name: 'RetailMax', sector: 'Retail' },
    { name: 'LogisticsPro', sector: 'Logistics' },
    { name: 'MediaStream', sector: 'Media & Entertainment' },
  ];

  const displayClients = clients.length > 0 ? clients : defaultClients;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-xl md:text-2xl font-bold text-center mb-12 text-white">
          {title}
        </h3>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-${columns} gap-6 md:gap-8`}
      >
        {displayClients.map((client, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center"
          >
            <div className="w-full bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 flex flex-col items-center justify-center min-h-[140px] hover:border-gold/40 transition-all hover:shadow-lg hover:shadow-gold/10">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold/50 flex items-center justify-center mb-3">
                <span className="text-navy-950 font-bold text-xl">
                  {client.name.charAt(0)}
                </span>
              </div>
              <p className="text-center font-semibold text-white text-sm">
                {client.name}
              </p>
              <p className="text-xs text-gray-400 text-center mt-1">
                {client.sector}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ClientLogoGrid;
