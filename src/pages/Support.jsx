import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';

const channels = [
  {
    title: 'WhatsApp',
    detail: 'Fastest for a short conversation about your challenge.',
    href: 'https://wa.me/917981576083?text=Hi%20SASTRAVA%2C%20I%20need%20support.',
    Icon: MessageCircle,
    external: true,
  },
  {
    title: 'Email',
    detail: 'neeraj@sastrava.com — best for detailed context and attachments.',
    href: 'mailto:neeraj@sastrava.com',
    Icon: Mail,
  },
  {
    title: 'Phone',
    detail: '+91 7981 576083 · Mon - Sat, 9:30 AM - 5:30 PM IST',
    href: 'tel:+917981576083',
    Icon: Phone,
  },
];

export const Support = () => (
  <>
    <Navbar />
    <main id="main-content">
      <PageHero
        title="Support"
        subtitle="We’re here"
        description="Reach the SASTRAVA team for project questions, partnership conversations, or website help."
      />
      <section className="relative py-16 md:py-24 bg-navy-950">
        <div className="relative mx-auto max-w-4xl px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {channels.map(({ title, detail, href, Icon, external }) => (
              <a
                key={title}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="rounded-2xl border border-white/10 bg-navy-900/50 p-6 transition-colors hover:border-gold-DEFAULT/35"
              >
                <Icon className="h-6 w-6 text-gold-light" aria-hidden="true" />
                <h2 className="mt-4 font-display text-xl font-bold text-offwhite">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-offwhite/70">{detail}</p>
              </a>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-peacock-light/25 bg-peacock-light/5 p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-offwhite">Prefer a structured form?</h2>
            <p className="mt-2 text-offwhite/75">
              Use the website contact form and we typically respond within 24 hours.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex min-h-12 items-center rounded-xl bg-[linear-gradient(135deg,#C9A84C_0%,#E6C200_30%,#FFF3B0_50%,#C9A84C_75%,#A67C00_100%)] px-6 font-bold text-navy-950"
            >
              Go to Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Support;
