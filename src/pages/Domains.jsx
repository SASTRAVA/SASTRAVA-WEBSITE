import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { OrbitalHubShowcase } from '../components/interactive/OrbitalHubShowcase';
import { industryDomains, allLearningDomains, edutechInstagramUrl } from '../config/learningCatalog';

const applicationFor = (name) => {
  if (/marketing|communication|creative/i.test(name)) return 'Professional services, retail, and education';
  if (/business|finance|human resources|management/i.test(name)) return 'Startups, professional services, and growing teams';
  if (/cybersecurity|cloud|devops/i.test(name)) return 'Technology, healthcare, e-commerce, and institutional systems';
  if (/engineering|electronics|mechanical|electrical/i.test(name)) return 'Manufacturing, energy, infrastructure, and technical education';
  if (/career|certification|short-term|industry-specific/i.test(name)) return 'College cohorts, early-career learners, and workforce teams';
  return 'Product teams, startups, education, and digital services';
};

export default function DomainsPage() {
  const domains = allLearningDomains.map((domain) => ({
    title: domain.name,
    href: domain.href,
    description: `Domain ${domain.number} · Applied contexts: ${applicationFor(domain.name)}. Learning activities and project briefs are selected with the institution or learner group.`,
  }));

  return <><Navbar/><main id="main-content">
    <PageHero title="Industries & technology domains" subtitle="Practical expertise, shaped to your context" description="Explore the business environments SASTRAVA supports and the 22 Sastrava Edutech learning and career domains."/>
    <section className="bg-navy-950 px-6 py-16 md:py-20"><div className="mx-auto max-w-7xl">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-peacock-light">Industry & academic matrix</p>
      <h2 className="mt-3 text-3xl font-bold text-white">Connect the capability to its working context.</h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-offwhite/70">These are example contexts for discussion, not claims of active engagements or formal sector certifications. Scope is set around the systems, goals, and constraints of each organization.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{industryDomains.map((item, index) => <article key={item.title} className="group rounded-2xl border border-gold-light/20 bg-navy-900/80 p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-gold-light/45"><p className="text-xs font-bold uppercase tracking-wider text-gold-light">Context {String(index + 1).padStart(2, '0')}</p><h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3><p className="mt-3 leading-relaxed text-offwhite/70">{item.description}</p></article>)}</div>
    </div></section>
    <OrbitalHubShowcase eyebrow="Sastrava Edutech" title="22 learning domains, applied to real work." description="Select a domain to see representative industry and academic contexts. Learning options are planned with each cohort." items={domains}/>
    <section className="bg-navy-900 px-6 py-12"><div className="mx-auto max-w-7xl rounded-2xl border border-peacock-light/20 bg-navy-950 p-6 md:flex md:items-center md:justify-between md:gap-6"><div><h2 className="text-2xl font-bold text-white">Explore learning formats and updates.</h2><p className="mt-2 text-offwhite/70">Follow Sastrava Edutech for workshop and internship announcements.</p></div><a className="mt-4 inline-flex min-h-12 items-center rounded-xl bg-gradient-gold px-5 font-bold text-navy-950 md:mt-0" href={edutechInstagramUrl} target="_blank" rel="noreferrer">@sastrava_edutech</a></div></section>
  </main><Footer/></>;
}
