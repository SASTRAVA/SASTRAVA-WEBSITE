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
import { ExternalLink } from 'lucide-react';
import { downloadTemplates } from '../config/downloadTemplates.js';
import { insights } from '../config/insights.js';
import { InteractiveBlueprintFilter } from '../components/interactive/InteractiveBlueprintFilter';

const publicationItems = [
  ...downloadTemplates.map((resource) => ({
    category: 'Worksheet',
    title: resource.title,
    problem: resource.summary,
    anatomy: 'Download the checklist, review the prompts with your team, and tailor the actions to your systems and responsibilities.',
    deliverables: `Downloadable resource · ${resource.filename}`,
    verification: 'Use as a planning aid and validate decisions with the appropriate owner or qualified professional.',
    href: resource.href,
    download: resource.filename,
    linkLabel: 'Download worksheet',
  })),
  ...insights.map((article) => ({
    category: 'Field guide',
    title: article.title,
    problem: article.summary,
    anatomy: 'Read the context, practical sequence, and questions to consider before planning implementation.',
    deliverables: `${article.readTime} · SASTRAVA field guide`,
    verification: 'Use the guide as educational context and adapt recommendations to your organization.',
    href: `/blog#${article.slug}`,
    linkLabel: 'Read field guide',
  })),
];

const Publications = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <PageHero
          title="Publications & Press"
          subtitle="Media coverage and press releases"
          description="Browse SASTRAVA media resources or contact the team for interviews and press enquiries."
        />

        <section className="bg-navy-950 px-6 py-16 md:py-20" aria-labelledby="publication-library-title"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-peacock-light">Interactive publication library</p><h2 id="publication-library-title" className="mt-3 text-3xl font-bold text-white">Guides and worksheets you can use.</h2><p className="mt-3 max-w-3xl text-offwhite/70">Filter the current library by resource type. Download worksheets directly or open a field guide for more detail.</p><div className="mt-7"><InteractiveBlueprintFilter items={publicationItems} categories={['All', 'Worksheet', 'Field guide']} /></div></div></section>

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
                <p className="text-gray-400 mb-6">Download the current SASTRAVA logo</p>
                <Button size="sm" variant="secondary" action="download" actionConfig={{ url: '/logo.png', filename: 'sastrava-logo.png' }}>Download logo</Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-8 text-center hover:border-gold/40 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">Company Overview</h3>
                <p className="text-gray-400 mb-6">Read about SASTRAVA and its work</p>
                <Button size="sm" variant="secondary" action="navigate" actionConfig={{ path: '/about' }}>Read overview</Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-8 text-center hover:border-gold/40 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">About SASTRAVA</h3>
                <p className="text-gray-400 mb-6">Learn about SASTRAVA, its approach, and leadership</p>
                <Button size="sm" variant="secondary" action="navigate" actionConfig={{ path: '/about' }}>Read about us</Button>
              </motion.div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-8">
              <h3 className="text-xl font-bold text-white mb-4">For Media Inquiries</h3>
              <p className="text-gray-300 mb-4">
                We'd love to share our story and insights with your audience. Contact our PR team for interviews, quotes, or collaboration opportunities.
              </p>
              <div className="flex gap-4">
                <a href="mailto:neeraj@sastrava.com,siri@sastrava.com?subject=Press%20inquiry" className="text-gold hover:text-gold/80 font-semibold flex items-center gap-2">
                  neeraj@sastrava.com · siri@sastrava.com
                  <ExternalLink size={14} />
                </a>
                <a href="tel:+917981576083" className="text-gold hover:text-gold/80 font-semibold flex items-center gap-2">
                  +91 7981 576083
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
