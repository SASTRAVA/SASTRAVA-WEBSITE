import React from 'react';
import { motion } from 'framer-motion';
import { FeatureCard } from '../ui/Card';
import { SectionLabel } from '../ui/SectionLabel';
import { Code, Brain, Cloud, Lock, Briefcase, Lightbulb } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Master modern web and mobile development with cutting-edge frameworks and best practices.',
      gradient: 'gold',
    },
    {
      icon: Brain,
      title: 'Data Science & AI/ML',
      description: 'Learn data analysis, machine learning, and AI to solve real-world problems at scale.',
      gradient: 'peacock',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Deploy and manage applications on AWS, GCP, and Azure with modern DevOps practices.',
      gradient: 'gold',
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Secure applications and systems against threats with advanced security techniques.',
      gradient: 'peacock',
    },
    {
      icon: Briefcase,
      title: 'Product Management',
      description: 'Build products that users love by mastering product strategy and design.',
      gradient: 'gold',
    },
    {
      icon: Lightbulb,
      title: 'Leadership & Soft Skills',
      description: 'Develop leadership capabilities and essential soft skills for career advancement.',
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
          className="absolute top-1/3 left-0 w-96 h-96 bg-peacock-blue/5 rounded-full filter blur-3xl"
          animate={{ y: [0, -30, 0] }}
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
          <SectionLabel label="What We Offer" icon={Briefcase} />
          <h2 className="text-h1 text-offwhite mb-6">
            Specialized Programs for Every Career Path
          </h2>
          <p className="text-lg text-offwhite/60 max-w-2xl mx-auto">
            Choose from our comprehensive range of courses covering in-demand technologies and skills.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <FeatureCard key={idx} {...service} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
