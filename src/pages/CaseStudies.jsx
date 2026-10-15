import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';

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
    </main>
    <Footer />
  </>
);

export default CaseStudies;
