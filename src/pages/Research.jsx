import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { InteractiveBlueprintFilter } from '../components/interactive/InteractiveBlueprintFilter';
import { PreferredSourceBadge } from '../components/seo/PreferredSourceBadge.jsx';
import { researchBlueprints } from '../config/researchBlueprints.js';

const categories = ['All', ...new Set(researchBlueprints.map(({ category }) => category))];

export default function Research() {
  return <><Navbar/><main id="main-content">
    <PageHero title="Research & practical topic guides" subtitle="Explore emerging technologies and useful engineering practice" description="SASTRAVA publishes practical learning guides on AI, software, security, automation, and digital discovery. These resources explain approaches and questions; they are not peer-reviewed research claims." />
    <section className="bg-navy-950 px-6 pt-10"><div className="mx-auto max-w-7xl"><PreferredSourceBadge variant="callout" /></div></section>
    <section className="bg-navy-950 px-6 py-16 md:py-20"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-peacock-light">Interactive research library</p><h2 className="mt-3 text-3xl font-bold text-white">Open a topic to inspect its questions and verification path.</h2><p className="mt-3 max-w-3xl text-offwhite/70">Filter by discipline, then expand a topic for its problem framing, method outline, useful outputs, and review criteria.</p><div className="mt-7"><InteractiveBlueprintFilter items={researchBlueprints} categories={categories} /></div></div></section>
    <section className="bg-navy-900 px-6 py-14"><div className="mx-auto max-w-4xl text-center"><h2 className="text-2xl font-bold text-white">Need a scoped discussion?</h2><p className="mt-2 leading-relaxed text-offwhite/70">Ask SASTRAVA about applying a topic to your organization’s context and constraints.</p><Button className="mt-5" action="email" actionConfig={{ email: 'neeraj@sastrava.com,siri@sastrava.com', subject: 'SASTRAVA research inquiry' }}>Contact the team</Button></div></section>
  </main><Footer/></>;
}
