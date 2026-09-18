import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, Camera, Lightbulb, Mail, MessageCircle, Phone, Search, Send, Share2, Sparkles, Sprout, Target } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import neonInnovationCycle from '../assets/sastrava/neon-innovation-cycle.webp';
import buildInnovateGrow from '../assets/sastrava/build-innovate-grow-together.webp';
import growthCycleLight from '../assets/sastrava/business-growth-cycle-light.webp';

const pillars = [
  { title: 'Business Consultant', strapline: 'Understand. Analyze. Advise.', description: 'We uncover the root problem, clarify the opportunity, and turn uncertainty into an executable strategy.', outcomes: ['Business diagnosis', 'Growth strategy', 'Digital roadmaps'], Icon: BriefcaseBusiness, tone: 'peacock' },
  { title: 'Innovator', strapline: 'Imagine. Create. Transform.', description: 'We combine software, digital marketing, learning, and media to transform good ideas into useful solutions.', outcomes: ['Software development', 'Digital learning', 'Content & media'], Icon: Lightbulb, tone: 'gold' },
  { title: 'Incubator', strapline: 'Build. Nurture. Scale.', description: 'We help new ventures and established organizations build momentum with the support needed to grow sustainably.', outcomes: ['Go-to-market support', 'Digital marketing', 'Scale-ready operations'], Icon: Sprout, tone: 'green' },
];

const services = [
  ['Software Development', 'Purpose-built digital products that solve the operational challenges holding your idea back.'],
  ['Digital Marketing', 'Insight-led positioning, campaigns, and growth systems built around the people you need to reach.'],
  ['Digital Learning', 'Learning experiences that turn capability gaps into confident, practical performance.'],
  ['Content & Media', 'Clear, memorable storytelling that gives your brand, solution, or movement a voice.'],
];

const reveal = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } };

