/**
 * Success Stories Page
 * Showcase student and client success outcomes
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { TestimonialCard, AchievementTimeline } from '../components/trust';
import { Users, Award, Target, BookOpen, Briefcase, Zap } from 'lucide-react';

const SuccessStories = () => {
  const [activeCategory, setActiveCategory] = useState('student');

  const categories = [
    { id: 'student', name: 'Student Success', icon: BookOpen, color: '#C9A84C' },
    { id: 'career', name: 'Career Transformation', icon: Briefcase, color: '#1ECDB0' },
    { id: 'internship', name: 'Internship Outcomes', icon: Target, color: '#FFF3B0' },
    { id: 'hackathon', name: 'Hackathon Winners', icon: Zap, color: '#C9A84C' },
  ];

  const successStories = {
    student: [
      {
        quote: 'SASTRAVA\'s AI/ML course transformed my understanding of machine learning. I went from zero to building production-ready models in 3 months.',
        author: 'Rajesh Kumar',
        title: 'Data Science Professional',
        company: 'TechCorp India',
        rating: 5,
        pillarColor: '#C9A84C'
      },
      {
        quote: 'The Python fundamentals course was brilliantly structured. Every concept was explained with real-world examples. Highly recommend!',
        author: 'Priya Sharma',
        title: 'Full Stack Developer',
        company: 'FinanceHub',
        rating: 5,
        pillarColor: '#C9A84C'
      },
      {
        quote: 'Cybersecurity Essentials helped me understand cloud security threats and defenses comprehensively. Excellent instructors!',
        author: 'Amit Patel',
        title: 'Security Engineer',
        company: 'SecureNet Solutions',
        rating: 5,
        pillarColor: '#C9A84C'
      },
    ],
    career: [
      {
        quote: 'After completing SASTRAVA\'s full course path, I landed a senior developer role with a 60% salary increase. The mentorship was invaluable.',
        author: 'Neha Gupta',
        title: 'Senior Full Stack Developer',
        company: 'Amazon',
        rating: 5,
        pillarColor: '#1ECDB0'
      },
      {
        quote: 'SASTRAVA prepared me not just technically but also for interviews and workplace culture. Got placed at Google with confidence!',
        author: 'Vikram Singh',
        title: 'Software Engineer',
        company: 'Google',
        rating: 5,
        pillarColor: '#1ECDB0'
      },
      {
        quote: 'The career roadmap guidance and industry mentorship made all the difference. Transitioned from QA to AI/ML engineer.',
        author: 'Anjali Mehta',
        title: 'AI/ML Engineer',
        company: 'Microsoft',
        rating: 5,
        pillarColor: '#1ECDB0'
      },
    ],
    internship: [
      {
        quote: 'My internship at SASTRAVA was a game-changer. Worked on real projects, mentored by experts, and got a pre-placement offer.',
        author: 'Karthik S',
        title: 'Associate Engineer',
        company: 'SASTRAVA Solutions',
        rating: 5,
        pillarColor: '#FFF3B0'
      },
      {
        quote: 'Internship experience here gave me industry-ready skills and confidence. Now leading a team of 5 developers.',
        author: 'Maya Verma',
        title: 'Tech Lead',
        company: 'EcommercePro',
        rating: 5,
        pillarColor: '#FFF3B0'
      },
    ],
    hackathon: [
      {
        quote: 'Our AI chatbot project won the national hackathon. SASTRAVA\'s mentorship was crucial to our success!',
        author: 'Dev Team',
        title: 'Hackathon Winners',
        company: 'National AI Summit 2023',
        rating: 5,
        pillarColor: '#C9A84C'
      },
      {
        quote: 'Won the security challenge hackathon with our penetration testing tool built during SASTRAVA\'s cybersecurity program.',
        author: 'Security Squad',
        title: 'Winner - SecureIT 2024',
        company: 'Annual Security Hackathon',
        rating: 5,
        pillarColor: '#C9A84C'
      },
    ]
  };

  const statistics = [
    { metric: 'Students Placed', value: '850+', unit: '', description: 'In high-paying tech roles' },
    { metric: 'Avg Salary Hike', value: '45%', unit: '', description: 'Upon completing courses' },
    { metric: 'Success Rate', value: '92%', unit: '%', description: 'Career transformation' },
    { metric: 'Companies Hired', value: '200+', unit: '', description: 'Top tech companies' },
  ];

  const achievements = [
    { year: 2020, title: '500+ First Placements', description: 'Our first batch graduates placed in leading tech companies' },
    { year: 2021, title: '1,000 Students Certified', description: 'Reached 1,000 certified professionals across India' },
    { year: 2022, title: '85% Placement Rate', description: 'Achieved 85% placement rate for active job seekers' },
    { year: 2023, title: '10,000 Success Stories', description: 'Crossed 10,000 students with career outcomes' },
    { year: 2024, title: '500+ Mentors', description: 'Built a network of 500+ industry mentors' },
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
          title="Success Stories"
          subtitle="Real outcomes from real learners and professionals"
          description="Join thousands who transformed their careers through SASTRAVA's comprehensive education and mentorship programs"
        />

        {/* Statistics Section */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Our Impact by Numbers
            </h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {statistics.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 text-center hover:border-gold/40 transition-all"
                >
                  <p className="text-4xl font-bold text-gold mb-2">
                    {stat.value}
                    <span className="text-lg text-gray-400">{stat.unit}</span>
                  </p>
                  <p className="font-semibold text-white mb-1">{stat.metric}</p>
                  <p className="text-sm text-gray-400">{stat.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-16 bg-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map(cat => {
                const IconComponent = cat.icon;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                      activeCategory === cat.id
                        ? 'bg-gold text-navy-950 shadow-lg shadow-gold/50'
                        : 'bg-navy-800 text-white border border-gold/20 hover:border-gold/40'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={18} />
                    {cat.name}
                  </motion.button>
                );
              })}
            </div>

            {/* Stories Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {successStories[activeCategory].map((story, idx) => (
                  <TestimonialCard
                    key={idx}
                    {...story}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AchievementTimeline
              achievements={achievements}
              title="Our Growth Journey"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gold/10 to-peacock/10 border-y border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of successful learners and professionals who transformed their careers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                Explore Learning Paths
              </Button>
              <Button size="lg" variant="secondary">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SuccessStories;
