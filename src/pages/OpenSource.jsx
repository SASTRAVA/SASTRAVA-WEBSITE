/**
 * Open Source Page
 * Open source projects and community contributions
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { ExternalLink, FileText } from 'lucide-react';
import { downloadTemplates } from '../config/downloadTemplates.js';

const OpenSource = () => {
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
          title="Open Source"
          subtitle="Contributing to the global developer community"
          description="Use SASTRAVA’s free browser-based planning tools and downloadable worksheets. Open-source repositories are listed only when a public code repository and license are available."
        />

        {/* Projects */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-5">Community projects</h2>
            <p className="mb-12 max-w-3xl text-gray-300">These public utilities run in your browser. They are planning aids, not professional audits or forecasts. The website source repository is not listed here.</p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                ['/tools/seo-aeo-checker','SEO, AEO & GEO readiness checker','Review discoverability and page clarity.'],
                ['/tools/ai-roi-calculator','AI automation ROI calculator','Explore time and cost assumptions before a bounded pilot.'],
                ['/tools/security-checklist','Website security checklist','Review foundational security readiness and next actions.'],
              ].map(([href,title,description])=><motion.article key={href} variants={itemVariants} className="rounded-2xl border border-gold/20 bg-gradient-to-br from-navy-800 to-navy-900 p-7"><ExternalLink className="mb-4 text-gold" aria-hidden="true"/><h3 className="text-xl font-bold text-white">{title}</h3><p className="mt-3 text-gray-300">{description}</p><a className="mt-4 inline-flex min-h-11 items-center font-semibold text-peacock-light underline" href={href}>Open browser tool</a></motion.article>)}
              {downloadTemplates.map((item)=><motion.article key={item.id} variants={itemVariants} className="rounded-2xl border border-white/10 bg-navy-900 p-7"><FileText className="mb-4 text-peacock-light" aria-hidden="true"/><h3 className="text-xl font-bold text-white">{item.title}</h3><p className="mt-3 text-gray-300">{item.summary}</p><a className="mt-4 inline-flex min-h-11 items-center font-semibold text-peacock-light underline" href={item.href} download={item.filename}>Download worksheet</a></motion.article>)}
            </motion.div>
          </div>
        </section>

        {/* Contributions */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-2xl border border-peacock/20 bg-navy-800 p-8 text-center">
              <h2 className="text-3xl font-bold text-white">Build with the community</h2>
              <p className="mt-4 text-gray-300">SASTRAVA’s public browser tools and worksheets are free to use. For code contributions, we will add a project only when its source repository, license, and contribution process are published.</p>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-20 bg-gradient-to-r from-gold/10 to-peacock/10 border-y border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Follow future releases
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              New community projects and contribution opportunities will be announced on this page.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-gold px-6 font-semibold text-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light">Contact SASTRAVA</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default OpenSource;
