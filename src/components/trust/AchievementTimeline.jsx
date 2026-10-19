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
  const displayAchievements = achievements;

  return (
    <div className="w-full">
      {title && (
        <h3 className="text-xl md:text-2xl font-bold text-center mb-12 text-white">
          {title}
        </h3>
      )}

      {displayAchievements.length > 0 ? <div className="max-w-3xl mx-auto">
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
      </div> : <p className="mx-auto max-w-2xl text-center text-sm leading-relaxed text-gray-400">A dated milestone timeline will be added when the underlying records are approved for publication.</p>}
    </div>
  );
};

export default AchievementTimeline;
