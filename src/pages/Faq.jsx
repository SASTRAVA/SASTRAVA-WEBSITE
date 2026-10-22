import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { faqs } from '../config/faqContent.js';
import { categorizedFaqs, faqCategories } from '../config/phase7Experiences.js';

const baseCategory = (question) => /course|training|internship|learning/i.test(question) ? 'Sastrava Edutech & Internships' : /security|audit|test|vapt/i.test(question) ? 'Cybersecurity & VAPT' : /software|app|AI|technology/i.test(question) ? 'Software & AI' : 'Consulting & Incubation';

export const Faq = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const entries = useMemo(() => [
    ...faqs.map((item) => ({ ...item, category: baseCategory(item.q) })),
    ...categorizedFaqs.map(([group, q, a]) => ({ q, a, category: group })),
  ], []);
  const filtered = entries.filter((item) => (category === 'All' || item.category === category) && `${item.q} ${item.a}`.toLowerCase().includes(search.trim().toLowerCase()));

  return (
  <>
    <Navbar />
    <main id="main-content">
      <PageHero
        title="Frequently Asked Questions"
        subtitle="FAQ"
        description="Quick answers about SASTRAVA, how we work, and how to begin."
      />
      <section className="relative py-16 md:py-24 bg-navy-950">
        <div className="mx-auto mb-8 max-w-4xl px-6">
          <label htmlFor="faq-search" className="block text-sm font-semibold text-offwhite">Search questions</label>
          <input id="faq-search" type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by service, topic, or question" className="mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-navy-900 px-4 text-offwhite placeholder:text-offwhite/45 focus:border-gold-light focus:outline-none focus:ring-2 focus:ring-gold-light/30" />
          <div role="group" aria-label="Filter FAQ category" className="mt-4 flex flex-wrap gap-2">
            {faqCategories.map((name) => <button type="button" key={name} aria-pressed={category === name} onClick={() => setCategory(name)} className={`min-h-11 rounded-full border px-4 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light ${category === name ? 'border-gold-light/50 bg-gold-light/10 text-gold-light' : 'border-white/10 text-offwhite/70 hover:border-peacock-light/50'}`}>{name}</button>)}
          </div>
        </div>
        <div className="relative mx-auto max-w-3xl space-y-4 px-6">
          <p aria-live="polite" className="sr-only">{filtered.length} questions found</p>
          {filtered.map((item) => (
            <details
              key={`${item.category}-${item.q}`}
              className="group rounded-2xl border border-white/10 bg-navy-900/50 p-6 open:border-gold-DEFAULT/30"
            >
              <summary className="cursor-pointer list-none font-display text-lg font-semibold text-offwhite marker:content-none">
                <span className="flex items-center justify-between gap-4">
                  {item.q}
                  <span className="text-gold-light transition-transform group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-offwhite/75">{item.a}</p>
            </details>
          ))}
          {filtered.length === 0 && <p className="rounded-xl border border-white/10 bg-navy-900 p-5 text-offwhite/70">No matching questions. Try another search or contact us.</p>}
          <p className="pt-6 text-offwhite/70">
            Still have a question?{' '}
            <Link to="/contact" className="font-semibold text-gold-light hover:underline">
              Contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
    <Footer />
  </>
  );
};

export default Faq;
