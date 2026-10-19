/**
 * PartnerLogoGrid Component
 * Display partner and integration logos
 */

import React from 'react';
import { motion } from 'framer-motion';

export const PartnerLogoGrid = ({
  partners = [],
  title = 'Partner relationships',
  columns = 5
}) => {
  const displayPartners = partners;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-xl md:text-2xl font-bold text-center mb-12 text-white">
          {title}
        </h3>
      )}

      {displayPartners.length > 0 ? <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-${columns} gap-4 md:gap-6`}
      >
        {displayPartners.map((partner, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.08, y: -5 }}
            className="flex items-center justify-center"
          >
            <div className="w-full bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-peacock/20 p-5 flex flex-col items-center justify-center min-h-[120px] hover:border-peacock/40 transition-all hover:shadow-lg hover:shadow-peacock/10">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-peacock to-peacock/50 flex items-center justify-center mb-2 text-navy-950 font-bold text-lg">
                {partner.name.charAt(0)}
              </div>
              <p className="text-center font-semibold text-white text-sm">
                {partner.name}
              </p>
              <p className="text-xs text-gray-400 text-center mt-1">
                {partner.category}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div> : <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-gray-400">Formal partner relationships will be listed here when verified. Using a technology does not imply an endorsement or partnership.</p>}
    </div>
  );
};

export default PartnerLogoGrid;
