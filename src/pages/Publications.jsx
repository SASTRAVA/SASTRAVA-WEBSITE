/**
 * Publications & Press Page
 * Media coverage, press releases, and blog posts
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { Calendar, ExternalLink } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: 'How SASTRAVA is Training the Next Generation of Cybersecurity Experts',
      publication: 'TechCrunch India',
      date: 'March 15, 2024',
      link: '#',
      image: 'TechCrunch'
    },
    {
      title: 'From Startup to Unicorn: SASTRAVA\'s Journey in EdTech',
      publication: 'Entrepreneur Magazine',
      date: 'March 10, 2024',
      link: '#',
      image: 'Entrepreneur'
    },
    {
      title: 'AI Revolution: How Companies Are Upskilling Workforce',
      publication: 'India Today',
      date: 'March 5, 2024',
      link: '#',
      image: 'India Today'
    },
    {
      title: 'SASTRAVA Launches India\'s First AI-First Education Platform',
      publication: 'The Hindu Business Line',
      date: 'Feb 28, 2024',
      link: '#',
      image: 'Hindu'
    },
    {
      title: '₹50 Crore Funding: SASTRAVA Accelerates Growth',
      publication: 'YourStory',
      date: 'Feb 20, 2024',
      link: '#',
      image: 'YourStory'
    },
    {
      title: 'Enterprise Security: Why Companies Trust SASTRAVA',
      publication: 'CIO Magazine',
      date: 'Feb 15, 2024',
      link: '#',
      image: 'CIO'
    },
    {
      title: '10,000+ Students: SASTRAVA Celebrates Milestone',
      publication: 'Hindu Tech',
      date: 'Feb 10, 2024',
      link: '#',
      image: 'Hindu'
    },
    {
      title: 'Making Education Accessible: SASTRAVA\'s Scholarship Program',
      publication: 'The Wire',
      date: 'Feb 5, 2024',
      link: '#',
      image: 'Wire'
    },
    {
      title: 'Government Recognizes SASTRAVA as Authorized Training Center',
      publication: 'Press Release',
      date: 'Jan 30, 2024',
      link: '#',
      image: 'NASSCOM'
    },
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
          title="Publications & Press"
          subtitle="Media coverage and press releases"
          description="See what industry leaders and media outlets are saying about SASTRAVA"
        />

        {/* Press Releases */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Media Coverage</h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {publications.map((pub, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 hover:border-gold/40 transition-all cursor-pointer group"
                  onClick={() => window.open(pub.link, '_blank')}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors mb-2">
                        {pub.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-xs">
                            {pub.image.charAt(0)}
                          </div>
                          <span className="font-semibold text-gold">{pub.publication}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400">
                          <Calendar size={14} />
                          <span>{pub.date}</span>
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Press Kit */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Press Kit</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-8 text-center hover:border-gold/40 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">Company Logo</h3>
                <p className="text-gray-400 mb-6">High-resolution brand assets</p>
                <Button size="sm" variant="secondary">Download</Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-8 text-center hover:border-gold/40 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">Company Overview</h3>
                <p className="text-gray-400 mb-6">Executive summary and background</p>
                <Button size="sm" variant="secondary">Download</Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-8 text-center hover:border-gold/40 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">Executive Bios</h3>
                <p className="text-gray-400 mb-6">Leadership team information</p>
                <Button size="sm" variant="secondary">Download</Button>
              </motion.div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-8">
              <h3 className="text-xl font-bold text-white mb-4">For Media Inquiries</h3>
              <p className="text-gray-300 mb-4">
                We'd love to share our story and insights with your audience. Contact our PR team for interviews, quotes, or collaboration opportunities.
              </p>
              <div className="flex gap-4">
                <a href="mailto:press@sastrava.com" className="text-gold hover:text-gold/80 font-semibold flex items-center gap-2">
                  press@sastrava.com
                  <ExternalLink size={14} />
                </a>
                <a href="tel:+919876543210" className="text-gold hover:text-gold/80 font-semibold flex items-center gap-2">
                  +91 98765 43210
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Publications;
