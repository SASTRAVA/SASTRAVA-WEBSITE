/**
 * Achievements Page
 * Awards, recognitions, and partnerships
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { AwardCard, CertificationGrid, PartnerLogoGrid } from '../components/trust';
import { Award, Users, Building2 } from 'lucide-react';

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('awards');

  const awards = [
    {
      award: 'Best EdTech Company 2024',
      organization: 'Tech India Awards',
      year: 2024,
      category: 'Education',
      description: 'Recognized for innovative education technology and student outcomes'
    },
    {
      award: 'Top Cybersecurity Training Provider',
      organization: 'NASSCOM',
      year: 2024,
      category: 'Security',
      description: 'Excellence in cybersecurity education and professional training'
    },
    {
      award: 'Best Startup to Scale Profitably',
      organization: 'IAMAI',
      year: 2023,
      category: 'Business',
      description: 'Achieved profitability while maintaining growth trajectory'
    },
    {
      award: 'Innovation Leader in AI/ML',
      organization: 'AI Foundation India',
      year: 2023,
      category: 'AI',
      description: 'Pioneering work in practical AI and ML applications'
    },
    {
      award: 'Great Place to Work Certified',
      organization: 'GPTW Institute',
      year: 2023,
      category: 'Workplace',
      description: 'Top 100 companies for employee satisfaction and culture'
    },
    {
      award: 'Digital Transformation Leader',
      organization: 'CII',
      year: 2022,
      category: 'Innovation',
      description: 'Excellence in helping enterprises transform digitally'
    },
  ];

  const mentors = [
    { name: 'Rajesh Iyer', title: 'Former CTO at Google India', expertise: 'AI/ML, Cloud Architecture', company: 'Tech Mentor' },
    { name: 'Priya Sharma', title: 'Ex-Security Director at Flipkart', expertise: 'Cybersecurity, InfoSec', company: 'Security Lead' },
    { name: 'Vikram Singh', title: 'Co-founder at RedisLabs', expertise: 'DevOps, Scalability', company: 'Infrastructure' },
    { name: 'Anjali Gupta', title: 'Marketing Head at Swiggy', expertise: 'Growth, Digital Marketing', company: 'Growth Mentor' },
    { name: 'Arun Kumar', title: 'Healthcare Tech Pioneer', expertise: 'Healthcare Tech, Data', company: 'Domain Expert' },
    { name: 'Neha Verma', title: 'Product Lead at Uber', expertise: 'Product, Scaling', company: 'Product Strategy' },
  ];

  const partnerships = [
    { name: 'AWS', type: 'Cloud Partner', duration: '2023-Present' },
    { name: 'Microsoft', type: 'Technology Partner', duration: '2023-Present' },
    { name: 'Google Cloud', type: 'Data & AI Partner', duration: '2023-Present' },
    { name: 'NASSCOM', type: 'Industry Association', duration: '2022-Present' },
    { name: 'IIT Delhi', type: 'Academic Partner', duration: '2023-Present' },
    { name: 'BITS Pilani', type: 'Educational Partner', duration: '2023-Present' },
  ];

  const tabs = [
    { id: 'awards', name: 'Awards & Recognition', icon: Award },
    { id: 'mentors', name: 'Mentors & Advisors', icon: Users },
    { id: 'partners', name: 'Partnerships', icon: Building2 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <PageHero
          title="Achievements"
          subtitle="Recognition from industry leaders and organizations"
          description="Our commitment to excellence has been recognized by leading industry bodies and organizations"
        />

        {/* Tabs */}
        <section className="py-12 bg-navy-900 border-b border-gold/20 sticky top-20 z-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3">
              {tabs.map(tab => {
                const IconComponent = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'bg-gold text-navy-950 shadow-lg shadow-gold/50'
                        : 'bg-navy-800 text-white border border-gold/20 hover:border-gold/40'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={18} />
                    {tab.name}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Awards */}
            {activeTab === 'awards' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-white mb-8">Awards & Recognitions</h2>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {awards.map((award, idx) => (
                      <motion.div key={idx} variants={itemVariants}>
                        <AwardCard {...award} icon={Award} index={idx} />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-8">Industry Certifications</h2>
                  <CertificationGrid />
                </div>
              </motion.div>
            )}

            {/* Mentors */}
            {activeTab === 'mentors' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="text-2xl font-bold text-white mb-12">Mentors & Advisors</h2>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {mentors.map((mentor, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 hover:border-gold/40 transition-all"
                    >
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4 text-gold font-bold">
                        {mentor.name.charAt(0)}
                      </div>
                      <h4 className="font-bold text-white mb-1">{mentor.name}</h4>
                      <p className="text-sm text-gold font-semibold mb-2">{mentor.title}</p>
                      <p className="text-xs text-gray-400 mb-3">{mentor.expertise}</p>
                      <div className="pt-3 border-t border-navy-700">
                        <span className="text-xs text-peacock font-medium">{mentor.company}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Partners */}
            {activeTab === 'partners' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <h2 className="text-2xl font-bold text-white mb-12">Strategic Partnerships</h2>
                <PartnerLogoGrid />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                  {partnerships.map((partner, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-peacock/20 p-6"
                    >
                      <h4 className="text-lg font-bold text-white mb-2">{partner.name}</h4>
                      <p className="text-sm text-gold mb-2">{partner.type}</p>
                      <p className="text-xs text-gray-400">{partner.duration}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Achievements;
