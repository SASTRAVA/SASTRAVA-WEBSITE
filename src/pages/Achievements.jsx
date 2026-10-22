/**
 * Achievements Page
 * Awards, recognitions, and partnerships
 */

import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { BookOpenCheck, MapPin, Wrench } from 'lucide-react';
import { edutechInstagramUrl, allLearningDomains } from '../config/learningCatalog.js';

const Achievements = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <PageHero
          title="Achievements & Partnerships"
          subtitle="Evidence-led recognition and collaboration"
          description="A snapshot of SASTRAVA’s operating footprint, public learning catalog, and browser-based planning resources."
        />
        <section className="bg-gradient-to-b from-navy-950 to-navy-900 py-20">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            {[
              { Icon: MapPin, title: 'Based in Tadepalli', text: 'SASTRAVA is based in Tadepalli, Andhra Pradesh, serving local organizations and teams across India.' },
              { Icon: BookOpenCheck, title: `${allLearningDomains.length} Edutech learning tracks`, text: 'Sastrava Edutech groups learning and career topics across technology, engineering, business, creative, and career-readiness areas.' },
              { Icon: Wrench, title: 'Three free browser tools', text: 'Explore public planning tools for SEO/AEO/GEO readiness, AI automation assumptions, and website security readiness.' },
            ].map(({ Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-gold/20 bg-navy-900/80 p-7">
                <Icon className="mb-4 text-gold" aria-hidden="true" size={28} />
                <h2 className="mb-3 text-xl font-semibold text-white">{title}</h2>
                <p className="leading-relaxed text-offwhite/75">{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-navy-900 pb-16 text-center"><a className="inline-flex min-h-11 items-center font-semibold text-peacock-light underline" href={edutechInstagramUrl} target="_blank" rel="noreferrer">Explore @sastrava_edutech</a><p className="mx-auto mt-4 max-w-2xl px-6 text-sm text-offwhite/65">Awards, certifications, client partnerships, and performance results are listed only when supporting evidence and publication permission are available.</p></section>
      </main>
      <Footer />
    </>
  );
};

export default Achievements;
