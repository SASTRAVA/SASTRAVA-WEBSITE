import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from '../ui/Card';
import { SectionLabel } from '../ui/SectionLabel';
import { Code2, Zap, Users, Rocket, Shield, Lightbulb } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: Code2,
      title: 'Expert-Led Curriculum',
      description: 'Learn from industry professionals with real-world experience in cutting-edge technologies.',
      gradient: 'gold',
    },
    {
      icon: Rocket,
      title: 'Project-Based Learning',
      description: 'Build real products from day one and showcase them in your portfolio.',
      gradient: 'gold',
    },
    {
      icon: Users,
      title: 'Community & Mentorship',
      description: 'Join a vibrant community of learners and get guidance from experienced mentors.',
      gradient: 'peacock',
    },
    {
      icon: Zap,
      title: 'Fast-Track Programs',
      description: 'Accelerate your career with intensive, focused bootcamp-style courses.',
      gradient: 'peacock',
    },
    {
      icon: Shield,
      title: 'Career Support',
      description: 'Get job placement assistance, resume reviews, and interview prep support.',
      gradient: 'gold',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Labs',
      description: 'Access state-of-the-art labs and tools to experiment with emerging technologies.',
      gradient: 'peacock',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative py-section bg-navy-950 overflow-hidden noise">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-peacock-green/5 rounded-full filter blur-3xl"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <SectionLabel label="Core Features" icon={Zap} />
          <h2 className="text-h1 text-offwhite mb-6">
            Everything You Need to
            <span className="block text-transparent bg-gradient-gold bg-clip-text">
              Succeed
            </span>
          </h2>
          <p className="text-lg text-offwhite/60 max-w-2xl mx-auto">
            Our comprehensive platform combines expert instruction, hands-on projects, and career support to transform your career.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              {...feature}
              index={idx}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
