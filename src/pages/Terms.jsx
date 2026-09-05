import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';

const sections = [
  {
    title: 'Using this website',
    body: 'By accessing sastrava.com content on this site, you agree to use it lawfully and not to attempt to disrupt, scrape abusively, or misuse forms, login areas, or contact channels.',
  },
  {
    title: 'Services and proposals',
    body: 'Information on this website describes SASTRAVA capabilities at a high level. Formal engagements, fees, timelines, and deliverables are confirmed only in a written proposal or agreement.',
  },
  {
    title: 'Intellectual property',
    body: 'Brand names, logos, page copy, imagery, and design on this site belong to SASTRAVA or its licensors. You may not copy or reuse them for commercial purposes without prior written permission.',
  },
  {
    title: 'No warranty',
    body: 'Website content is provided for general information. While we aim for accuracy, we do not guarantee that every page is complete, current, or free of errors.',
  },
  {
    title: 'Limitation of liability',
    body: 'To the fullest extent permitted by law, SASTRAVA is not liable for indirect or consequential losses arising from use of this website. Engagement-specific liability is governed by the applicable contract.',
  },
  {
    title: 'Contact',
    body: 'Questions about these terms can be sent to neeraj@sastrava.com.',
  },
];

export const Terms = () => (
  <>
    <Navbar />
    <main id="main-content">
      <PageHero
        title="Terms of Service"
        subtitle="Website terms"
        description="The basic terms that apply when you browse this site or inquire about SASTRAVA services."
      />
      <section className="relative py-16 md:py-24 bg-navy-950">
        <div className="relative mx-auto max-w-3xl space-y-8 px-6">
          <p className="text-sm text-offwhite/60">Last updated: September 1, 2026</p>
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-white/10 bg-navy-900/50 p-6 md:p-8">
              <h2 className="font-display text-xl font-bold text-offwhite">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-offwhite/75">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Terms;
