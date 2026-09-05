/**
 * TestimonialCard Component
 * Display client/student testimonials with ratings
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const TestimonialCard = ({
  quote,
  author,
  title,
  company,
  avatar,
  rating = 5,
  pillarColor = '#C9A84C'
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <div className="h-full bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 flex flex-col hover:border-gold/40 transition-colors">
        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className="fill-gold text-gold"
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-gray-300 italic mb-4 flex-grow">
          "{quote}"
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-3 pt-4 border-t border-navy-700">
          {avatar ? (
            <img
              src={avatar}
              alt={author}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: pillarColor }}
            >
              {author.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-semibold text-white">{author}</p>
            <p className="text-sm text-gray-400">{title}</p>
            {company && (
              <p className="text-xs text-gray-500">{company}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
