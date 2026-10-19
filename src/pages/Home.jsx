import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  SearchCheck,
  ShieldCheck,
  MessageCircle,
  Calculator,
  ClipboardCheck,
  Globe2,
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import innovationCycle from '../assets/sastrava/neon-innovation-cycle.webp';
import { homeCapabilities } from '../config/homeCapabilities.js';
import { googleMapsListingUrl } from '../config/businessProfile.js';

const iconByName = { BriefcaseBusiness, Bot, Code2, GraduationCap, SearchCheck, ShieldCheck };

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

export const Home = () => (
  <>
    <Navbar />
    <main id="main-content">
      <section className="relative isolate overflow-hidden bg-navy-950 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_36%,rgba(20,184,166,0.16),transparent_36%),radial-gradient(ellipse_at_20%_5%,rgba(230,194,0,0.12),transparent_34%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">
              <span className="h-px w-8 bg-gold-light" /> Strategy · Innovation · Delivery
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.08] text-offwhite sm:text-6xl lg:text-[4.4rem]">
              Business consulting, AI &amp; digital growth in <span className="bg-[linear-gradient(135deg,#C9A84C_0%,#E6C200_35%,#FFF3B0_58%,#C9A84C_100%)] bg-clip-text text-transparent">Tadepalli and across India.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-offwhite/75 md:text-xl">
              SASTRAVA is a business consultant, innovator, and incubation partner based in Tadepalli, Guntur District, near Vijayawada and Amaravati. We help founders and organizations connect practical strategy with AI automation, software, security, digital marketing, and learning.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#E6C200] px-4 text-center font-bold text-navy-950 shadow-glow-gold transition-colors hover:-translate-y-0.5 hover:bg-[#FFF3B0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light sm:w-auto sm:px-6">
                Talk through your next move <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a href="#capabilities" className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border border-peacock-light/30 bg-white/[0.03] px-4 text-center font-semibold text-offwhite transition-colors hover:border-peacock-light/70 hover:bg-peacock-light/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peacock-light sm:w-auto sm:px-6">
                See how we can help <ArrowDownRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-sm text-offwhite/65">
              <a href={googleMapsListingUrl} target="_blank" rel="noopener noreferrer" className="max-w-full break-words underline decoration-peacock-light/50 underline-offset-4 transition-colors hover:text-peacock-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-peacock-light">Tadepalli, Guntur District · Near Vijayawada &amp; Amaravati · Find us on Google Maps</a>
              <span>Local collaboration and delivery across India</span>
            </div>
          </div>

          <figure className="relative mx-auto w-full max-w-[590px] lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-6 rounded-[2rem] bg-peacock-light/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-peacock-light/25 bg-[#061b29] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.48)]">
              <img src={innovationCycle} alt="SASTRAVA’s strategy, innovation, and growth cycle" className="aspect-square w-full rounded-[1.25rem] object-contain" width="768" height="768" fetchPriority="high" />
              <figcaption className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-navy-950/90 px-4 py-3 backdrop-blur-md">
                <span className="text-sm font-medium text-offwhite">From insight to implementation</span>
                <span className="text-xs uppercase tracking-[0.16em] text-gold-light">One connected team</span>
              </figcaption>
            </div>
            <div className="absolute -left-5 top-12 hidden items-center gap-3 rounded-xl border border-gold-DEFAULT/25 bg-navy-900/95 px-4 py-3 shadow-elevation backdrop-blur lg:flex">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold-DEFAULT/15 text-gold-light"><BriefcaseBusiness className="h-4 w-4" aria-hidden="true" /></span>
              <span><span className="block text-xs uppercase tracking-wider text-offwhite/50">Start with</span><span className="text-sm font-semibold text-offwhite">The real challenge</span></span>
            </div>
          </figure>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-24 bg-navy-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...reveal} className="mb-12 grid gap-6 md:grid-cols-[1fr_0.7fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-peacock-light">What we do</p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-offwhite md:text-5xl">Business consulting, digital learning and technology for growth.</h2>
            </div>
            <p className="max-w-xl leading-relaxed text-offwhite/65 md:justify-self-end">A focused team across business consulting, digital learning, digital products, automation, cybersecurity, and marketing—brought together around the outcome you need.</p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {homeCapabilities.map(({ number, title, description, href, label, icon, tone }, index) => {
              const Icon = iconByName[icon];
              return (
              <motion.article key={title} {...reveal} transition={{ ...reveal.transition, delay: (index % 3) * 0.06 }} className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-950/75 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-peacock-light/35 hover:shadow-[0_18px_45px_rgba(0,0,0,0.24)] md:p-7">
                <div className="mb-8 flex items-start justify-between">
                  <span className={`grid h-12 w-12 place-items-center rounded-xl border ${tone === 'gold' ? 'border-gold-DEFAULT/20 bg-gold-DEFAULT/10 text-gold-light' : 'border-peacock-light/20 bg-peacock-light/10 text-peacock-light'}`}><Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" /></span>
                  <span className="font-display text-sm tracking-[0.16em] text-offwhite/65">{number}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-offwhite md:text-2xl">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-offwhite/65">{description}</p>
                <Link to={href} aria-label={label} className="mt-6 inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-gold-light transition-colors hover:text-peacock-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light">
              {label} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-20 md:py-28">
        <div className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full bg-gold-DEFAULT/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div {...reveal}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">How we work</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-bold leading-tight text-offwhite md:text-5xl">Good work starts with understanding.</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-offwhite/65">We build around your context, whether you need an outside perspective, a working digital product, or an experienced partner to make change happen.</p>
            <Link to="/services" className="mt-8 inline-flex min-h-12 items-center gap-2 font-semibold text-peacock-light hover:text-gold-light">Explore our services <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ['01', 'Listen', 'Understand the people, process, and opportunity behind the brief.'],
              ['02', 'Shape', 'Agree the priorities, scope, and practical route forward.'],
              ['03', 'Deliver', 'Build, learn, and refine with the people who will use it.'],
            ].map(([number, title, text], index) => (
              <motion.article key={number} {...reveal} transition={{ ...reveal.transition, delay: index * 0.08 }} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
                <span className="font-display text-xs tracking-[0.2em] text-gold-light">{number}</span>
                <h3 className="mt-6 text-xl font-semibold text-offwhite">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-offwhite/60">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 md:py-24" aria-labelledby="free-tools-heading">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div {...reveal} className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-peacock-light">Free planning tools</p>
            <h2 id="free-tools-heading" className="mt-4 font-display text-3xl font-bold text-offwhite md:text-4xl">Start with a clearer view of the opportunity.</h2>
            <p className="mt-4 leading-relaxed text-offwhite/65">Try a quick self-check or estimate before you decide what to improve. These browser-based tools do not submit your answers to SASTRAVA.</p>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { href: '/tools/seo-aeo-checker', title: 'SEO, AEO & GEO readiness', text: 'Review crawlability, page clarity, local signals, and measurement.', Icon: Globe2 },
              { href: '/tools/ai-roi-calculator', title: 'Automation ROI estimate', text: 'Model possible time returned from a recurring team workflow.', Icon: Calculator },
              { href: '/tools/security-checklist', title: 'Website security checklist', text: 'Review foundational controls and identify areas to follow up.', Icon: ClipboardCheck },
            ].map(({ href, title, text, Icon }) => (
              <Link key={href} to={href} className="group flex min-h-48 flex-col rounded-2xl border border-white/10 bg-navy-900/75 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold-DEFAULT/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light">
                <Icon className="h-6 w-6 text-gold-light" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-semibold text-offwhite">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-offwhite/65">{text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-peacock-light">Open tool <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 py-20 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_110%,rgba(20,184,166,0.13),transparent_48%)]" />
        <motion.div {...reveal} className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-peacock-light/25 bg-peacock-light/10 text-peacock-light"><MessageCircle className="h-5 w-5" aria-hidden="true" /></span>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">Start with a conversation</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-offwhite md:text-5xl">What are you working toward?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-offwhite/65">Tell us what is changing, what is getting in the way, or what you want to create. We’ll help you find a useful next step.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex min-h-14 items-center gap-2 rounded-xl bg-[#E6C200] px-6 font-bold text-navy-950 shadow-glow-gold transition-colors hover:-translate-y-0.5 hover:bg-[#FFF3B0]">Contact SASTRAVA <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <a href="https://wa.me/917981576083?text=Hi%20SASTRAVA%2C%20I%20would%20like%20to%20discuss%20a%20business%20challenge." target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center gap-2 rounded-xl border border-peacock-light/30 bg-peacock-light/10 px-6 font-semibold text-peacock-light transition-colors hover:bg-peacock-light/20">Message on WhatsApp</a>
          </div>
        </motion.div>
      </section>
    </main>
    <Footer />
  </>
);

export default Home;
