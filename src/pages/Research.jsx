/**
 * Research Center Page
 * Research papers, whitepapers, and technical publications
 */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { ResearchPreview } from '../components/trust';
import { FileText, Filter } from 'lucide-react';

const Research = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      url: '/research/llm-fine-tuning'
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
      url: '/research/zero-trust'
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
      url: '/research/k8s-scale'
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
      url: '/research/microservices'
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
      url: '/research/ai-bias'
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
      url: '/research/cloud-cost'
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
      url: '/research/data-pipelines'
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
      url: '/research/api-security'
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
      url: '/research/genai-enterprise'
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
                    onClick={() => window.open(paper.url, '_blank')}
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

        {/* Subscribe Section */}
        <section className="py-16 bg-gradient-to-r from-peacock/10 to-gold/10 border-y border-peacock/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Research
            </h2>
            <p className="text-gray-300 mb-6">
              Subscribe to receive new papers, whitepapers, and technical insights directly to your inbox
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg bg-navy-800 border border-peacock/20 text-white placeholder-gray-500 focus:outline-none focus:border-peacock/40"
              />
              <Button variant="primary">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Research;
