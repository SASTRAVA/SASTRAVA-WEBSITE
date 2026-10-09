import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Brain, Lock, Code, BookOpen, TrendingUp, Target, BriefcaseBusiness, ShieldCheck } from 'lucide-react';

// Static data arrays - moved outside components for memoization
const PORTFOLIO_DOMAINS = [
  {
    icon: BriefcaseBusiness,
    title: 'Business Consulting & Incubation',
    description: 'Clarify business priorities, assess ideas, and shape practical plans for growth and delivery.'
  },
  {
    icon: Brain,
    title: 'AI & Workflow Automation',
    description: 'Identify appropriate uses for AI and connect workflows around existing tools and review needs.'
  },
  {
    icon: Lock,
    title: 'Cybersecurity & Remediation',
    description: 'Review systems within an authorized scope, prioritize security findings, and plan fixes and retesting.'
  },
  {
    icon: Code,
    title: 'Software & Digital Products',
    description: 'Design and develop websites, applications, and internal tools around user and business needs.'
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing & Search',
    description: 'Plan organic and paid activity, useful content, and measurement around the audience and offer.'
  },
  {
    icon: BookOpen,
    title: 'Technical Learning',
    description: 'Support learners and institutions with practical workshops, mentoring, and project guidance.'
  },
];

const TEAM_CAROUSEL = [
  { name: 'Neeraj Kumar', designation: 'CEO', image: '/images/team/neeraj-kumar.png', width: 152, height: 202, profile: '/portfolios/06_S_Neeraj_Kumar.html' },
  { name: 'Siri Perumalla', designation: 'COO', image: '/images/team/siri-perumalla.png', width: 152, height: 201, profile: '/portfolios/05_P_Prasanna_Siri.html' },
  { name: 'Jaya Surya Krishna', designation: 'Digital Marketing Head', image: '/images/team/jaya-surya.png', width: 152, height: 228, profile: '/portfolios/02_K_Jaya_Surya_Krishna.html' },
  { name: 'Krishna Sai', designation: 'Software Development Head', image: '/images/team/krishna-sai.png', width: 152, height: 189, profile: '/portfolios/01_A_Geetha_Krishna_Sai.html' },
  { name: 'Suhas Raj', designation: 'Digital Learning Head', image: '/images/team/suhas-raj.png', width: 152, height: 183, profile: '/portfolios/03_Y_Suhas_Raj.html' },
];

const PORTFOLIO_STATS = [
  {
    icon: Target,
    number: 'Strategy',
    label: 'Business Consulting',
    description: 'Planning and incubation shaped around the brief'
  },
  {
    icon: Code,
    number: 'Build',
    label: 'Software & Products',
    description: 'Digital products, integrations, and improvements'
  },
  {
    icon: Brain,
    number: 'Automate',
    label: 'AI & Workflows',
    description: 'Useful automation with human review where needed'
  },
  {
    icon: ShieldCheck,
    number: 'Protect & Grow',
    label: 'Security & Visibility',
    description: 'Security reviews and digital marketing support'
  },
];

