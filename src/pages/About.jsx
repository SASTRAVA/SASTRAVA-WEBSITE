import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { motion } from 'framer-motion';
import { Target, Star, Rocket, GraduationCap, Palette, Code2, FlaskConical, CheckCircle2 } from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      title: 'Our Motto',
      description: '"Reaching the Pinnacles of Teaching, Innovation, and Development."',
      icon: Target,
      highlight: true,
    },
  ];

  const segments = [
    {
      title: 'Mentoring',
      description: 'Dedicated mentors and trainers focused on practical learning, technical excellence, and student empowerment.',
      icon: GraduationCap,
    },
    {
      title: 'Content & Media Team',
      description: 'Creative professionals responsible for educational content, branding, communication, and digital learning experiences.',
      icon: Palette,
    },
    {
      title: 'Developers',
      description: 'Engineers and innovators building scalable solutions, AI-driven systems, and technology-focused products.',
      icon: Code2,
    },
    {
      title: 'Research Division',
      description: 'A focused segment dedicated to experimentation, emerging technologies, and developing future-oriented educational methodologies.',
      icon: FlaskConical,
    },
  ];

  const ecosystemItems = [
    'Technical Workshops',
    'STEM Training Programs',
    'Internship Initiatives',
    'Industry-Oriented Learning Modules',
    'Small to Large Scale Automations',
    'Digital Marketing Use Cases',
    'Content & Media Use Cases',
    'Research & Development Activities',
    'Product and Idea Proposals for Emerging Businesses',
    'Real-Time AI & Technology Solutions',
  ];

  return (
    <>
      <Navbar />
      <PageHero
        title="About SASTRAVA"
        subtitle="Who We Are"
        description="Redefining education through innovation, practical learning, and transformative impact."
      />

      {/* MAIN CONTENT SECTIONS */}
      <section className="relative py-20 md:py-28 bg-navy-950">
        {/* BACKGROUND ACCENTS */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-peacock-green/6 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-DEFAULT/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          {/* ABOUT US STORY */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative glass-peacock gloss p-10 md:p-12 rounded-2xl 
              border border-peacock-light/30 backdrop-blur-sm md:backdrop-blur-glass
              mb-20 will-change-transform"
            style={{
              boxShadow: '0 0 24px rgba(20, 184, 166, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.03)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-peacock-light/0 via-peacock-light/3 to-peacock-light/0 
              opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-offwhite mb-6">
                <span className="text-transparent bg-gradient-to-r from-gold-mid via-gold-light to-gold-mid bg-clip-text">
                  About SASTRAVA
                </span>
              </h2>
              <div className="space-y-4 text-offwhite/80 leading-relaxed font-light">
                <p>
                  We began with a simple belief — education should not merely inform; it should transform.
                </p>
                <p>
                  What started as an independent effort to guide students through the evolving worlds of Cybersecurity and AI/ML gradually became a mission to redefine how modern learning is experienced.
                </p>
                <p>
                  For nearly two years, we worked closely with students through freelancing mentorship, technical guidance, and domain-oriented teaching. During this journey, we observed a recurring gap — students possessed curiosity, yet lacked structured direction, industry awareness, and practical exposure. That realization became the foundation of our vision.
                </p>
                <p>
                  From mentoring aspiring learners to designing focused curricula and developing industry-oriented final-year AI projects, every step shaped the roots of our organization. Today, we are building more than a training platform — we are creating a sophisticated learning ecosystem where innovation, research, development, and education coexist with purpose.
                </p>
                <p className="text-lg font-semibold text-gold-light pt-4">
                  Our journey is driven by one ambition: to help learners rise beyond conventional limitations and reach the pinnacle of their potential.
                </p>
              </div>
            </div>
          </motion.div>

          {/* MOTTO SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="group relative glass-gold gloss p-10 md:p-12 rounded-2xl 
              border border-gold-DEFAULT/25 backdrop-blur-sm md:backdrop-blur-glass
              mb-20 hover:border-gold-light/40
              transition-all duration-300 will-change-transform"
            whileHover={{ y: -6 }}
            style={{
              boxShadow: '0 0 20px rgba(201, 168, 76, 0.15), inset 0 0 12px rgba(201, 168, 76, 0.04)',
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-DEFAULT/0 via-gold-DEFAULT/3 to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 text-center">
              <motion.div
                className="mb-6 flex justify-center"
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Star className="w-12 h-12 text-gold-light" strokeWidth={1.75} />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-offwhite mb-4">
                Our Motto
              </h3>
              <p className="text-xl text-offwhite/80 font-semibold italic">
                "Reaching the Pinnacles of Teaching, Innovation, and Development."
              </p>
            </div>
          </motion.div>

          {/* MISSION & VISION SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* MISSION */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="group relative glass-gold gloss p-8 rounded-2xl 
                border border-gold-DEFAULT/25 backdrop-blur-sm md:backdrop-blur-glass
                hover:border-gold-light/40
                transition-all duration-300 will-change-transform"
              whileHover={{ y: -6, scale: 1.015 }}
              style={{
                boxShadow: '0 0 20px rgba(201, 168, 76, 0.15), inset 0 0 12px rgba(201, 168, 76, 0.04)',
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-DEFAULT/0 via-gold-DEFAULT/3 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <motion.div
                className="mb-6 relative z-10"
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Target className="w-12 h-12 text-gold-light" strokeWidth={1.75} />
              </motion.div>

              <h3 className="text-2xl font-bold text-offwhite mb-4 relative z-10">
                Our Mission
              </h3>

              <p className="text-offwhite/75 leading-relaxed relative z-10 font-light">
                To reform traditional educational practices by creating practical, industry-oriented, and innovation-driven learning systems that bridge the gap between knowledge and real-world application.
              </p>
            </motion.div>

            {/* VISION */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="group relative glass-peacock gloss p-8 rounded-2xl 
                border border-peacock-light/30 backdrop-blur-sm md:backdrop-blur-glass
                hover:border-peacock-light/40
                transition-all duration-300 will-change-transform"
              whileHover={{ y: -6, scale: 1.015 }}
              style={{
                boxShadow: '0 0 20px rgba(20, 184, 166, 0.1), inset 0 0 12px rgba(20, 184, 166, 0.04)',
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-peacock-light/0 via-peacock-light/3 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <motion.div
                className="mb-6 relative z-10"
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Rocket className="w-12 h-12 text-peacock-light" strokeWidth={1.75} />
              </motion.div>

              <h3 className="text-2xl font-bold text-offwhite mb-4 relative z-10">
                Our Vision
              </h3>

              <p className="text-offwhite/75 leading-relaxed relative z-10 font-light">
                To revolutionize modern education through well-structured methodologies, advanced learning procedures, and technology-driven ecosystems that empower the next generation of learners and creators.
              </p>
            </motion.div>
          </div>

          {/* OUR ROOTS SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative glass-peacock gloss p-10 md:p-12 rounded-2xl 
              border border-peacock-light/30 backdrop-blur-sm md:backdrop-blur-glass
              mb-20 will-change-transform"
            style={{
              boxShadow: '0 0 24px rgba(20, 184, 166, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.03)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-peacock-light/0 via-peacock-light/3 to-peacock-light/0 
              opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-offwhite mb-6">
                <span className="text-transparent bg-gradient-to-r from-peacock-light via-peacock-green to-peacock-light bg-clip-text">
                  Our Roots
                </span>
              </h2>
              <div className="space-y-4 text-offwhite/80 leading-relaxed font-light">
                <p>
                  Our foundation was built through direct interaction with students and real-world problem solving. We started by independently teaching Cybersecurity and AI/ML concepts, helping learners understand emerging domains and career pathways. Over time, this expanded into curriculum development, specialized training structures, mentorship programs, and AI-based final-year project development across multiple objectives and applications.
                </p>
                <p>
                  These experiences shaped our understanding of what students truly need — clarity, practical exposure, mentorship, and a system that evolves with technology.
                </p>
                <p className="text-lg font-semibold text-peacock-light pt-4">
                  Today, we continue to grow with the same purpose that started it all: building a future-ready educational ecosystem that inspires learning, innovation, and transformation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* OUR SEGMENTS SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-offwhite mb-12 text-center">
              <span className="text-transparent bg-gradient-to-r from-gold-mid via-gold-light to-gold-mid bg-clip-text">
                Our Segments
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {segments.map((segment, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="group relative glass-gold gloss p-8 rounded-2xl 
                    border border-gold-DEFAULT/25 backdrop-blur-sm md:backdrop-blur-glass
                    hover:border-gold-light/40
                    transition-all duration-300 will-change-transform"
                  whileHover={{ y: -6, scale: 1.015 }}
                  style={{
                    boxShadow: '0 0 20px rgba(201, 168, 76, 0.15), inset 0 0 12px rgba(201, 168, 76, 0.04)',
                  }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-DEFAULT/0 via-gold-DEFAULT/3 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <motion.div
                    className="mb-6 relative z-10"
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  >
                    <segment.icon className="w-12 h-12 text-gold-light" strokeWidth={1.75} />
                  </motion.div>

                  <h3 className="text-xl font-bold text-offwhite mb-4 relative z-10">
                    {segment.title}
                  </h3>

                  <p className="text-offwhite/75 leading-relaxed relative z-10 font-light">
                    {segment.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* OUR ECOSYSTEM SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative glass-peacock gloss p-10 md:p-12 rounded-2xl 
              border border-peacock-light/30 backdrop-blur-sm md:backdrop-blur-glass
              mb-20 will-change-transform"
            style={{
              boxShadow: '0 0 24px rgba(20, 184, 166, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.03)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-peacock-light/0 via-peacock-light/3 to-peacock-light/0 
              opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-offwhite mb-8">
                <span className="text-transparent bg-gradient-to-r from-peacock-light via-peacock-green to-peacock-light bg-clip-text">
                  Our Ecosystem
                </span>
              </h2>
              <p className="text-lg text-offwhite/80 leading-relaxed font-light mb-8">
                We actively build sustainable growth and industry exposure through:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {ecosystemItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-peacock-light/5 border border-peacock-light/20 hover:border-peacock-light/40 transition-all duration-300"
                  >
                    <CheckCircle2 className="w-6 h-6 text-peacock-light flex-shrink-0" strokeWidth={1.75} />
                    <p className="text-offwhite/80 font-light">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* WHAT WE BELIEVE SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative glass-gold gloss p-10 md:p-12 rounded-2xl 
              border border-gold-DEFAULT/25 backdrop-blur-sm md:backdrop-blur-glass
              will-change-transform"
            style={{
              boxShadow: '0 0 24px rgba(201, 168, 76, 0.15), inset 0 0 15px rgba(201, 168, 76, 0.04)',
            }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold-DEFAULT/0 via-gold-DEFAULT/3 to-transparent 
              opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-offwhite mb-8 text-center">
                <span className="text-transparent bg-gradient-to-r from-gold-mid via-gold-light to-gold-mid bg-clip-text">
                  What We Believe
                </span>
              </h2>
              <div className="space-y-6 text-lg text-offwhite/80 leading-relaxed font-light">
                <p>
                  We believe education should evolve with the world around it.
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-gold-light mr-4 mt-1">•</span>
                    <span>Not limited to classrooms.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-light mr-4 mt-1">•</span>
                    <span>Not restricted to theory.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-light mr-4 mt-1">•</span>
                    <span>Not disconnected from reality.</span>
                  </li>
                </ul>
                <p className="pt-4">
                  Our goal is to create an ecosystem where students do not simply learn technology — they learn how to build with it, innovate through it, and lead because of it.
                </p>
                <p className="text-xl font-semibold text-gold-light pt-4">
                  Because the future belongs to those who are prepared to create it.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
