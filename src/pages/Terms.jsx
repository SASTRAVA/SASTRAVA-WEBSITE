import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';

const sections = [
  {
    title: 'Using this website',
    body: 'Use this website lawfully and do not disrupt the service, misuse contact channels, bypass access controls, or collect information in a way that violates applicable law. You are responsible for reviewing any information before relying on it.',
  },
  {
    title: 'Information and free planning tools',
    body: 'Website content, guides, checklists, and calculators are general information and educational planning aids. Calculations use the assumptions entered by the visitor; they are not forecasts, audits, legal advice, or a promise of savings, security, search ranking, or business results. Verify inputs and seek appropriately qualified advice for consequential decisions.',
  },
  {
    title: 'Services and proposals',
    body: 'Service pages describe possible capabilities. Scope, responsibilities, fees, schedule, deliverables, and acceptance criteria are established only in a written proposal or agreement accepted by the parties. No project begins solely because a visitor submitted an inquiry.',
  },
  {
    title: 'Security testing requires written authorization',
    body: 'Do not scan, test, probe, or attempt to access any system through a SASTRAVA engagement until the system owner has provided written authorization and the parties have agreed the target assets, methods, test window, exclusions, contacts, and rules of engagement. Unauthorized activity is prohibited. Findings and patch or retest work are limited to the approved scope.',
  },
  {
    title: 'Digital learning and internships',
    body: 'Learning content and programs are intended to support practical skill development. Completion, participation, or project work does not guarantee a job, internship placement, certification, income, or admission. Program-specific eligibility, fees, schedule, supervision, safeguarding, and completion terms will be provided separately where applicable.',
  },
  {
    title: 'Intellectual property',
    body: 'Brand names, logos, page copy, imagery, and design on this site belong to SASTRAVA or its licensors. You may not copy or reuse them for commercial purposes without prior written permission.',
  },
  {
    title: 'Third-party services and links',
    body: 'Links to external services are provided for convenience. SASTRAVA does not control third-party content, availability, terms, or privacy practices. A third party’s terms govern your use of its service.',
  },
  {
    title: 'Availability and no warranty',
    body: 'We aim to keep the website useful and current but do not guarantee uninterrupted availability, completeness, or freedom from errors. Content may change without notice. Mandatory rights under applicable law are not excluded by this notice.',
  },
  {
    title: 'Limitation of liability',
    body: 'To the fullest extent permitted by law, SASTRAVA is not liable for indirect or consequential losses arising from use of this website. Engagement-specific liability is governed by the applicable contract.',
  },
  {
    title: 'Governing law and contact',
    body: 'These website terms are governed by the laws of India. Subject to any mandatory jurisdiction rules, courts with competent jurisdiction in Guntur or Vijayawada, Andhra Pradesh may hear disputes. Contact neeraj@sastrava.com or siri@sastrava.com with questions. A separate written engagement agreement may set additional terms.',
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
          <p className="text-sm text-offwhite/60">Last updated: October 23, 2026</p>
          {sections.map((section, index) => (
            <article key={section.title} className="phase8-policy-card rounded-2xl border border-white/10 bg-navy-900/50 p-6 md:p-8" style={{ '--policy-index': index }}>
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
