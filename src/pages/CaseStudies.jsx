import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { DeliveryShowcase } from '../components/sections/DeliveryShowcase';
import { InteractiveBlueprintFilter } from '../components/interactive/InteractiveBlueprintFilter';
const caseReviewBlueprints = [
  { category: 'Planning', title: 'Evidence and scope record', problem: 'Before work begins, both teams need a shared record of goals, ownership, constraints, and approved assets.', anatomy: 'Stakeholder questions → asset and data inventory → assumptions and exclusions → signed scope.', deliverables: 'Scope summary, responsibility map, assumptions, and review checkpoints.', verification: 'Confirm the scope with the accountable owner before delivery work starts.' },
  { category: 'Delivery', title: 'Reviewable delivery checkpoints', problem: 'A project needs visible progress and a clear way to raise issues before final handover.', anatomy: 'Milestone plan → working review → feedback log → agreed change or acceptance.', deliverables: 'Review notes, acceptance criteria, change record, and handover materials.', verification: 'Check each agreed output against documented acceptance criteria.' },
  { category: 'Verification', title: 'Outcome and next-step review', problem: 'Teams need to understand what changed and what evidence supports their next decision.', anatomy: 'Baseline → agreed measure → post-delivery evidence → limitations and next decision.', deliverables: 'Outcome notes, open issues, owner actions, and a follow-up plan.', verification: 'Report only evidence gathered for the agreed measure; avoid unsupported outcome claims.' },
];

const CaseStudies = () => (
  <>
    <Navbar />
    <main>
      <PageHero
        title="Project capabilities"
        subtitle="A clear view of how SASTRAVA approaches client work"
        description="We publish named case studies, metrics, and testimonials only after the work is documented and the client has approved publication. Until then, explore our services and team capabilities or discuss a project directly."
      />
      <section className="bg-navy-950 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-white">How an engagement works</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ['Understand', 'We clarify the users, business goal, constraints, current systems, and evidence available.'],
              ['Agree the scope', 'We document deliverables, responsibilities, assumptions, success measures, and review points before work begins.'],
              ['Deliver and review', 'Work is shared in reviewable steps. Outcomes are evaluated against the agreed measures and next actions.'],
            ].map(([title, description], index) => (
              <article key={title} className="rounded-2xl border border-gold/20 bg-navy-900 p-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-gold">Step {index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 leading-relaxed text-offwhite/75">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-peacock/25 bg-peacock/5 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white">Evidence before claims</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-offwhite/75">Project names, client quotes, certifications, and performance metrics need supporting records and permission to publish. If you are considering a similar engagement, we can explain the proposed scope and what will be measured.</p>
            <Button className="mt-6" action="navigate" actionConfig={{ path: '/contact' }}>Discuss a project</Button>
          </div>
        </div>
      </section>
      <DeliveryShowcase />
      <section className="bg-navy-900 px-6 py-16 md:py-20" aria-labelledby="case-blueprints-title"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-peacock-light">Split-stage blueprints</p><h2 id="case-blueprints-title" className="mt-3 text-3xl font-bold text-white">Inspect example project anatomy.</h2><p className="mt-3 max-w-3xl text-offwhite/70">These patterns help explain scope and verification. They are representative approaches, not published client case results.</p><div className="mt-7"><InteractiveBlueprintFilter items={caseReviewBlueprints} categories={['All', 'Planning', 'Delivery', 'Verification']} /></div></div></section>
    </main>
    <Footer />
  </>
);

export default CaseStudies;