export const Home = () => (
  <>
    <Navbar />
    <main id="main-content">
      <section className="relative isolate overflow-hidden bg-navy-950 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-peacock-animated bg-300% opacity-20 animate-gradient-flow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_45%,rgba(230,194,0,0.16),transparent_28%),radial-gradient(circle_at_18%_0%,rgba(20,184,166,0.18),transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy-950 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <motion.div {...reveal}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-DEFAULT/35 bg-gold-DEFAULT/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-light"><Sparkles className="h-4 w-4" aria-hidden="true" />From challenge to possibility</div>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.02] text-offwhite sm:text-6xl lg:text-7xl">We don’t just advise.<span className="mt-2 block bg-[linear-gradient(135deg,#C9A84C_0%,#E6C200_30%,#FFF3B0_50%,#C9A84C_75%,#A67C00_100%)] bg-clip-text text-transparent"> We build what moves you forward.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-offwhite/80 md:text-xl">SASTRAVA partners with startups, businesses, institutions, and ambitious organizations to find the root problem, create sophisticated solutions, and grow what matters.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#C9A84C_0%,#E6C200_30%,#FFF3B0_50%,#C9A84C_75%,#A67C00_100%)] px-7 font-bold text-navy-950 shadow-glow-gold transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-glow-gold-lg">Start with your challenge <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
              <a href="#growth-cycle" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-peacock-light/35 bg-white/5 px-7 font-semibold text-offwhite transition-colors duration-200 hover:border-peacock-light hover:bg-peacock-light/10">Explore the SASTRAVA cycle</a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-offwhite/70">
              <span className="inline-flex items-center gap-2"><Search className="h-4 w-4 text-peacock-light" aria-hidden="true" />Diagnose the real issue</span><span className="inline-flex items-center gap-2"><Lightbulb className="h-4 w-4 text-gold-light" aria-hidden="true" />Design the right response</span><span className="inline-flex items-center gap-2"><Target className="h-4 w-4 text-peacock-light" aria-hidden="true" />Build measurable momentum</span>
            </div>
          </motion.div>
          <motion.figure {...reveal} transition={{ ...reveal.transition, delay: 0.12 }} className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-5 rounded-[2rem] bg-peacock-light/15 blur-3xl" />
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] border border-peacock-light/30 bg-navy-900/70 p-2 shadow-[0_28px_80px_rgba(0,0,0,0.45)]"><img src={neonInnovationCycle} alt="SASTRAVA circular growth cycle connecting business consulting, innovation, and incubation" className="h-full w-full rounded-[1.55rem] object-contain" /></div>
            <figcaption className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-gold-DEFAULT/30 bg-navy-950/95 px-5 py-3 text-center text-sm font-medium text-offwhite shadow-elevation backdrop-blur-glass">One connected partner for strategy, creation, and sustainable growth.</figcaption>
          </motion.figure>
        </div>
      </section>

      <section id="growth-cycle" className="relative scroll-mt-24 overflow-hidden bg-navy-950 py-24 md:py-32">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-DEFAULT/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6"><motion.div {...reveal} className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-peacock-light">The SASTRAVA way</p><h2 className="mt-4 font-display text-4xl font-bold text-offwhite md:text-5xl">A growth cycle designed around your reality.</h2><p className="mt-5 text-lg leading-relaxed text-offwhite/70">Every engagement can begin at a different point. The outcome is the same: a sharper path from problem to progress.</p></motion.div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">{pillars.map(({ title, strapline, description, outcomes, Icon, tone }, index) => <motion.article key={title} {...reveal} transition={{ ...reveal.transition, delay: index * 0.08 }} className={`group relative overflow-hidden rounded-3xl border p-8 md:p-9 ${tone === 'gold' ? 'border-gold-DEFAULT/35 bg-gold-DEFAULT/5' : tone === 'green' ? 'border-peacock-green/35 bg-peacock-green/5' : 'border-peacock-light/35 bg-peacock-blue/10'}`}><div className={`mb-8 inline-flex rounded-2xl p-4 ${tone === 'gold' ? 'bg-gold-DEFAULT/15 text-gold-light' : 'bg-peacock-light/15 text-peacock-light'}`}><Icon className="h-8 w-8" strokeWidth={1.65} aria-hidden="true" /></div><p className={`text-sm font-semibold uppercase tracking-[0.15em] ${tone === 'gold' ? 'text-gold-light' : 'text-peacock-light'}`}>{strapline}</p><h3 className="mt-3 text-2xl font-bold text-offwhite">{title}</h3><p className="mt-4 leading-relaxed text-offwhite/75">{description}</p><ul className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm text-offwhite/80">{outcomes.map((outcome) => <li key={outcome} className="flex items-center gap-3"><span className={`h-1.5 w-1.5 rounded-full ${tone === 'gold' ? 'bg-gold-light' : 'bg-peacock-light'}`} />{outcome}</li>)}</ul></motion.article>)}</div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900 py-24 md:py-32"><div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-l from-gold-DEFAULT/10 to-transparent lg:block" /><div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div {...reveal} className="order-2 lg:order-1"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">Our solution toolkit</p><h2 className="mt-4 font-display text-4xl font-bold text-offwhite md:text-5xl">Your next move deserves more than a generic answer.</h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-offwhite/75">We bring together the capabilities needed to make the right response real—from a digital product and market narrative to learning, content, and practical growth support.</p><div className="mt-9 grid gap-4 sm:grid-cols-2">{services.map(([title, detail]) => <div key={title} className="rounded-2xl border border-white/10 bg-navy-950/60 p-5 transition-colors duration-200 hover:border-gold-DEFAULT/35"><h3 className="font-semibold text-offwhite">{title}</h3><p className="mt-2 text-sm leading-relaxed text-offwhite/65">{detail}</p></div>)}</div></motion.div>
        <motion.figure {...reveal} transition={{ ...reveal.transition, delay: 0.1 }} className="order-1 lg:order-2"><div className="flex aspect-[25/16] items-center justify-center overflow-hidden rounded-3xl border border-gold-DEFAULT/25 bg-navy-950 p-2 shadow-elevation-lg"><img src={buildInnovateGrow} alt="SASTRAVA builds, innovates, and grows together with clients" className="h-full w-full rounded-[1.3rem] object-contain" loading="lazy" /></div></motion.figure>
      </div></section>

      <section className="relative overflow-hidden bg-navy-950 py-24 md:py-32"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.12),transparent_38%)]" /><div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.86fr_1.14fr]"><motion.figure {...reveal} className="mx-auto max-w-md"><img src={growthCycleLight} alt="Business consultant, innovator, and incubator cycle" className="w-full rounded-3xl border border-gold-DEFAULT/20" loading="lazy" /></motion.figure><motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}><p className="text-sm font-semibold uppercase tracking-[0.2em] text-peacock-light">Built for the possible</p><h2 className="mt-4 max-w-2xl font-display text-4xl font-bold text-offwhite md:text-5xl">Whether you are starting, scaling, or reinventing—we meet you where you are.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-offwhite/75">Bring us a stalled project, an unmet market need, a bold concept, or a complex organization-wide challenge. We’ll help you see the root issue and co-create the next right move.</p><div className="mt-9 flex flex-wrap gap-3 text-sm font-medium">{['Startups', 'Growing businesses', 'Institutions', 'Organizations', 'New ventures'].map((audience) => <span key={audience} className="rounded-full border border-peacock-light/30 bg-peacock-light/10 px-4 py-2 text-offwhite">{audience}</span>)}</div></motion.div></div></section>

      <section className="bg-navy-900 py-20 md:py-24"><motion.div {...reveal} className="mx-auto max-w-5xl px-6 text-center"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-light">Let’s begin</p><h2 className="mt-4 font-display text-4xl font-bold text-offwhite md:text-5xl">Tell us what needs to move.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-offwhite/75">Choose the conversation that works best for you. We’ll start by understanding your context.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><a href="https://wa.me/917981576083?text=Hi%20SASTRAVA%2C%20I%20would%20like%20to%20discuss%20a%20business%20challenge." target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-peacock-light px-5 font-semibold text-navy-950 transition-transform duration-200 hover:-translate-y-0.5"><MessageCircle className="h-5 w-5" aria-hidden="true" /> WhatsApp</a><a href="mailto:neeraj@sastrava.com" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-gold-DEFAULT/35 bg-gold-DEFAULT/10 px-5 font-semibold text-gold-light transition-colors duration-200 hover:bg-gold-DEFAULT/20"><Mail className="h-5 w-5" aria-hidden="true" /> Email</a><a href="tel:+917981576083" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 font-semibold text-offwhite transition-colors duration-200 hover:border-peacock-light/50 hover:bg-peacock-light/10"><Phone className="h-5 w-5" aria-hidden="true" /> Call</a><Link to="/contact" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 font-semibold text-offwhite transition-colors duration-200 hover:border-peacock-light/50 hover:bg-peacock-light/10">Website form <ArrowRight className="h-5 w-5" aria-hidden="true" /></Link></div><div className="mt-6 flex flex-wrap justify-center gap-4 text-sm"><a href="https://www.linkedin.com/in/sastrava-aa3097429/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-offwhite/70 transition-colors hover:text-peacock-light"><Share2 className="h-4 w-4" aria-hidden="true" /> LinkedIn</a><a href="https://x.com/SASTRAVA_" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-offwhite/70 transition-colors hover:text-peacock-light"><Send className="h-4 w-4" aria-hidden="true" /> X / @SASTRAVA_</a><a href="https://www.instagram.com/sastrava_/" target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 text-offwhite/70 transition-colors hover:text-peacock-light"><Camera className="h-4 w-4" aria-hidden="true" /> Instagram / @sastrava_</a></div></motion.div></section>
    </main>
    <Footer />
  </>
);

export default Home;