// Portfolio Hero Section
const PortfolioHero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 bg-navy-950 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-peacock-blue/10 rounded-full filter blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-DEFAULT/5 rounded-full filter blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          style={{ willChange: 'transform' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-8"
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide bg-gold-DEFAULT/10 text-gold-light border border-gold-DEFAULT/30">
              Strategy · Innovation · Delivery
            </span>
          </motion.div>

          {/* SASTRAVA Brand Label */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg font-semibold mb-4 bg-gradient-to-r from-gold-DEFAULT via-gold-mid to-gold-light bg-clip-text text-transparent"
          >
            SASTRAVA
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-offwhite mb-6 leading-tight"
          >
            Business Consulting,{' '}
            <span className="bg-gradient-to-r from-gold-DEFAULT via-gold-mid to-gold-light bg-clip-text text-transparent">
              Innovation
            </span>{' '} & Incubation
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Explore SASTRAVA’s work across strategy, incubation, AI and automation, software, cybersecurity, digital marketing, and technical learning.
          </motion.p>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10"
          >
            <div className="glass-gold gloss rounded-lg p-4 border border-gold-DEFAULT/20">
              <div className="text-xl md:text-2xl font-bold text-gold-light">Consult</div>
              <div className="text-xs md:text-sm text-slate-300">Strategy & incubation</div>
            </div>
            <div className="glass-gold gloss rounded-lg p-4 border border-gold-DEFAULT/20">
              <div className="text-xl md:text-2xl font-bold text-gold-light">Build</div>
              <div className="text-xs md:text-sm text-slate-300">Products & automation</div>
            </div>
            <div className="glass-gold gloss rounded-lg p-4 border border-gold-DEFAULT/20">
              <div className="text-xl md:text-2xl font-bold text-gold-light">Grow</div>
              <div className="text-xs md:text-sm text-slate-300">Security & visibility</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Domain Card Component
const DomainCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="group"
    >
      <div className="relative h-full glass-peacock gloss p-8 rounded-2xl overflow-hidden border border-peacock-green/20 shadow-glow-peacock transition-all duration-300 group-hover:shadow-glow-peacock-lg">
        
        {/* Animated gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-peacock-blue to-peacock-green opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.05 }}
        />

        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
          viewport={{ once: true }}
          className="mb-6 inline-block p-3 rounded-lg bg-peacock-blue/10 border border-peacock-light/20"
        >
          <Icon className="w-8 h-8 text-peacock-light" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-offwhite mb-3 transition-colors group-hover:text-peacock-light leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 leading-relaxed relative z-10">
          {description}
        </p>

        {/* Glow halo effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-peacock-blue/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-peacock-green/5 rounded-full filter blur-3xl" />
        </motion.div>
      </div>
    </motion.div>
  );
};

// Domains Section
const DomainsSection = () => {
  return (
    <section className="relative py-section bg-navy-950 overflow-hidden">
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
          <motion.span
            className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide bg-peacock-blue/10 text-peacock-light border border-peacock-light/30"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            Our Capabilities
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-offwhite mb-6">
            Areas of Work
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Representative areas where SASTRAVA supports founders, businesses, institutions, and learners.
          </p>
        </motion.div>

        {/* Domains Grid */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PORTFOLIO_DOMAINS.map((domain, idx) => (
            <DomainCard key={idx} {...domain} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Team Carousel Section
const TeamCarouselSection = () => {
  return (
    <section className="relative py-section bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-gold-DEFAULT/5 rounded-full filter blur-3xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide bg-gold-DEFAULT/10 text-gold-light border border-gold-DEFAULT/30">
            The SASTRAVA Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-offwhite mb-6">
            People behind the work
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300">Meet the team and explore each person’s professional experience and areas of focus.</p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {TEAM_CAROUSEL.map((member, idx) => (
            <motion.a
              key={member.profile}
              href={member.profile}
              aria-label={`View ${member.name} portfolio`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group overflow-hidden rounded-2xl border border-gold-DEFAULT/20 bg-navy-900/80 shadow-glow-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light"
            >
              <img
                src={member.image}
                alt={`${member.name}, ${member.designation}`}
                width={member.width}
                height={member.height}
                loading="lazy"
                decoding="async"
                className="h-64 w-full bg-navy-950/70 object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-offwhite">{member.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gold-light">{member.designation}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-peacock-light">View profile <span aria-hidden="true">↗</span></span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Impact Stats Section
const ImpactSection = () => {
  return (
    <section className="relative py-section bg-navy-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-gold-DEFAULT/5 rounded-full filter blur-3xl"
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-offwhite mb-4">
            Areas of <span className="bg-gradient-to-r from-gold-DEFAULT to-gold-light bg-clip-text text-transparent">Practice</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A snapshot of the capabilities SASTRAVA brings together for each engagement.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PORTFOLIO_STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <div className="glass-gold gloss rounded-2xl p-8 border border-gold-DEFAULT/20 shadow-glow-gold transition-all duration-300 group-hover:shadow-glow-gold-lg h-full overflow-hidden relative">
                  {/* Background gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-gold-DEFAULT to-gold-mid opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                  />

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-4 inline-block p-3 rounded-lg bg-gold-DEFAULT/10 border border-gold-DEFAULT/20"
                  >
                    <Icon className="w-8 h-8 text-gold-light" />
                  </motion.div>

                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-bold text-gold-light mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-offwhite mb-2">
                      {stat.label}
                    </div>
                    <p className="text-sm text-slate-400">
                      {stat.description}
                    </p>
                  </div>

                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gold-DEFAULT/5 rounded-full filter blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-mid/5 rounded-full filter blur-3xl" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

// Mission Statement Section
const MissionSection = () => {
  return (
    <section className="relative py-section overflow-hidden">
      {/* Animated Peacock Gradient Background */}
      <div className="absolute inset-0 bg-gradient-peacock-animated bg-300% opacity-50 animate-gradient-flow" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy-950/60" />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 bg-gold-DEFAULT/15 rounded-full filter blur-3xl shadow-glow-gold"
        animate={{ y: [0, 60, 0], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-peacock-blue/15 rounded-full filter blur-3xl shadow-glow-teal"
        animate={{ y: [0, -60, 0], x: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-peacock gloss rounded-3xl p-12 md:p-16 backdrop-blur-lg border border-peacock-light/30 text-center shadow-elevation-lg"
          style={{
            boxShadow: '0 0 40px rgba(20, 184, 166, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Premium Shine Overlay */}
          <div
            className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 50%, rgba(255, 255, 255, 0) 100%)',
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-offwhite mb-6 leading-tight"
            >
              Our <span className="bg-gradient-to-r from-peacock-blue via-peacock-green to-peacock-light bg-clip-text text-transparent">Mission</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8"
            >
              We help founders, businesses, and institutions make clearer decisions and move practical work forward through strategy, technology, security, and digital growth.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto"
            >
              Each engagement starts with understanding the need, agreeing a realistic scope, and making the next step clear. Our technical learning work continues alongside this broader focus.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioHero />
        <DomainsSection />
        <TeamCarouselSection />
        <ImpactSection />
        <MissionSection />
      </main>
      <Footer />
    </>
  );
}

export { Portfolio };
export default Portfolio;
