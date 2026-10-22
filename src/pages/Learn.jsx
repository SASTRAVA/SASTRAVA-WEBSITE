/**
 * Learn Pillar Page
 * Education, courses, training, and skill development
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ServiceLegalNote } from '../components/sections/ServiceLegalNote';
import { PageHero } from '../components/sections/PageHero';
import { ECOSYSTEM_PILLARS } from '../config/businessModel';
import * as Icons from 'lucide-react';
import { Button } from '../components/ui/Button';
import { contrastTextColor } from '../utils/contrastText';
import { SeoAnswers } from '../components/seo/SeoAnswers';
import { edutechInstagramUrl, learningPrograms, technologyExplainers, technologyHistoryTopics } from '../config/learningCatalog';
import { OrbitalHubShowcase } from '../components/interactive/OrbitalHubShowcase';
import { LearningTrackSwitcher } from '../components/interactive/LearningTrackSwitcher';
import { DeliverablesBento } from '../components/interactive/DeliverablesBento';
import { deliverables } from '../config/phase7Experiences';
import { allLearningDomains } from '../config/learningCatalog';
import { learningRoles } from '../config/phase7Experiences';

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

            <DeliverablesBento items={deliverables.learn} title="What learners can take away" />

            <OrbitalHubShowcase eyebrow="Seven learning formats" title="Choose a practical way to learn." description="Explore course, workshop, internship, mentoring, and career-readiness formats. Availability and scope are confirmed with each learner group." items={learningPrograms.map((program) => ({ title: program.service, description: program.description, focus: program.deliverables.join(' · '), href: '/contact' }))} />
            <section className="mt-20" aria-labelledby="learning-domains-title">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-semibold uppercase tracking-wide text-[#725300]">Sastrava Edutech</p><h2 id="learning-domains-title" className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">22 learning and career domains</h2><p className="mt-2 max-w-3xl text-gray-600 dark:text-gray-300">Explore the topic areas and formats that can be shaped into workshops, mentoring, or project-based learning.</p></div><a className="inline-flex min-h-11 items-center rounded-lg border border-[#725300] px-4 font-semibold text-[#725300] hover:bg-gold-50 dark:text-yellow-300" href={edutechInstagramUrl} target="_blank" rel="noreferrer">Follow @sastrava_edutech</a></div>
              <OrbitalHubShowcase eyebrow="Sastrava Edutech · 22 domains" title="Explore a learning domain." description="Choose a topic to see where guided workshops, project practice, or mentoring could begin. Program scope and availability are confirmed with each group." items={allLearningDomains.map((domain) => ({ title: domain.name, href: domain.href, description: `Domain ${domain.number} can be explored through structured concepts, hands-on activities, and a project path shaped for the learner group.` }))} />
              <LearningTrackSwitcher roles={learningRoles} />
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
      <ServiceLegalNote />
      </main>
      <Footer />
    </>
  );
};

export default LearnPillar;
