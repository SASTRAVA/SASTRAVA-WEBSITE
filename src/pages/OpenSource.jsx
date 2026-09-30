/**
 * Open Source Page
 * Open source projects and community contributions
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { ExternalLink, GitBranch } from 'lucide-react';

const OpenSource = () => {
  const projects = [
    {
      name: 'SASTRAVA Website',
      description: 'Website source code, interface, and supporting application features.',
      language: 'JavaScript',
      link: 'https://github.com/SASTRAVA/SASTRAVA-WEBSITE',
      color: '#C9A84C'
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
          title="Open Source"
          subtitle="Contributing to the global developer community"
          description="SASTRAVA is committed to open source development and community collaboration"
        />

        {/* Projects */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project) => (
                <motion.a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name} on GitHub (opens in a new tab)`}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="block rounded-lg bg-gradient-to-br from-navy-800 to-navy-900 border border-gold/20 p-6 hover:border-gold/40 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: `${project.color}40` }}
                    >
                      {project.name.charAt(0)}
                    </div>
                    <GitBranch size={18} className="text-gold group-hover:text-gold/80" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between mb-4 pt-4 border-t border-navy-700">
                    <span className="text-xs font-semibold px-2 py-1 rounded" style={{ backgroundColor: `${project.color}20`, color: project.color }}>
                      {project.language}
                    </span>
                    <ExternalLink size={16} aria-hidden="true" className="text-gray-400" />
                  </div>

                  <span className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-peacock px-4 text-sm font-semibold text-white">View on GitHub <ExternalLink size={14} aria-hidden="true" /></span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contributions */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-2xl border border-peacock/20 bg-navy-800 p-8 text-center">
              <h2 className="text-3xl font-bold text-white">Explore SASTRAVA on GitHub</h2>
              <p className="mt-4 text-gray-300">Browse the public repository and use its Issues page to report a problem or suggest an improvement.</p>
              <div className="mt-7 flex flex-col justify-center gap-4 sm:flex-row">
                <a href="https://github.com/SASTRAVA/SASTRAVA-WEBSITE" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#E6C200] px-6 font-semibold text-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light">Open repository <ExternalLink size={16} aria-hidden="true" /></a>
                <a href="https://github.com/SASTRAVA/SASTRAVA-WEBSITE/issues" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-peacock-light/40 px-6 font-semibold text-peacock-light hover:bg-peacock-light/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light">Report an issue <ExternalLink size={16} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-20 bg-gradient-to-r from-gold/10 to-peacock/10 border-y border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Contribute to the Website
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Suggest a change or report an issue in the public SASTRAVA website repository.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/SASTRAVA/SASTRAVA-WEBSITE" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-gold px-6 font-semibold text-navy-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light">View repository <ExternalLink size={16} aria-hidden="true" /></a>
              <a href="https://github.com/SASTRAVA/SASTRAVA-WEBSITE/issues" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-peacock-light/40 px-6 font-semibold text-peacock-light hover:bg-peacock-light/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-light">Suggest an improvement <ExternalLink size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default OpenSource;
