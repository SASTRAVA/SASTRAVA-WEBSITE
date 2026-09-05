import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { motion } from 'framer-motion';
import AboutPage from './About';
import Courses from './Courses';
import { Contact as ContactPage } from './Contact';
import { Services as ServicesPage } from './Services';
import { Portfolio as PortfolioPage } from './Portfolio';

const PlaceholderPage = ({ title, subtitle, description }) => (
  <>
    <Navbar />
    <PageHero
      title={title}
      subtitle={subtitle}
      description={description}
    />
    
    {/* Content Section */}
    <section className="relative py-20 md:py-28 bg-navy-950">
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-peacock-green/6 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-DEFAULT/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative glass-peacock gloss p-10 md:p-12 rounded-2xl 
            border border-peacock-light/30 backdrop-blur-glass"
          style={{
            boxShadow: '0 0 24px rgba(20, 184, 166, 0.1), inset 0 0 15px rgba(255, 255, 255, 0.03)',
          }}
        >
          {/* Hover Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-peacock-light/0 via-peacock-light/3 to-peacock-light/0 
            opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
          
          <div className="relative z-10">
            <p className="text-lg text-offwhite/80 leading-relaxed font-light">
              This page is currently under development. Check back soon for comprehensive content and updates.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </>
);

export const About = AboutPage;

export const Domains = () => (
  <PlaceholderPage 
    title="Specialized Domains" 
    subtitle="Expertise Areas"
    description="Explore focused capability areas across consulting, software, marketing, learning, cybersecurity, and AI — each shaped around practical outcomes for organizations and learners." 
  />
);

export const Services = ServicesPage;

export { Courses };

export const Portfolio = PortfolioPage;

export const Blog = () => (
  <PlaceholderPage 
    title="Insights & Updates" 
    subtitle="Latest Articles"
    description="Notes on consulting, innovation, growth systems, learning, and the work of building what moves organizations forward. Full articles are coming soon." 
  />
);

export const Careers = () => (
  <PlaceholderPage 
    title="Join Our Team" 
    subtitle="Opportunities"
    description="Build with SASTRAVA. We look for people who can advise with clarity, create with craft, and help ventures grow with purpose." 
  />
);

export const Contact = ContactPage;
