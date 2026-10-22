import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { AnalyticsPreferencesControl } from '../components/AnalyticsPreferencesControl.jsx';
import { googleMapsListingAddress } from '../config/businessProfile.js';

const sections = [
  {
    title: 'Who handles your information',
    body: 'SASTRAVA is the organization responsible for information submitted through this website. Our listed business contact location is 465/3, Ashramam Road, 5th Left Cross Street, 12th Ward, D.No. 12, Tadepalli, Andhra Pradesh 522501, India. This listing is provided as a business contact address, not as a representation about registered-office status.',
  },
  {
    title: 'Information collected and why',
    body: 'The contact form asks for first and last name, email, phone, company (optional), and message so the team can respond to your inquiry. A server-side submission timestamp and source page are also recorded with the inquiry. The form is not a marketing subscription. We do not sell submitted contact details.',
  },
  {
    title: 'Browser-based planning tools and sharing',
    body: 'The SEO/AEO/GEO checklist, AI and workflow estimate, and security checklist calculate their results in your browser; the site does not send your answers or calculated values to its contact API or analytics events. Choosing to download a report saves the result on your device. Choosing Share or WhatsApp can disclose the displayed result to the app or people you select; review the message before sending. Shared tool links contain only a generic completion marker, not your answers or score.',
  },
  {
    title: 'Optional analytics',
    body: 'Google Analytics 4 (measurement ID G-744LFGFCXQ) is initialized only after you choose Allow. If you reject, the tag is not loaded. With consent, the site may send page views and limited interaction events such as tool name or form type. It does not send form values, tool answers, tool scores, or message contents. Analytics cookies and Google processing are governed by Google’s terms and privacy information. You can change your choice at any time below or in the site footer.',
  },
  {
    title: 'Service providers and communication links',
    body: 'Contact submissions are processed by the website host and stored through the configured PostgreSQL service; a notification may be sent through the configured email delivery provider. Those providers process information to provide their services. Clicking WhatsApp, Google Maps, Instagram, email, or telephone links takes you to or invokes a separate provider; its own terms and privacy notice apply. We do not control those providers.',
  },
  {
    title: 'Retention and requests',
    body: 'Inquiry records are retained for follow-up and ordinary business recordkeeping. No automatic deletion period is currently promised. You may ask what contact information we hold, request correction, or ask us to erase it; we will review and respond, subject to records we need to retain for a lawful purpose. For privacy or grievance requests, email siri@sastrava.com and copy neeraj@sastrava.com, or call +91 7981 576083. We aim to acknowledge within two business days and provide an update within 15 business days; this is a service target, not a legal determination or waiver of applicable rights.',
  },
  {
    title: 'Data Principal rights and privacy contact',
    body: 'As applicable under the Digital Personal Data Protection Act, Data Principals may have rights relating to access to information about processing, correction and erasure, grievance redressal, and nomination. You may also withdraw optional analytics consent here at any time. Contact Siri Perumalla, COO, at siri@sastrava.com and copy neeraj@sastrava.com. This is SASTRAVA’s current privacy contact; we do not represent that a separate statutory Grievance Officer has been formally designated. Statutory rights and timelines apply from the relevant commencement dates and in the manner prescribed by law.',
  },
  {
    title: 'Children and learners',
    body: 'The public contact form is intended for adults and organizations. Do not submit sensitive personal information or information about a child through the general inquiry form. For an educational program involving learners under 18, an authorized institution or parent/guardian should contact us first so the appropriate arrangements can be discussed. The website does not use analytics for targeted advertising to children.',
  },
  {
    title: 'Security and international processing',
    body: 'The site uses HTTPS and server-side controls including input checks, a honeypot, origin checks, and a per-instance rate limit. Hosting, database, and email providers may process information in locations outside your state or country under their service arrangements. No online service can guarantee absolute security; report a concern through our security page.',
  },
  {
    title: 'India data protection information',
    body: 'SASTRAVA aims to handle personal information transparently and only for the purposes described here. The Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025 have phased commencement dates. As of this notice’s update, most substantive obligations are scheduled to commence later; this notice does not claim that every statutory provision is already in force or that SASTRAVA has received a formal statutory designation. Rights and obligations apply to the extent and from the dates provided by law. You may still make the privacy requests described above.',
  },
];

export const Privacy = () => (
  <>
    <Navbar />
    <main id="main-content">
      <PageHero
        title="Privacy & Data Protection Notice"
        subtitle="Your data"
        description="How SASTRAVA collects, uses, and protects information you share with us."
      />
      <section className="relative py-16 md:py-24 bg-navy-950">
        <div className="relative mx-auto max-w-3xl space-y-8 px-6">
          <p className="text-sm text-offwhite/60">Last updated: October 23, 2026</p>
          <p className="leading-relaxed text-offwhite/70"><strong className="text-offwhite">Digital Personal Data Protection Act, 2023 (DPDP Act).</strong> This notice explains the website’s current handling of information and practical request channels. Statutory commencement is phased; see the current <a className="text-peacock-light underline underline-offset-4" href="https://www.meity.gov.in/static/uploads/2025/11/c56ceae6c383460ca69577428d36828b.pdf" target="_blank" rel="noopener noreferrer">Government commencement notification</a>.</p>
          <div className="phase8-policy-control rounded-2xl border border-gold-light/20 bg-navy-900/75 p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-offwhite">Cookie &amp; Analytics Preferences</h2>
            <p className="mt-2 text-sm leading-relaxed text-offwhite/65">Withdraw or change optional analytics consent at any time.</p>
            <AnalyticsPreferencesControl className="mt-4" />
          </div>
          {sections.map((section, index) => (
            <article key={section.title} className="phase8-policy-card rounded-2xl border border-white/10 bg-navy-900/50 p-6 md:p-8" style={{ '--policy-index': index }}>
              <h2 className="font-display text-xl font-bold text-offwhite">{section.title}</h2>
              <p className="mt-3 leading-relaxed text-offwhite/75">{section.body}</p>
            </article>
          ))}
          <address className="not-italic text-xs text-offwhite/70">Listed location: {googleMapsListingAddress}</address>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Privacy;
