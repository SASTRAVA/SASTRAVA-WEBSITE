/**
 * CertificationGrid Component
 * Display industry certifications and credentials
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

export const CertificationGrid = ({
  certifications = [],
  title = 'Industry Certifications & Credentials'
}) => {
  const displayCerts = certifications;

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-xl md:text-2xl font-bold text-center mb-12 text-white">
          {title}
        </h3>
      )}

      {displayCerts.length > 0 ? <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {displayCerts.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-gold group-hover:text-peacock transition-colors" />
              <p className="font-bold text-white text-sm group-hover:text-gold transition-colors">
                {cert.name}
              </p>
            </div>
            <p className="text-xs text-gray-400 mb-2">{cert.issuer}</p>
            <div className="flex items-center gap-1 pt-2 border-t border-navy-700">
              <CheckCircle className="w-3 h-3 text-peacock" />
              <span className="text-xs text-peacock font-medium">Certified {cert.year}</span>
            </div>
          </motion.div>
        ))}
      </motion.div> : <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-gray-400">SASTRAVA does not claim organizational certifications here. Any verified credential will be listed with its issuer and scope.</p>}
    </div>
  );
};

export default CertificationGrid;
