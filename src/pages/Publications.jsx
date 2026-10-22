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

        {/* Press Releases */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Media Coverage</h2>

            <div className="rounded-2xl border border-gold/20 bg-navy-900 p-8 text-center">
              <p className="text-lg font-semibold text-white">No linked media coverage is available yet.</p>
              <p className="mt-2 text-gray-300">When published coverage is added, each item will link directly to its source.</p>
              <a href="mailto:neeraj@sastrava.com,siri@sastrava.com?subject=Press%20inquiry" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg px-4 font-semibold text-gold-light hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light">
                Contact SASTRAVA for media enquiries <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-navy-950 py-16"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold text-white">Practical guides and worksheets</h2><p className="mt-3 max-w-3xl text-gray-300">Download planning resources and read the SASTRAVA field guides. They are educational starting points; adapt them to your organization and have qualified professionals review decisions where needed.</p><div className="mt-8 grid gap-6 lg:grid-cols-2"><div><h3 className="text-xl font-semibold text-gold-light">Downloadable templates</h3><ul className="mt-4 space-y-3">{downloadTemplates.map((item)=><li key={item.id} className="rounded-xl border border-white/10 p-4"><a className="font-semibold text-white underline decoration-gold-light underline-offset-4" href={item.href} download={item.filename}>{item.title}</a><p className="mt-2 text-sm text-gray-300">{item.summary}</p></li>)}</ul></div><div><h3 className="text-xl font-semibold text-gold-light">Field guides</h3><ul className="mt-4 space-y-3">{insights.map((article)=><li key={article.slug} className="rounded-xl border border-white/10 p-4"><a className="font-semibold text-white underline decoration-gold-light underline-offset-4" href={`/blog#${article.slug}`}>{article.title}</a><p className="mt-2 text-sm text-gray-300">{article.summary}</p></li>)}</ul></div></div></div></section>

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
                <h3 className="text-xl font-bold text-white mb-3">Team Profiles</h3>
                <p className="text-gray-400 mb-6">Meet the people behind SASTRAVA</p>
                <Button size="sm" variant="secondary" action="navigate" actionConfig={{ path: '/portfolio' }}>View profiles</Button>
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
