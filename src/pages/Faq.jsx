import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { faqs } from '../config/faqContent.js';

export const Faq = () => (
  <>
    <Navbar />
    <main id="main-content">
      <PageHero
        title="Frequently Asked Questions"
        subtitle="FAQ"
        description="Quick answers about SASTRAVA, how we work, and how to begin."
      />
      <section className="relative py-16 md:py-24 bg-navy-950">
        <div className="relative mx-auto max-w-3xl space-y-4 px-6">
          {faqs.map((item) => (
            <details
              key={item.q}
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

export default Faq;
