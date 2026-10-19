/**
 * Research Center Page
 * Research papers, whitepapers, and technical publications
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { ResearchPreview } from '../components/trust';
import { FileText, Filter } from 'lucide-react';

const Research = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPaper, setSelectedPaper] = useState(null);
  const closePaperRef = useRef(null);

  useEffect(() => {
    if (!selectedPaper) return undefined;
    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedPaper(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    closePaperRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPaper]);

  const categories = ['all', 'AI', 'Cybersecurity', 'DevOps', 'Architecture', 'Data Science'];

  const researchPapers = [
    { id: 'responsible-ai', title: 'Responsible AI adoption', description: 'A practical topic guide covering data suitability, human review, privacy, evaluation, and the limits of generative AI in business workflows.', category: 'AI' },
    { id: 'security-baselines', title: 'Security review and remediation', description: 'An overview of scoping an authorized security review, prioritizing findings by risk, documenting fixes, and planning retesting.', category: 'Cybersecurity' },
    { id: 'workflow-automation', title: 'Workflow automation planning', description: 'A guide to mapping repetitive work, checking integrations and failure paths, and measuring whether automation is useful before scaling it.', category: 'Architecture' },
    { id: 'search-visibility', title: 'Search and answer visibility', description: 'A practical overview of crawlability, useful page structure, local signals, and clear answers for search and AI discovery systems.', category: 'Data Science' },
  ];

  const filteredPapers = selectedCategory === 'all'
    ? researchPapers
    : researchPapers.filter(paper => paper.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
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
          title="Research Center"
          subtitle="Deep dive into emerging technologies and enterprise practices"
          description="Practical topic guides on AI adoption, software, security, automation, and digital discovery. These are learning resources, not peer-reviewed research claims."
        />

        {/* Filter */}
        <section className="py-12 bg-navy-900 border-b border-peacock/20 sticky top-20 z-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <Filter size={20} className="text-peacock hidden md:block" />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <motion.button
                    key={category}
                    type="button"
                    aria-pressed={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all text-sm ${
                      selectedCategory === category
                        ? 'bg-peacock text-navy-950 shadow-lg shadow-peacock/50'
                        : 'bg-navy-800 text-white border border-peacock/20 hover:border-peacock/40'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category === 'all' ? 'All Topics' : category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Papers */}
        <section className="py-20 bg-gradient-to-b from-navy-950 to-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredPapers.map((paper, idx) => (
                <motion.div key={paper.id} variants={itemVariants}>
                  <ResearchPreview
                    {...paper}
                    index={idx}
                    onClick={() => setSelectedPaper(paper)}
                  />
                </motion.div>
              ))}
            </motion.div>

            {filteredPapers.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No papers in this category yet</p>
              </div>
            )}
          </div>
        </section>

        {selectedPaper && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="research-summary-title"
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm"
            onClick={(event) => { if (event.target === event.currentTarget) setSelectedPaper(null); }}
          >
            <section className="my-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-peacock/40 bg-navy-900 p-6 shadow-2xl md:p-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-peacock">{selectedPaper.category} · {selectedPaper.date}</p>
                  <h2 id="research-summary-title" className="mt-2 text-2xl font-bold text-white md:text-3xl">{selectedPaper.title}</h2>
                </div>
                <button ref={closePaperRef} type="button" onClick={() => setSelectedPaper(null)} aria-label="Close research summary" className="min-h-11 min-w-11 rounded-lg border border-white/20 text-2xl text-white hover:border-peacock hover:text-peacock">×</button>
              </div>
              <h3 className="mt-7 font-semibold text-peacock">Summary</h3>
              <p className="mt-2 leading-relaxed text-offwhite/80">{selectedPaper.description}</p>
              <p className="mt-5 text-sm text-offwhite/60">SASTRAVA topic guide · Contact us for scope-specific discussion.</p>
              <Button className="mt-7" action="email" actionConfig={{ email: 'neeraj@sastrava.com', subject: `Research inquiry: ${selectedPaper.title}`, body: `Hello SASTRAVA,\n\nI would like to learn more about “${selectedPaper.title}”.` }}>Ask about this research</Button>
            </section>
          </div>
        )}

        {/* Subscribe Section */}
        <section className="py-16 bg-gradient-to-r from-peacock/10 to-gold/10 border-y border-peacock/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Practical Guides
            </h2>
            <p className="text-gray-300 mb-6">
              We currently handle research update requests by email.
            </p>
            <Button variant="primary" action="email" actionConfig={{ email: 'neeraj@sastrava.com', subject: 'Practical guide updates request', body: 'Hello SASTRAVA,\n\nPlease contact me about future practical guides.' }}>Request updates by email</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Research;
