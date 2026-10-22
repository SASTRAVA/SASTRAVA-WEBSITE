import React from 'react';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { insights } from '../config/insights.js';
import { downloadTemplates } from '../config/downloadTemplates.js';
import { InteractiveBlueprintFilter } from '../components/interactive/InteractiveBlueprintFilter';
import { trackEvent } from '../services/conversionTracking.js';

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
          <details className="rounded-2xl border border-peacock-light/20 bg-peacock-light/5 p-5 text-offwhite/75">
            <summary className="min-h-11 cursor-pointer font-semibold text-peacock-light">స్థానిక వ్యాపారాల కోసం తెలుగు సారాంశం</summary>
            <p lang="te" className="mt-3 leading-relaxed">స్థానిక శోధనలో కనిపించడానికి వ్యాపార పేరు, చిరునామా, ఫోన్ వివరాలను వెబ్‌సైట్ మరియు అధికారిక వ్యాపార ప్రొఫైల్‌లో ఒకేలా ఉంచండి. ప్రతి సేవా పేజీ వినియోగదారుల ప్రశ్నలకు స్పష్టంగా సమాధానం ఇవ్వాలి. SEO/AEO/GEO ఫలితాలకు హామీ లేదు; Search Consoleలో కవరేజ్ మరియు సంబంధిత సంప్రదింపు చర్యలను కొలవండి.</p>
          </details>
          <section aria-labelledby="downloadable-guides-heading" className="rounded-2xl border border-gold-DEFAULT/20 bg-navy-900/65 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Free resources</p>
            <h2 id="downloadable-guides-heading" className="mt-2 font-display text-2xl font-bold text-offwhite md:text-3xl">Downloadable checklists &amp; frameworks</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-offwhite/65">Use these practical worksheets to organize a local-search review, prepare an authorized security assessment, or evaluate a workflow pilot. Downloads are text files and do not submit your information.</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {downloadTemplates.map((template) => (
                <article key={template.filename} className="flex flex-col rounded-xl border border-white/10 bg-navy-950/70 p-5">
                  <h3 className="font-semibold leading-snug text-offwhite">{template.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-offwhite/65">{template.summary}</p>
                  <a href={template.href} download={template.filename} onClick={() => trackEvent('template_downloaded', { template_name: template.filename, source_page: '/blog' })} className="mt-5 inline-flex min-h-11 items-center font-semibold text-peacock-light underline underline-offset-4 hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light">Download free checklist</a>
                </article>
              ))}
            </div>
          </section>
          <section aria-labelledby="insights-library-title" className="rounded-2xl border border-peacock-light/20 bg-navy-900/55 p-5 md:p-7">
            <h2 id="insights-library-title" className="sr-only">Filter SASTRAVA field guides</h2>
            <InteractiveBlueprintFilter filterLabel="Filter SASTRAVA field guides" categories={['All', 'AI & automation', 'Cybersecurity', 'Digital growth', 'Business discovery']} items={insights.map((article, index) => ({
              category: ['AI & automation', 'Cybersecurity', 'Digital growth', 'Business discovery'][index],
              title: article.title,
              problem: article.summary,
              anatomy: article.sections.map((section) => section.heading).join(' → '),
              deliverables: `${article.readTime} · practical guide`,
              verification: 'Use as general information and adapt decisions to your evidence, budget, and operating context.',
              href: `/blog#${article.slug}`,
              linkLabel: 'Read this guide',
            }))} />
          </section>
          <p className="border-t border-white/10 pt-6 text-sm text-offwhite/55">For a recommendation tailored to your goals and constraints, <Link to="/contact" className="font-semibold text-gold-light hover:text-peacock-light">talk with SASTRAVA</Link>.</p>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Blog;
