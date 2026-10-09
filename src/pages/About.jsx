import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { motion } from 'framer-motion';
import { Target, Star, Rocket, BriefcaseBusiness, Bot, ShieldCheck, Megaphone, CheckCircle2 } from 'lucide-react';

const About = () => {
  const segments = [
    {
      title: 'Business Consulting & Incubation',
      description: 'Practical strategy and early-stage support to help founders and organizations clarify priorities and next steps.',
      icon: BriefcaseBusiness,
    },
    {
      title: 'AI, Automation & Software',
      description: 'Digital products and connected workflows shaped around user needs, existing tools, and agreed outcomes.',
      icon: Bot,
    },
    {
      title: 'Security Review & Remediation',
      description: 'Scoped security reviews, prioritized findings, and practical patching support with verification.',
      icon: ShieldCheck,
    },
    {
      title: 'Digital Growth & Learning',
      description: 'Search, content, campaigns, and practical learning programs aligned with each audience and brief.',
      icon: Megaphone,
    },
  ];

  const ecosystemItems = [
    'Business strategy and startup incubation support',
    'AI solutions, software products, and workflow automation',
    'Security audits, testing, patching, and retesting',
    'SEO, content, organic visibility, and paid campaigns',
    'Digital content and media production',
    'Practical technical learning, workshops, and mentoring',
    'Research and product discovery for emerging needs',
  ];

  return (
    <>
      <Navbar />
      <PageHero
        title="About SASTRAVA"
        subtitle="Who We Are"
        description="SASTRAVA works across business consulting, startup incubation, technology, security, digital growth, and practical learning."
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
                  SASTRAVA helps businesses, founders, and institutions move from complex challenges to clear, workable next steps.
                </p>
                <p>
                  Our work began with technical guidance in cybersecurity and AI. That foundation in practical learning now sits alongside consulting, software and AI development, automation, security reviews, and digital marketing.
                </p>
                <p>
                  We saw the value of pairing useful knowledge with clear direction and real application. We bring that same practical approach to organizations evaluating a new idea, improving a process, building a product, or strengthening digital security.
                </p>
                <p>
                  Today, our services span business strategy and incubation, AI and workflow automation, software and digital products, authorized security testing and remediation, digital marketing, and technical learning. We scope each engagement around its audience, constraints, and goals.
                </p>
                <p className="text-lg font-semibold text-gold-light pt-4">
                  Our aim is to make the next decision clearer and the next step more achievable.
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
                “Clarity to plan. Capability to build. Confidence to grow.”
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
                Help businesses, founders, and institutions turn complex challenges into well-scoped strategy and useful outcomes through consulting, technology, security, digital growth, and learning.
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
                Build an ecosystem where organizations can develop ideas responsibly, apply technology with purpose, and grow with practical expertise.
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
                  SASTRAVA’s roots are in practical teaching and technical guidance in cybersecurity and AI/ML. That work grew into curriculum and project support, then broadened to include consulting, technology delivery, security, automation, and growth services.
                </p>
                <p>
                  Those beginnings shaped how we work: understand the context, explain trade-offs, and focus on solutions people can use and maintain.
                </p>
                <p className="text-lg font-semibold text-peacock-light pt-4">
                  We continue to support learners while helping organizations plan, build, secure, and grow their digital work.
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
                Depending on the brief, our work may include:
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
                  Good work starts with a clear problem, a realistic plan, and respect for the people affected by the solution.
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-gold-light mr-4 mt-1">•</span>
                    <span>Advice grounded in the client’s context and constraints.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-light mr-4 mt-1">•</span>
                    <span>Technology designed for practical use and responsible operation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-light mr-4 mt-1">•</span>
                    <span>Security, accessibility, and maintainability considered from the start.</span>
                  </li>
                </ul>
                <p className="pt-4">
                  We work with founders, businesses, and institutions to turn ideas and challenges into clear decisions, useful services, and measurable next steps.
                </p>
                <p className="text-xl font-semibold text-gold-light pt-4">
                  Practical work. Clear communication. Progress you can evaluate.
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
