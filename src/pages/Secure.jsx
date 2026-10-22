import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CloudCog, KeyRound, LockKeyhole, RefreshCw } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ServiceLegalNote } from '../components/sections/ServiceLegalNote';
import { PageHero } from '../components/sections/PageHero';
import { OrbitalHubShowcase } from '../components/interactive/OrbitalHubShowcase';
import { QuickDiagnostic } from '../components/interactive/QuickDiagnostic';
import { DeliverablesBento } from '../components/interactive/DeliverablesBento';
import { DownloadableResources } from '../components/sections/DownloadableResources.jsx';
import { SeoAnswers } from '../components/seo/SeoAnswers';
import { deliverables } from '../config/phase7Experiences';

const foundations = [
  { icon: KeyRound, title: 'Identity and secrets', description: 'Make access visible, require MFA for privileged accounts, keep secrets server-side, and plan safe rotation.' },
  { icon: CloudCog, title: 'Cloud configuration', description: 'Review environments, database policies, storage access, backups, and service permissions in context.' },
  { icon: LockKeyhole, title: 'Secure product defaults', description: 'Use input validation, least privilege, safe error handling, dependency review, and protected administrative flows.' },
  { icon: RefreshCw, title: 'Release and recovery', description: 'Keep preview and production settings separate, verify changes, and make recovery steps usable by the team.' },
];

export default function SecurePillar() {
  return <><Navbar/><main id="main-content">
    <PageHero title="Secure-by-design software & digital hygiene" subtitle="Practical security for founders and growing teams" description="Build security into product decisions, cloud configuration, account access, and releases. SASTRAVA helps founders and SMB teams strengthen everyday engineering practices and prepare for growth." />
    <OrbitalHubShowcase eyebrow="Founder & SMB digital hygiene" title="Build security into everyday product work." description="Select a practice area to see how product engineering, hosting, and operations work together." items={[
      { title: 'Identity & MFA', description: 'Protect administrator access with MFA, least privilege, secure recovery, and clear ownership.', focus: 'Access control & account hygiene' },
      { title: 'Secrets & environments', description: 'Keep credentials server-side, separate environments, and plan rotation and incident response.', focus: 'Secrets management' },
      { title: 'Cloud & Supabase', description: 'Review policies, database access, backups, and service boundaries around the product.', focus: 'Cloud configuration' },
      { title: 'Vercel & CI/CD', description: 'Use protected previews, build checks, security headers, and controlled production releases.', focus: 'Deployment hardening' },
      { title: 'Secure engineering', description: 'Add dependency review, input validation, threat-aware design, and verification after fixes.', focus: 'DevSecOps practice' },
    ]} />
    <section className="bg-navy-900 px-6 py-16 md:py-20" aria-labelledby="secure-foundations-title"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-peacock-light">Secure product foundations</p><h2 id="secure-foundations-title" className="mt-3 text-3xl font-bold text-white md:text-4xl">A manageable baseline for small engineering teams.</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{foundations.map(({icon:Icon,title,description},index)=><article key={title} className="rounded-2xl border border-white/10 bg-navy-950/70 p-6"><span className="grid h-11 w-11 place-items-center rounded-xl border border-gold-light/25 bg-gold-light/10 text-gold-light"><Icon className="h-5 w-5" aria-hidden="true" /></span><p className="mt-4 text-xs font-bold uppercase tracking-wider text-peacock-light">Practice {String(index+1).padStart(2,'0')}</p><h3 className="mt-2 text-xl font-semibold text-white">{title}</h3><p className="mt-2 leading-relaxed text-offwhite/70">{description}</p></article>)}</div></div></section>
    <QuickDiagnostic kind="secureHygiene" />
    <DownloadableResources templateIds={['security']} />
    <DeliverablesBento items={deliverables.secure} title="Secure-by-design outputs" />
    <p className="bg-navy-950 px-6 pb-8 text-center text-sm text-offwhite/55">Security guidance depends on the systems and authorization in scope. Read our <Link className="underline underline-offset-4 hover:text-gold-light" to="/terms">terms</Link> and <Link className="underline underline-offset-4 hover:text-gold-light" to="/privacy">privacy policy</Link>.</p>
    <section className="bg-navy-900 px-6 py-14"><div className="mx-auto max-w-5xl rounded-3xl border border-gold-light/20 bg-navy-950 p-7 text-center md:p-10"><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">Plan your next improvement</p><h2 className="mt-3 text-3xl font-bold text-white">Strengthen the product foundations before complexity grows.</h2><p className="mx-auto mt-3 max-w-2xl leading-relaxed text-offwhite/70">Discuss your current stack, access model, release process, and the areas where the team needs practical support.</p><Link to="/contact" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-gradient-gold px-5 font-bold text-navy-950">Discuss secure product engineering <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link><p className="mt-5 text-sm text-offwhite/65">For an authorized penetration test or enterprise security audit, visit <Link to="/cybersecurity" className="font-semibold text-peacock-light underline underline-offset-4">Cybersecurity services</Link>.</p></div></section>
    <SeoAnswers />
  <ServiceLegalNote />
      </main><Footer/></>;
}
