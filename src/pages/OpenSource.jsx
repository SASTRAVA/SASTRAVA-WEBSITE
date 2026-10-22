/**
 * Open Source Page
 * Open source projects and community contributions
 */

import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { InteractiveBlueprintFilter } from '../components/interactive/InteractiveBlueprintFilter';
import { downloadTemplates } from '../config/downloadTemplates.js';

const OpenSource = () => {
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

        <section className="bg-navy-950 px-6 py-16 md:py-20" aria-labelledby="community-library-title">
          <div className="mx-auto max-w-7xl">
            <h2 id="community-library-title" className="text-3xl font-bold text-white">Free tools and community resources</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-offwhite/70">These browser tools and worksheets are planning aids, not professional audits or forecasts. The website source repository is not listed here.</p>
            <div className="mt-8"><InteractiveBlueprintFilter filterLabel="Filter open resources" categories={['All', 'Browser tool', 'Worksheet']} items={[
              { category: 'Browser tool', title: 'SEO, AEO & GEO readiness checker', problem: 'Review discoverability and page clarity.', anatomy: 'Check crawlability, page structure, local information, and measurement.', deliverables: 'A browser-based readiness score and action checklist.', verification: 'Use the checklist to plan a review; results are not a ranking prediction.', href: '/tools/seo-aeo-checker', linkLabel: 'Open browser tool' },
              { category: 'Browser tool', title: 'AI automation ROI calculator', problem: 'Explore time and labor assumptions before a bounded pilot.', anatomy: 'Adjust workload and time estimates, then compare scenarios.', deliverables: 'An illustrative estimate based on your inputs.', verification: 'Validate assumptions against observed work and actual costs.', href: '/tools/ai-roi-calculator', linkLabel: 'Open browser tool' },
              { category: 'Browser tool', title: 'Website security checklist', problem: 'Review foundational security readiness and next actions.', anatomy: 'Check account access, patching, backups, permissions, forms, secrets, and response.', deliverables: 'A local checklist and prioritized reflection prompts.', verification: 'This tool does not scan or test a website.', href: '/tools/security-checklist', linkLabel: 'Open browser tool' },
              ...downloadTemplates.map((item) => ({ category: 'Worksheet', title: item.title, problem: item.summary, anatomy: 'Download the worksheet and review its prompts with the relevant system or business owner.', deliverables: `Text worksheet · ${item.filename}`, verification: 'Adapt actions to your context and validate decisions with the appropriate owner.', href: item.href, download: item.filename, linkLabel: 'Download worksheet' })),
            ]} /></div>
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
