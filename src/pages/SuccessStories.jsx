import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { OrbitalHubShowcase } from '../components/interactive/OrbitalHubShowcase';
import { Button } from '../components/ui/Button';
import { googleMapsReviewUrl } from '../config/businessProfile.js';
import { edutechInstagramUrl, allLearningDomains } from '../config/learningCatalog.js';

const SuccessStories = () => (
  <>
    <Navbar />
    <main>
      <PageHero
        title="Learning and engagement approach"
        subtitle="Practical learning shaped around real goals"
        description="SASTRAVA is updating its learning programs and documenting outcomes. We publish learner stories and placement results only when they are verified and shared with permission."
      />
      <section className="bg-navy-950 py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-bold text-white">What a learning engagement can include</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-offwhite/75">Workshops and mentoring are planned around the audience, starting level, intended outcomes, and available time. The format and practical exercises are agreed before a program begins.</p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-peacock-light/20">
            <OrbitalHubShowcase eyebrow="Learning engagement pathway" title="A learning journey built around the cohort." items={[
              { title: 'Set learning goals', description: 'Choose a focused topic and define what participants should understand or practice.', focus: 'Audience · starting level · learning outcomes' },
              { title: 'Practice with guidance', description: 'Use structured exercises, discussion, and project work matched to the group and agreed scope.', focus: 'Facilitated labs · project checkpoints · mentor review' },
              { title: 'Review next steps', description: 'Gather feedback, review progress, and identify useful follow-up learning or support.', focus: 'Feedback · learning review · next-step plan' },
            ]} />
          </div>
          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5 leading-relaxed text-offwhite/75"><h3 className="font-semibold text-white">Learn · Build · Transform</h3><p className="mt-2">The Sastrava Edutech topic catalog spans {allLearningDomains.length} learning and career areas. Programs may include college workshops, project-based internships, mentoring, and career-readiness activities; availability, mentors, documentation, and outcomes are confirmed for each engagement. Suhas Raj leads digital learning; leadership profiles are available on the About page.</p><p className="mt-3 flex flex-wrap gap-4"><a className="inline-flex min-h-11 items-center font-semibold text-peacock-light underline" href={edutechInstagramUrl} target="_blank" rel="noreferrer">Follow Sastrava Edutech on Instagram</a><a className="inline-flex min-h-11 items-center font-semibold text-peacock-light underline" href="/about">Meet the team</a></p></div>
          <p className="mt-6 text-sm leading-relaxed text-offwhite/70">If you have worked with SASTRAVA, you can <a href={googleMapsReviewUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-peacock-light underline underline-offset-4 hover:text-gold-light">read or leave an honest review on Google</a>.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button action="navigate" actionConfig={{ path: '/learn' }}>Explore digital learning</Button>
            <Button variant="secondary" action="navigate" actionConfig={{ path: '/contact' }}>Ask about a workshop</Button>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default SuccessStories;
