import React from 'react';
import { Mail, ShieldCheck } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export default function Security() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-navy-950 py-24">
        <section className="mx-auto max-w-3xl px-6">
          <ShieldCheck className="h-10 w-10 text-gold-light" aria-hidden="true" />
          <h1 className="mt-5 text-4xl font-bold text-offwhite">Security at SASTRAVA</h1>
          <p className="mt-5 text-lg leading-relaxed text-offwhite/75">We welcome responsible reports of potential security issues affecting our public website.</p>
          <div className="mt-10 rounded-2xl border border-gold-DEFAULT/25 bg-navy-900 p-6">
            <h2 className="text-xl font-semibold text-offwhite">Report a concern</h2>
            <p className="mt-3 text-offwhite/75">Please include the affected URL, a concise description, and safe reproduction steps. Do not include passwords, personal data, or exploit payloads.</p>
            <a className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-gold-DEFAULT px-4 font-semibold text-navy-950" href="mailto:neeraj@sastrava.com?subject=Security%20report%20for%20sastrava.com">
              <Mail className="h-4 w-4" aria-hidden="true" /> Report a security concern
            </a>
          </div>
          <h2 className="mt-10 text-xl font-semibold text-offwhite">Safe-harbour boundaries</h2>
          <p className="mt-3 leading-relaxed text-offwhite/75">Do not access other users’ data, disrupt services, use automated high-volume testing, or attempt authentication attacks. We may request additional details before validating a report.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}