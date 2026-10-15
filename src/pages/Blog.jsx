import React from 'react';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { insights } from '../config/insights.js';

export const Blog = () => (
  <>
    <Navbar />
    <main id="main-content">
      <PageHero
        title="Insights for better business and technology decisions"
        subtitle="SASTRAVA Insights"
        description="Practical guides for founders and business teams working through digital growth, AI automation, cybersecurity, and early-stage decisions."
      />
      <section className="bg-navy-950 py-16 md:py-24">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peacock-light">Field notes and practical guides</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-offwhite md:text-4xl">Start with a useful question.</h2>
            <p className="mt-4 leading-relaxed text-offwhite/65">Each guide offers a starting framework, explains important trade-offs, and links to a related SASTRAVA capability. Advice is general; project recommendations depend on the situation and agreed scope.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {insights.map((article) => (
              <article id={article.slug} key={article.slug} className="scroll-mt-28 rounded-2xl border border-white/10 bg-navy-900/65 p-6 md:p-8">
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-gold-light"><Clock3 className="h-4 w-4" aria-hidden="true" />{article.readTime}</div>
                <h2 className="font-display text-2xl font-semibold leading-snug text-offwhite">{article.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-offwhite/70">{article.summary}</p>
                <div className="mt-6 space-y-5">
                  {article.sections.map((section) => (
                    <section key={section.heading}>
                      <h3 className="text-base font-semibold text-peacock-light">{section.heading}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-offwhite/65">{section.text}</p>
                    </section>
                  ))}
                </div>
                <Link to={article.serviceHref} className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-gold-light hover:text-peacock-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light">
                  {article.serviceLabel}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
          <p className="border-t border-white/10 pt-6 text-sm text-offwhite/55">For a recommendation tailored to your goals and constraints, <Link to="/contact" className="font-semibold text-gold-light hover:text-peacock-light">talk with SASTRAVA</Link>.</p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Blog;
