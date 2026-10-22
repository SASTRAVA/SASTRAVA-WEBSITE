/**
 * Learn Pillar Page
 * Education, courses, training, and skill development
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { ECOSYSTEM_PILLARS } from '../config/businessModel';
import * as Icons from 'lucide-react';
import { Button } from '../components/ui/Button';
import { contrastTextColor } from '../utils/contrastText';
import { SeoAnswers } from '../components/seo/SeoAnswers';
import { edutechInstagramUrl, learningPrograms, learningDomainGroups, technologyExplainers, technologyHistoryTopics } from '../config/learningCatalog';

export const LearnPillar = () => {
  const pillar = ECOSYSTEM_PILLARS.LEARN;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <PageHero
          title={`${pillar.name}: ${pillar.tagline}`}
          subtitle={pillar.description}
          backgroundImage="gradient"
        />

        {/* Main Content Section */}
        <section className="py-24 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Overview */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <motion.p variants={itemVariants} className="text-[#725300] font-semibold uppercase mb-4">
                About {pillar.name}
              </motion.p>
              <motion.h2 variants={itemVariants} className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Practical Learning and Mentoring
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                {pillar.description}
              </motion.p>
            </motion.div>

            <div className="mb-16 rounded-2xl border border-gold/20 bg-gray-50 p-6 dark:bg-gray-800 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">A scope shaped around your goals</h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-300">We agree the audience, priorities, deliverables, and review measures before work begins. The right approach depends on your context and the requirements of the engagement.</p>
            </div>

            {/* Services */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h3 variants={itemVariants} className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
                Learning Options
              </motion.h3>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {learningPrograms.map((program, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-8 rounded-xl border-2 hover:shadow-xl transition-all group"
                    style={{
                      borderColor: pillar.color.primary + '40',
                      backgroundColor: pillar.color.primary + '05'
                    }}
                    whileHover={{ y: -10 }}
                  >
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-gold-500 transition-colors">
                      {program.service}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {program.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {program.deliverables.map((deliverable) => <li key={deliverable} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"><Icons.CheckCircle size={16} style={{ color: pillar.color.primary }} />{deliverable}</li>)}
                    </ul>
                    <Button
                      className="w-full"
                      style={{ backgroundColor: pillar.color.primary, color: contrastTextColor(pillar.color.primary) }}
                      action="openContact"
                    >
                      Discuss learning options
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <section className="mt-20" aria-labelledby="learning-domains-title">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-wide text-[#725300]">Sastrava Edutech</p><h2 id="learning-domains-title" className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">22 learning and career domains</h2><p className="mt-2 max-w-3xl text-gray-600 dark:text-gray-300">Explore the topic areas and formats that can be shaped into workshops, mentoring, or project-based learning.</p></div><a className="inline-flex min-h-11 items-center rounded-lg border border-[#725300] px-4 font-semibold text-[#725300] hover:bg-gold-50 dark:text-yellow-300" href={edutechInstagramUrl} target="_blank" rel="noreferrer">Follow @sastrava_edutech</a></div>
              <div className="grid gap-6 lg:grid-cols-2">{learningDomainGroups.map((group) => <article key={group.id} className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-white/10 dark:bg-gray-800"><h3 className="text-xl font-bold text-gray-900 dark:text-white">{group.title}</h3><p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{group.description}</p><ul className="mt-5 grid gap-2 sm:grid-cols-2">{group.domains.map(({ number, name, href }) => <li key={number}><a className="block rounded-lg border border-gray-200 bg-white p-3 text-sm font-medium text-gray-800 hover:border-gold-500 dark:border-white/10 dark:bg-gray-900 dark:text-gray-200" href={href}><span className="mr-2 text-gold-600">{number}</span>{name}</a></li>)}</ul></article>)}</div>
            </section>
            <section className="mt-20" aria-labelledby="microlearning-title"><h2 id="microlearning-title" className="text-3xl font-bold text-gray-900 dark:text-white">Tech explained simply</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{technologyExplainers.map((topic) => <article key={topic.title} className="rounded-2xl border border-gray-200 p-6 dark:border-white/10"><h3 className="text-xl font-semibold text-gray-900 dark:text-white">{topic.title}</h3><p className="mt-3 text-gray-600 dark:text-gray-300">{topic.description}</p><a className="mt-4 inline-flex min-h-11 items-center font-semibold text-teal-700 underline dark:text-teal-300" href={topic.href}>{topic.label}</a></article>)}</div><h3 className="mt-10 text-2xl font-bold text-gray-900 dark:text-white">Technology foundations: how it began</h3><ul className="mt-5 grid gap-4 md:grid-cols-2">{technologyHistoryTopics.map((topic) => <li key={topic.title} className="rounded-xl border border-gray-200 p-5 dark:border-white/10"><h4 className="font-semibold text-gray-900 dark:text-white">{topic.title}</h4><p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{topic.description}</p><a className="mt-2 inline-flex min-h-10 items-center text-sm text-teal-700 underline dark:text-teal-300" href={topic.source} target="_blank" rel="noreferrer">Read the source</a></li>)}</ul></section>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16" style={{ backgroundColor: pillar.color.primary + '10' }}>
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-offwhite mb-4">
              Ready to Start Learning?
            </h3>
            <p className="text-lg text-offwhite/85 mb-8">
              Ask about a workshop, mentoring session, or team learning program.
            </p>
            <Button
              className="font-bold"
              style={{ backgroundColor: pillar.color.primary, color: contrastTextColor(pillar.color.primary) }}
              action="openContact"
            >
              Discuss learning options
            </Button>
          </div>
        </section>
        <SeoAnswers />
      </main>
      <Footer />
    </>
  );
};

export default LearnPillar;
