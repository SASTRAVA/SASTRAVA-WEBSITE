/**
 * Open Source Page
 * Open source projects and community contributions
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { GitBranch } from 'lucide-react';

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
          description="SASTRAVA shares selected tools and learning resources with the developer community. Public projects will be featured here as they become available."
        />

        {/* Projects */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-5">Community projects</h2>
            <p className="mb-12 max-w-3xl text-gray-300">We are preparing reusable tools and resources for public release. Check back here for projects with clear documentation, licensing, and contribution guidance.</p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <motion.article
                variants={itemVariants}
                className="rounded-2xl border border-gold/20 bg-gradient-to-br from-navy-800 to-navy-900 p-7 md:col-span-2 lg:col-span-3"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold"><GitBranch size={22} aria-hidden="true" /></div>
                <h3 className="text-xl font-bold text-white">Selected projects coming soon</h3>
                <p className="mt-3 max-w-2xl text-gray-300">This page will list public community projects when their documentation and contribution details are ready.</p>
              </motion.article>
            </motion.div>
          </div>
        </section>

        {/* Contributions */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-2xl border border-peacock/20 bg-navy-800 p-8 text-center">
              <h2 className="text-3xl font-bold text-white">Build with the community</h2>
              <p className="mt-4 text-gray-300">We will publish project links, licenses, and contribution instructions here as individual resources are ready to share.</p>
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
