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
    {
      id: 'llm-fine-tuning',
      title: 'Fine-tuning Large Language Models for Enterprise Applications',
      description: 'Comprehensive guide on optimizing LLMs for specific business domains with practical implementation strategies',
      author: 'Dr. Rajesh Kumar',
      date: 'Dec 2023',
      category: 'AI',
      readTime: 12,
      downloads: 1245,
    },
    {
      id: 'zero-trust-architecture',
      title: 'Zero Trust Architecture Implementation in Multi-Cloud Environments',
      description: 'Best practices for implementing Zero Trust security model across AWS, Azure, and Google Cloud',
      author: 'Priya Sharma',
      date: 'Nov 2023',
      category: 'Cybersecurity',
      readTime: 18,
      downloads: 892,
    },
    {
      id: 'kubernetes-scale',
      title: 'Scaling Kubernetes to 10,000+ Nodes: Production Lessons',
      description: 'Real-world experience and best practices for managing massive Kubernetes clusters in production',
      author: 'Amit Patel',
      date: 'Oct 2023',
      category: 'DevOps',
      readTime: 15,
      downloads: 743,
    },
    {
      id: 'microservices-patterns',
      title: 'Advanced Microservices Patterns: From Theory to Enterprise Production',
      description: 'Patterns and anti-patterns for building resilient microservice architectures at scale',
      author: 'Neha Gupta',
      date: 'Sep 2023',
      category: 'Architecture',
      readTime: 20,
      downloads: 1156,
    },
    {
      id: 'ai-ethics-bias',
      title: 'Addressing Bias in AI Systems: A Practical Framework',
      description: 'Methodology for identifying, measuring, and mitigating bias in machine learning models',
      author: 'Dr. Vikram Singh',
      date: 'Aug 2023',
      category: 'AI',
      readTime: 14,
      downloads: 987,
    },
    {
      id: 'cloud-cost-optimization',
      title: 'Cloud Cost Optimization Strategies for SaaS Companies',
      description: 'Comprehensive guide to reducing cloud infrastructure costs by 40-60% without sacrificing performance',
      author: 'Anjali Mehta',
      date: 'Jul 2023',
      category: 'DevOps',
      readTime: 11,
      downloads: 1432,
    },
    {
      id: 'advanced-data-pipelines',
      title: 'Building Real-time Data Pipelines with Sub-second Latency',
      description: 'Architecture and implementation guide for ultra-low latency data processing systems',
      author: 'Karthik S',
      date: 'Jun 2023',
      category: 'Data Science',
      readTime: 16,
      downloads: 654,
    },
    {
      id: 'api-security',
      title: 'API Security in the Age of Microservices and GraphQL',
      description: 'Security best practices and threat models for modern API architectures',
      author: 'Maya Verma',
      date: 'May 2023',
      category: 'Cybersecurity',
      readTime: 13,
      downloads: 823,
    },
    {
      id: 'genai-enterprise',
      title: 'Deploying Generative AI in Enterprise: Governance and Compliance',
      description: 'Framework for safely deploying GenAI solutions while maintaining compliance and governance',
      author: 'Dr. Arun Kumar',
      date: 'Apr 2023',
      category: 'AI',
      readTime: 17,
      downloads: 1654,
    },
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
          description="Access our collection of research papers, whitepapers, and technical publications"
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
              <p className="mt-5 text-sm text-offwhite/60">By {selectedPaper.author} · {selectedPaper.readTime} min read</p>
              <Button className="mt-7" action="email" actionConfig={{ email: 'neeraj@sastrava.com', subject: `Research inquiry: ${selectedPaper.title}`, body: `Hello SASTRAVA,\n\nI would like to learn more about “${selectedPaper.title}”.` }}>Ask about this research</Button>
            </section>
          </div>
        )}

        {/* Subscribe Section */}
        <section className="py-16 bg-gradient-to-r from-peacock/10 to-gold/10 border-y border-peacock/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Research
            </h2>
            <p className="text-gray-300 mb-6">
              We currently handle research update requests by email.
            </p>
            <Button variant="primary" action="email" actionConfig={{ email: 'neeraj@sastrava.com', subject: 'Research updates request', body: 'Hello SASTRAVA,\n\nPlease contact me about future research updates.' }}>Request updates by email</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Research;
