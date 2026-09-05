import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { CheckCircle, ArrowRight } from 'lucide-react';

// Static data moved to module level for memoization
const SERVICE_SEGMENTS = [
  {
    tag: 'Content & Media',
    heading: "We don't just make content. We build the voice your brand speaks in.",
    tagline: 'Full-spectrum digital content — created, managed, and delivered.',
    body: "From the first script line to the final rendered frame, Sastrava's content team handles every layer of your brand's digital presence. We produce with intent — nothing goes out unless it earns its place.",
    capabilities: [
      'Video production, shooting, and post-editing',
      'Scriptwriting for ads, reels, and brand films',
      'Poster, graphic, and digital asset creation',
      'End-to-end content calendar management',
      'Content strategy across all digital platforms',
    ],
    serves: ['For clients', 'For Sastrava'],
  },
  {
    tag: 'Software Development',
    heading: 'EDR delivery. No lag. No excuses. Fully vibe-coded results.',
    tagline: 'From idea to deployment — built fast, built right.',
    body: "Our developers don't wait to be handed a brief and disappear. They engage, develop, and release — simultaneously meeting client deadlines and pushing Sastrava's own product roadmap forward. Speed is the standard, not the exception.",
    capabilities: [
      'Website building and ongoing maintenance',
      'Bug fixes, patch releases, and backend support',
      'Small and Large Scale Automations',
      'New tool development and internal automation',
      'App and product building — end to end',
    ],
    serves: ['For clients', 'For Sastrava'],
  },
  {
    tag: 'Digital Marketing',
    heading: 'Reach that moves. Growth that compounds.',
    tagline: 'Organic authority. Paid precision. Real results.',
    body: "Sastrava's marketing team doesn't run campaigns — they engineer growth systems. Every method, organic or inorganic, is selected against a clear business policy and a defined outcome. We don't measure vanity. We measure movement.",
    capabilities: [
      'AEO, GEO, and SEO-driven visibility strategies',
      'Paid campaigns across search and social',
      'Brand positioning and audience targeting',
      'Performance tracking and analytics reporting',
      'Full-funnel strategy — from awareness to conversion',
    ],
    serves: ['For clients', 'For Sastrava'],
  },
  {
    tag: 'Digital Learning',
    heading: "Not a coaching centre. A full academic partnership built for the real world.",
    tagline: 'Semester-integrated. Industry-aligned. Outcome-driven.',
    body: 'We embed directly into academic institutions — not alongside them. Our STEM programmes are engineered to match what industries actually demand, delivered across full semesters with live internship exposure and flexible workshops that work around institutional schedules.',
    capabilities: [
      'Semester-long integrated STEM curriculum delivery',
      'Live project internships with real industry exposure',
      'Flexible workshops for students and institutions',
      'Institution-aligned teaching that goes beyond theory',
      'Job-ready talent at scale — measurable outcomes',
    ],
    serves: ['Institutions', 'Students', 'Corporates'],
  },
];

// Service Card Component
const ServiceCard = ({ tag, heading, tagline, body, capabilities, serves, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="group"
    >
      <div className="relative h-full glass-gold gloss p-8 md:p-10 rounded-2xl overflow-hidden border border-gold-DEFAULT/20 shadow-glow-gold transition-all duration-300 group-hover:shadow-glow-gold-lg">
        
        {/* Animated gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-gold-DEFAULT to-gold-mid opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.05 }}
        />

        {/* Tag Badge */}
        <motion.span
          className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-gold-DEFAULT/10 text-gold-light border border-gold-DEFAULT/30"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.05 }}
          viewport={{ once: true }}
        >
          {tag}
        </motion.span>

        {/* Heading */}
        <motion.h3
          className="text-h3 text-offwhite mb-2 transition-colors group-hover:text-gold-light leading-snug"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {heading}
        </motion.h3>

        {/* Tagline */}
        <motion.p
          className="text-gold-light mb-4 font-semibold text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
          viewport={{ once: true }}
        >
          {tagline}
        </motion.p>

        {/* Body Text */}
        <p className="text-slate-300 leading-relaxed text-base mb-6 relative z-10">
          {body}
        </p>

        {/* Capabilities List */}
        <div className="mb-6 space-y-2 relative z-10">
          {capabilities.map((capability, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.04 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="w-4 h-4 text-gold-DEFAULT flex-shrink-0 mt-0.5" />
              <span className="text-slate-400 text-base">{capability}</span>
            </motion.div>
          ))}
        </div>



        {/* Glow halo effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-gold-DEFAULT/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-peacock-green/5 rounded-full filter blur-3xl" />
        </motion.div>

        {/* Premium border highlight */}
        <div className="absolute inset-0 rounded-2xl border border-gradient-to-r from-gold-DEFAULT/20 to-peacock-green/10 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export const Services = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <PageHero
          title="Everything your brand needs. One team. Zero compromise."
          subtitle="Our Services"
          description="Sastrava operates at the intersection of technology, creativity, and education. We don't hand off work across agencies — every capability you need lives under one roof, moves at one speed, and answers to one goal: yours."
        />

        {/* Services Grid Section */}
        <section className="relative py-section bg-navy-950 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/3 left-0 w-96 h-96 bg-peacock-blue/5 rounded-full filter blur-3xl"
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-0 w-80 h-80 bg-gold-DEFAULT/5 rounded-full filter blur-3xl"
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 14, repeat: Infinity }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-6">
            {/* Services Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.2,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {SERVICE_SEGMENTS.map((segment, idx) => (
                <ServiceCard
                  key={idx}
                  {...segment}
                  index={idx}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA Section */}
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

          <div className="relative max-w-4xl mx-auto px-6">
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
                  background:
                    'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)',
                }}
              />

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-h2 text-offwhite mb-6 relative z-10"
              >
                Every team.{' '}
                <motion.span
                  className="text-transparent bg-gradient-gold bg-clip-text font-display"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  One direction.
                </motion.span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-300 text-lg leading-relaxed mb-10 relative z-10 max-w-2xl mx-auto"
              >
                Whether you're a startup that needs to launch fast, a brand that needs to grow, an institution that wants better graduates, or a business that needs a digital presence — Sastrava runs all of it without handoffs, delays, or version confusion.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative z-10 flex justify-center"
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="inline-flex items-center gap-2 group"
                >
                  Let's Build Together
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 group-hover:text-gold-light" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
