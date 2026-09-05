import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';

const sections = [
  {
    title: 'Information we collect',
    body: 'When you contact us or submit a form, we may collect your name, email address, phone number, company name, and the details of your inquiry. We also receive basic technical data such as browser type when you browse the site.',
  },
  {
    title: 'How we use information',
    body: 'We use your information to respond to inquiries, schedule conversations, improve our services, and communicate about SASTRAVA offerings you asked about. We do not sell personal information.',
  },
  {
    title: 'Sharing',
    body: 'We share information only with service providers that help us operate the website or communication tools, or when required by law. Any provider we use is expected to protect your data appropriately.',
  },
  {
    title: 'Retention',
    body: 'We keep inquiry records only as long as needed to handle your request and maintain ordinary business records, unless a longer period is required by law.',
  },
  {
    title: 'Your choices',
    body: 'You may request access, correction, or deletion of personal information we hold about you by emailing neeraj@sastrava.com. We will respond within a reasonable timeframe.',
  },
  {
    title: 'Contact',
    body: 'For privacy questions, contact SASTRAVA at neeraj@sastrava.com or +91 7981 576083.',
  },
];

export const Privacy = () => (
  <>
    <Navbar />
    <main id="main-content">
      <PageHero
        title="Privacy Policy"
        subtitle="Your data"
        description="How SASTRAVA collects, uses, and protects information you share with us."
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

export default Privacy;
