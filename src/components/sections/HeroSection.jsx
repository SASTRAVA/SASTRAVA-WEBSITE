import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Sparkles, ArrowRight, CheckCircle2, Zap, Award } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 pb-20 overflow-hidden bg-navy-950">
      {/* 🎨 ANIMATED PEACOCK GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-peacock-animated bg-300% opacity-40 animate-gradient-flow" />
      
      {/* 🌑 PRIMARY OVERLAY - Premium Dark Layer */}
      <div className="absolute inset-0 bg-navy-950/70" />

      {/* ✨ GLOSS OVERLAY - Premium Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/3 pointer-events-none" />

      {/* 🎲 NOISE TEXTURE - Anti-Digital Feel */}
      <div 
        className="absolute inset-0 opacity-3 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* 🌀 ANIMATED FLOATING BACKGROUND ELEMENTS WITH GLOW */}
      {/* PERFORMANCE: Hide on mobile for smooth 60fps rendering */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {/* Primary Floating Element - Peacock Blue */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-peacock-blue/10 rounded-full filter blur-2xl"
          animate={{ 
            y: [0, 50, 0], 
            x: [-20, 0, -20],
            scale: [1, 1.08, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            boxShadow: '0 0 25px rgba(20, 184, 166, 0.12), inset 0 0 20px rgba(20, 184, 166, 0.06)',
            willChange: 'transform',
          }}
        />
        
        {/* Secondary Floating Element - Gold */}
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gold-DEFAULT/8 rounded-full filter blur-2xl"
          animate={{ 
            y: [0, -50, 0], 
            x: [20, 0, 20],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            boxShadow: '0 0 30px rgba(201, 168, 76, 0.15), inset 0 0 25px rgba(201, 168, 76, 0.06)',
            willChange: 'transform',
          }}
        />
        
        {/* Tertiary Floating Element - Peacock Green */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-peacock-green/8 rounded-full filter blur-2xl"
          animate={{ 
            y: [0, 35, 0], 
            rotate: [0, 180, 360],
            scale: [1, 1.04, 1]
          }}
          transition={{ duration: 17, repeat: Infinity, ease: 'linear' }}
          style={{
            boxShadow: '0 0 20px rgba(20, 184, 166, 0.1)',
            willChange: 'transform',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center text-center z-20">
        {/* 🎯 PREMIUM BADGE WITH GOLD ACCENT */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="inline-flex items-center gap-3 px-5 py-3 rounded-full 
            bg-gradient-gold/5 backdrop-blur-glass
            border border-gold-DEFAULT/40
            relative group overflow-hidden mb-12"
          style={{
            boxShadow: '0 0 20px rgba(201, 168, 76, 0.15), inset 0 0 15px rgba(201, 168, 76, 0.05)',
          }}
        >
          {/* Badge Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-gold-DEFAULT/0 via-gold-DEFAULT/3 to-gold-DEFAULT/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Rotating Icon */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="relative z-10"
          >
            <Sparkles className="w-5 h-5 text-gold-light drop-shadow-lg" />
          </motion.div>
          
          {/* Badge Text */}
          <span className="text-sm font-semibold text-gold-light uppercase tracking-widest relative z-10">
            Welcome to SASTRAVA
          </span>
        </motion.div>

        {/* 🎨 MAIN HEADLINE WITH METALLIC GOLD */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mb-6 relative"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-offwhite mb-6 leading-tight tracking-tight">
            Master Cybersecurity
            
            {/* GOLD GRADIENT ANIMATED HEADLINE */}
            <motion.span 
              className="block mt-4 text-transparent bg-gradient-to-r from-gold-mid via-gold-light to-gold-mid bg-clip-text font-display"
              style={{
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              & AI/ML Today
            </motion.span>
          </h1>
          
          {/* Animated Gold Divider */}
          <motion.div
            className="h-2 w-20 mx-auto mt-8 bg-gradient-to-r from-transparent via-gold-light to-transparent rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            style={{
              boxShadow: '0 0 24px rgba(255, 243, 176, 0.3), 0 0 48px rgba(201, 168, 76, 0.15)',
            }}
          />
        </motion.div>

        {/* 📝 PREMIUM SUBHEADLINE */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-lg md:text-xl text-offwhite/85 max-w-2xl mb-16 leading-relaxed 
            font-light tracking-wide"
        >
          Industry-aligned courses from experts. Build real projects. Get hired.
        </motion.p>

        {/* 🔘 CTA BUTTONS - PREMIUM STYLING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-24 relative z-30"
        >
          {/* PRIMARY BUTTON - METALLIC GOLD WITH SHINE */}
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Button 
              variant="primary" 
              size="lg" 
              className="min-w-64 font-bold text-lg shadow-2xl"
              style={{
                boxShadow: '0 0 32px rgba(201, 168, 76, 0.25), 0 16px 32px rgba(0, 0, 0, 0.25)',
              }}
            >
              <span className="text-white">✨ Start Learning</span>
              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </Button>
          </motion.div>

          {/* SECONDARY BUTTON - PREMIUM GLASSMORPHISM */}
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="relative group"
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Button 
              variant="secondary" 
              size="lg"
              className="min-w-64 font-semibold text-lg
                bg-white/6 backdrop-blur-xl
                border-2 border-peacock-light/30
                hover:border-peacock-light/50
                hover:bg-white/10
                relative overflow-hidden"
              style={{
                boxShadow: '0 0 24px rgba(20, 184, 166, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.03)',
              }}
            >
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-peacock-light/0 via-peacock-light/3 to-peacock-light/0 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="relative z-10">Get an Experience</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* 📊 FLOATING STATS CARDS WITH PREMIUM GLOW */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full mt-6"
        >
          {[
            { label: '500+', description: 'Students', icon: '👥' },
            { label: '50+', description: 'Courses', icon: '📚' },
            { label: '100%', description: 'Job Ready', icon: '🎯' },
            { label: '24/7', description: 'Support', icon: '💬' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="group relative glass-gold gloss p-6 rounded-2xl text-center 
                border border-gold-DEFAULT/25 backdrop-blur-glass
                hover:border-gold-light/40
                transition-all duration-300"
              whileHover={{ 
                y: -6,
                scale: 1.015,
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transitionEnd={{ transitionEnd: true }}
              style={{
                boxShadow: '0 0 20px rgba(201, 168, 76, 0.15), inset 0 0 12px rgba(201, 168, 76, 0.04)',
              }}
            >
              {/* Hover Glow Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-DEFAULT/0 via-gold-DEFAULT/3 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Icon */}
              <motion.div 
                className="text-4xl mb-4 relative z-10"
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                {stat.icon}
              </motion.div>
              
              {/* Stat Label */}
              <motion.div 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold-mid via-gold-light to-gold-mid 
                  bg-clip-text text-transparent mb-3 font-display relative z-10"
                animate={{ opacity: 1 }}
                whileHover={{ opacity: 1 }}
              >
                {stat.label}
              </motion.div>
              
              {/* Description */}
              <p className="text-offwhite/70 text-sm font-medium relative z-10 uppercase tracking-wide">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ⬇️ ANIMATED SCROLL INDICATOR WITH PREMIUM GLOW */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Outer Glow Ring */}
        <motion.div 
          className="w-8 h-12 border-2 border-gold-DEFAULT/80 rounded-full flex justify-center relative"
          animate={{ boxShadow: ['0 0 16px rgba(201, 168, 76, 0.3)', '0 0 28px rgba(201, 168, 76, 0.45)', '0 0 16px rgba(201, 168, 76, 0.3)'] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          {/* Inner Scroll Dot */}
          <motion.div
            className="w-1.5 h-3 bg-gradient-to-b from-gold-light to-gold-DEFAULT rounded-full mt-3"
            animate={{ 
              opacity: [1, 0.4, 1],
              y: [0, 8, 0]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              boxShadow: '0 0 10px rgba(201, 168, 76, 0.5)',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
