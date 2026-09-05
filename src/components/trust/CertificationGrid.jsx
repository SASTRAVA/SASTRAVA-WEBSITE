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
  const defaultCertifications = [
    { name: 'ISO 27001', issuer: 'Information Security', year: 2022 },
    { name: 'SOC 2 Type II', issuer: 'Security & Availability', year: 2023 },
    { name: 'AWS Advanced Partner', issuer: 'Amazon Web Services', year: 2023 },
    { name: 'Microsoft Gold Partner', issuer: 'Microsoft', year: 2023 },
    { name: 'Google Cloud Certified', issuer: 'Google Cloud', year: 2022 },
    { name: 'NASSCOM DSCI', issuer: 'Data Security', year: 2023 },
    { name: 'CMMI Level 3', issuer: 'Software Engineering', year: 2022 },
    { name: 'Great Place to Work', issuer: 'Employee Culture', year: 2023 },
  ];

  const displayCerts = certifications.length > 0 ? certifications : defaultCertifications;

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

      <motion.div
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
            className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-4 hover:border-gold/40 transition-all group cursor-pointer"
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
      </motion.div>
    </div>
  );
};

export default CertificationGrid;
