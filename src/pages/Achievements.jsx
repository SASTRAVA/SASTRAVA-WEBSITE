/**
 * Achievements Page
 * Awards, recognitions, and partnerships
 */

import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { OrbitalHubShowcase } from '../components/interactive/OrbitalHubShowcase';
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
        <OrbitalHubShowcase eyebrow="SASTRAVA at a glance" title="Explore the work and public resources." items={[
          { title: 'Based in Tadepalli', description: 'SASTRAVA is based in Tadepalli, Andhra Pradesh, serving local organizations and teams across India.', focus: 'Tadepalli · Andhra Pradesh · India' },
          { title: `${allLearningDomains.length} Edutech learning tracks`, description: 'Sastrava Edutech groups learning and career topics across technology, engineering, business, creative, and career-readiness areas.', focus: 'See the domain catalog', href: '/domains' },
          { title: 'Three free browser tools', description: 'Explore planning tools for SEO/AEO/GEO readiness, automation assumptions, and website security readiness.', focus: 'Open the tools collection', href: '/open-source' },
        ]} />
        <section className="bg-navy-900 pb-16 text-center"><a className="inline-flex min-h-11 items-center font-semibold text-peacock-light underline" href={edutechInstagramUrl} target="_blank" rel="noreferrer">Explore @sastrava_edutech</a><p className="mx-auto mt-4 max-w-2xl px-6 text-sm text-offwhite/65">Awards, certifications, client partnerships, and performance results are listed only when supporting evidence and publication permission are available.</p></section>
      </main>
      <Footer />
    </>
  );
};

export default Achievements;
