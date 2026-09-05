/**
 * Open Source Page
 * Open source projects and community contributions
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { GitBranch, Star, GitFork, ExternalLink } from 'lucide-react';

const OpenSource = () => {
  const projects = [
    {
      name: 'SecureAPI',
      description: 'Comprehensive API security testing framework with OWASP compliance checks',
      language: 'Python',
      stars: 2341,
      forks: 456,
      link: 'https://github.com/sastrava/secureapi',
      color: '#C9A84C'
    },
    {
      name: 'CloudGaurd',
      description: 'Multi-cloud security monitoring and compliance automation tool',
      language: 'Go',
      stars: 1856,
      forks: 342,
      link: 'https://github.com/sastrava/cloudgaurd',
      color: '#1ECDB0'
    },
    {
      name: 'MLOps Pipeline',
      description: 'Production-ready ML pipeline with model versioning and deployment automation',
      language: 'Python',
      stars: 3124,
      forks: 678,
      link: 'https://github.com/sastrava/mlops-pipeline',
      color: '#FFF3B0'
    },
    {
      name: 'DataPy',
      description: 'High-performance data processing library with Pandas-like API',
      language: 'Rust',
      stars: 1542,
      forks: 289,
      link: 'https://github.com/sastrava/datapy',
      color: '#C9A84C'
    },
    {
      name: 'ZeroTrustSDK',
      description: 'SDK for implementing Zero Trust security architecture patterns',
      language: 'TypeScript',
      stars: 987,
      forks: 201,
      link: 'https://github.com/sastrava/zerotrust-sdk',
      color: '#1ECDB0'
    },
    {
      name: 'CloudCostOptimizer',
      description: 'Automated cloud cost optimization and resource right-sizing',
      language: 'Python',
      stars: 1653,
      forks: 412,
      link: 'https://github.com/sastrava/cloud-cost-optimizer',
      color: '#C9A84C'
    },
  ];

  const contributions = [
    { org: 'Kubernetes', repos: 23, commits: 156, area: 'Container Orchestration' },
    { org: 'TensorFlow', repos: 8, commits: 89, area: 'ML/AI' },
    { org: 'Apache', repos: 15, commits: 134, area: 'Big Data' },
    { org: 'Docker', repos: 5, commits: 42, area: 'Containerization' },
    { org: 'Go', repos: 3, commits: 28, area: 'Language Libraries' },
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
              {projects.map((project, idx) => (
                <motion.div
                  key={project.name}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  onClick={() => window.open(project.link, '_blank')}
                  className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-gold/20 p-6 hover:border-gold/40 transition-all cursor-pointer group"
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
                    <div className="flex gap-3 text-xs text-gray-400">
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        {project.stars}
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={14} />
                        {project.forks}
                      </div>
                    </div>
                  </div>

                  <Button size="sm" variant="secondary" className="w-full text-xs">
                    View on GitHub
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contributions */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Major Contributions</h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
            >
              {contributions.map((contrib, idx) => (
                <motion.div
                  key={contrib.org}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-navy-800 to-navy-900 rounded-lg border border-peacock/20 p-4 text-center hover:border-peacock/40 transition-all"
                >
                  <h4 className="font-bold text-peacock mb-2 text-sm">{contrib.org}</h4>
                  <div className="space-y-2 mb-3">
                    <p className="text-2xl font-bold text-white">{contrib.repos}</p>
                    <p className="text-xs text-gray-400">repositories</p>
                  </div>
                  <div className="pt-3 border-t border-navy-700">
                    <p className="text-xs text-gray-400 mb-1">{contrib.commits} commits</p>
                    <p className="text-xs text-gold">{contrib.area}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Get Involved */}
        <section className="py-20 bg-gradient-to-r from-gold/10 to-peacock/10 border-y border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Open Source Community
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We're always looking for talented developers to contribute to our projects. Check out our repositories and join the mission!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/sastrava" target="_blank" rel="noopener noreferrer">
                <Button variant="primary">View All Projects</Button>
              </a>
              <Button variant="secondary">
                Contributing Guidelines
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default OpenSource;
