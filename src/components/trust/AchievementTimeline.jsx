/**
 * AchievementTimeline Component
 * Display achievements and milestones in timeline format
 */

import React from 'react';
import { motion } from 'framer-motion';

export const AchievementTimeline = ({
  achievements = [],
  title = 'Our Journey'
}) => {
  const defaultAchievements = [
    { year: 2019, title: 'Founded SASTRAVA', description: 'Launched with a vision to empower through technology education and innovation' },
    { year: 2020, title: '1,000 Students', description: 'Reached 1,000 learners across India within first year' },
    { year: 2021, title: 'Enterprise Clients', description: 'Started serving Fortune 500 companies with cybersecurity consulting' },
    { year: 2022, title: 'ISO 27001 Certified', description: 'Achieved Information Security Management certification' },
    { year: 2023, title: '10,000+ Students', description: 'Scaled to over 10,000 active learners and 500 enterprise projects' },
    { year: 2024, title: 'AI Division Launched', description: 'Introduced dedicated AI, GenAI, and ML solutions division' },
  ];

  const displayAchievements = achievements.length > 0 ? achievements : defaultAchievements;

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-xl md:text-2xl font-bold text-center mb-12 text-white">
          {title}
        </h3>
      )}

      <div className="max-w-3xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold via-peacock to-gold hidden md:block"></div>

        <div className="space-y-8 md:space-y-12">
          {displayAchievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex items-center gap-4 md:gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Content */}
              <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 hover:border-gold/40 transition-all"
                >
                  <p className="text-lg font-bold text-gold mb-2">
                    {achievement.year}
                  </p>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {achievement.description}
                  </p>
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-4 h-4 rounded-full bg-gold border-4 border-navy-950 mb-2"
                />
              </div>

              {/* Spacer for left side items */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementTimeline;
