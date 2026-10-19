/**
 * Achievements Page
 * Awards, recognitions, and partnerships
 */

import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Award, ShieldCheck, Handshake } from 'lucide-react';

const Achievements = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <PageHero
          title="Achievements & Partnerships"
          subtitle="Evidence-led recognition and collaboration"
          description="We publish awards, certifications, and partner relationships only when they can be supported by current, verifiable evidence."
        />
        <section className="bg-gradient-to-b from-navy-950 to-navy-900 py-20">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
            {[
              { Icon: Award, title: 'Awards & recognition', text: 'No independently verifiable awards are currently published on this site. Any future listing will include the awarding organization, year, and a supporting reference.' },
              { Icon: ShieldCheck, title: 'Certifications', text: 'We do not claim organizational certifications on this page. Service work can be scoped against a client’s selected security or compliance criteria without implying SASTRAVA is certified.' },
              { Icon: Handshake, title: 'Partnerships', text: 'No formal partner relationships are currently represented here. Tools and platforms used in a project are not presented as endorsements or partnerships.' },
            ].map(({ Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-gold/20 bg-navy-900/80 p-7">
                <Icon className="mb-4 text-gold" aria-hidden="true" size={28} />
                <h2 className="mb-3 text-xl font-semibold text-white">{title}</h2>
                <p className="leading-relaxed text-offwhite/75">{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Achievements;
