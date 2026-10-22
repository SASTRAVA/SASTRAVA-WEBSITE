import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  GraduationCap,
  Megaphone,
  Rocket,
  ShieldCheck,
  Star,
  Target,
} from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { teamProfiles } from '../config/teamProfiles.js';
import { googleMapsListingUrl } from '../config/businessProfile.js';
import { OrbitalHubShowcase } from '../components/interactive/OrbitalHubShowcase';

const ABOUT_SECTIONS = [
  { id: 'our-story', label: 'Our story' },
  { id: 'our-purpose', label: 'Our purpose' },
  { id: 'our-work', label: 'Our work' },
  { id: 'our-team', label: 'Our team' },
  { id: 'our-evolution', label: 'Our evolution' },
];

const PURPOSE_CARDS = [
  {
    title: 'Our mission',
    description: 'Help businesses, founders, and institutions turn complex challenges into well-scoped strategy and useful outcomes through consulting, technology, security, digital growth, and learning.',
    Icon: Target,
    tone: 'gold',
  },
  {
    title: 'Our vision',
    description: 'Build an ecosystem where organizations can develop ideas responsibly, apply technology with purpose, and grow with practical expertise.',
    Icon: Rocket,
    tone: 'teal',
  },
  {
    title: 'Our motto',
    description: 'Clarity to plan. Capability to build. Confidence to grow.',
    Icon: Star,
    tone: 'gold',
  },
];

const WORK_AREAS = [
  {
    title: 'Business consulting & incubation',
    description: 'Clarify priorities, explore a business idea, and shape a considered path toward market.',
    Icon: BriefcaseBusiness,
    tone: 'gold',
  },
  {
    title: 'Software, AI & automation',
    description: 'Design digital products and connect workflows around user needs, existing tools, and agreed outcomes.',
    Icon: Bot,
    tone: 'teal',
  },
  {
    title: 'Security review & remediation',
    description: 'Review systems within an authorized scope, prioritize findings, support patching, and verify fixes.',
    Icon: ShieldCheck,
    tone: 'gold',
  },
  {
    title: 'Digital growth, content & media',
    description: 'Bring search, campaigns, useful content, and measurement together around the audience and goal.',
    Icon: Megaphone,
    tone: 'teal',
  },
  {
    title: 'Digital learning',
    description: 'Support learners and teams with practical workshops, mentoring, and project guidance.',
    Icon: GraduationCap,
    tone: 'gold',
  },
];

const iconTone = (tone) => tone === 'gold'
  ? 'border-gold-DEFAULT/25 bg-gold-DEFAULT/10 text-gold-light'
  : 'border-peacock-light/25 bg-peacock-light/10 text-peacock-light';

const About = () => (
  <>
    <Navbar />
    <main id="main-content">
      <PageHero
        title="About SASTRAVA"
        subtitle="Who We Are"
        description="We bring together business consulting, startup incubation, technology, security, digital growth, and practical learning to help turn challenges into useful next steps."
      />

      <section className="relative overflow-hidden bg-navy-950 py-16 md:py-24">
        <div className="pointer-events-none absolute -right-20 top-40 h-96 w-96 rounded-full bg-peacock-light/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-20 h-80 w-80 rounded-full bg-gold-DEFAULT/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <nav aria-label="About page sections" className="mb-16 flex flex-wrap gap-3 border-b border-white/10 pb-8">
            {ABOUT_SECTIONS.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className="inline-flex min-h-11 items-center rounded-full border border-peacock-light/20 bg-peacock-light/5 px-4 text-sm font-semibold text-offwhite/80 transition-colors hover:border-peacock-light/45 hover:text-peacock-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light">
                {label}
              </a>
            ))}
          </nav>

          <section id="our-story" aria-labelledby="our-story-title" className="scroll-mt-28">
            <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                viewport={{ once: true, margin: '-60px' }}
                className="lg:sticky lg:top-28"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peacock-light">Our story & roots</p>
                <h2 id="our-story-title" className="mt-4 font-display text-3xl font-bold leading-tight text-offwhite md:text-4xl">Practical thinking, shaped around real needs.</h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-offwhite/65">The work began with technical guidance in cybersecurity and AI. That foundation in practical learning now informs how we help organizations plan, build, secure, and grow.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                viewport={{ once: true, margin: '-60px' }}
                className="relative overflow-hidden rounded-2xl border border-peacock-light/25 bg-peacock-light/[0.045] p-7 shadow-elevation md:p-10"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-peacock-light/10 blur-3xl" />
                <div className="relative space-y-5 text-base leading-relaxed text-offwhite/75">
                  <p>SASTRAVA helps businesses, founders, and institutions move from complex challenges to clear, workable next steps.</p>
                  <p>Early work in cybersecurity and AI/ML included technical guidance, curriculum, and project support. As needs grew, the work broadened into consulting, software and AI development, automation, security reviews, digital marketing, content, and learning.</p>
                  <p>We bring a practical approach to each engagement: understand the context, explain the trade-offs, agree a realistic scope, and focus on solutions people can use and maintain.</p>
                  <p className="border-l-2 border-gold-light pl-4 font-semibold text-gold-light">Our aim is to make the next decision clearer and the next step more achievable.</p>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="our-purpose" aria-labelledby="our-purpose-title" className="mt-20 scroll-mt-28 md:mt-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: '-60px' }}
              className="mb-8 max-w-3xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Purpose & ambition</p>
              <h2 id="our-purpose-title" className="mt-3 font-display text-3xl font-bold leading-tight text-offwhite md:text-4xl">What guides the work.</h2>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {PURPOSE_CARDS.map(({ title, description, Icon, tone }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
                  viewport={{ once: true, margin: '-60px' }}
                  className="group relative overflow-hidden rounded-2xl border border-gold-DEFAULT/15 bg-navy-900/70 p-6 shadow-elevation transition-all duration-300 hover:-translate-y-1 hover:border-peacock-light/30 md:p-7"
                >
                  <span className={`grid h-12 w-12 place-items-center rounded-xl border ${iconTone(tone)}`}><Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" /></span>
                  <h3 className="mt-6 font-display text-xl font-semibold text-offwhite transition-colors group-hover:text-gold-light md:text-2xl">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-offwhite/70">{description}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="our-work" aria-labelledby="our-work-title" className="mt-20 scroll-mt-28 md:mt-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: '-60px' }}
              className="mb-8 grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.65fr)] md:items-end"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peacock-light">Areas of work</p>
                <h2 id="our-work-title" className="mt-3 font-display text-3xl font-bold leading-tight text-offwhite md:text-4xl">A connected set of capabilities.</h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-offwhite/60 md:justify-self-end">The right combination depends on the challenge, audience, and goals. Work is scoped with the people who will use or support the outcome.</p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {WORK_AREAS.map(({ title, description, Icon, tone }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
                  viewport={{ once: true, margin: '-60px' }}
                  className="group relative flex min-h-56 flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-900/65 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-peacock-light/30 hover:shadow-glow-gold md:p-7"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-DEFAULT/5 blur-3xl transition-colors group-hover:bg-peacock-light/10" />
                  <span className={`relative grid h-12 w-12 place-items-center rounded-xl border ${iconTone(tone)}`}><Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" /></span>
                  <h3 className="relative mt-6 font-display text-xl font-semibold leading-snug text-offwhite transition-colors group-hover:text-gold-light">{title}</h3>
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-offwhite/65">{description}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section aria-labelledby="about-proof-links-title" className="mt-12 rounded-2xl border border-gold-DEFAULT/20 bg-navy-900/70 p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">Explore further</p>
              <h2 id="about-proof-links-title" className="mt-2 font-display text-2xl font-bold text-offwhite">See our project and learning approach.</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-offwhite/65">Our public pages explain how engagements are scoped and how learning programs are planned. Client results and learner stories are published when documented and approved.</p>
            </div>
            <div className="mt-5 flex shrink-0 flex-wrap gap-3 md:mt-0">
              <Link to="/case-studies" className="inline-flex min-h-11 items-center rounded-lg border border-gold-DEFAULT/30 px-4 text-sm font-semibold text-gold-light hover:bg-gold-DEFAULT/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light">Project case studies</Link>
              <Link to="/success-stories" className="inline-flex min-h-11 items-center rounded-lg border border-peacock-light/30 px-4 text-sm font-semibold text-peacock-light hover:bg-peacock-light/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-peacock-light">Learning stories</Link>
            </div>
          </section>

          <section id="our-evolution" aria-labelledby="our-evolution-title" className="phase8-roadmap mt-20 scroll-mt-28 md:mt-24">
            <div className="mb-8 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">October 2024 → present · Tadepalli</p>
              <h2 id="our-evolution-title" className="mt-3 font-display text-3xl font-bold leading-tight text-offwhite md:text-4xl">A practice shaped by learning and delivery.</h2>
              <p className="mt-4 text-sm leading-relaxed text-offwhite/65">Select a milestone to explore how the work has grown from technical mentoring into connected business and technology support.</p>
            </div>
            <OrbitalHubShowcase eyebrow="SASTRAVA evolution" title="From technical foundations to integrated practice." items={[
              { title: 'Technical foundations', description: 'Early work centered on cybersecurity, AI/ML, technical mentorship, and curriculum design.', focus: 'Cybersecurity · AI/ML · technical learning' },
              { title: 'Sastrava Edutech', description: 'Learning expanded into workshops, internships, mentoring, and career guidance across the 22-domain catalog.', focus: 'Learn · Intern · Grow', href: 'https://www.instagram.com/sastrava_edutech/' },
              { title: 'Connected services from Tadepalli', description: 'Today the practice brings consulting, incubation support, software, automation, security, and digital growth together for organizations across India.', focus: 'Tadepalli · Guntur District · Andhra Pradesh', href: googleMapsListingUrl },
            ]} />
          </section>

          <section id="our-team" aria-labelledby="our-team-title" className="mt-20 scroll-mt-28 md:mt-24">
            <div className="mb-8 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peacock-light">Leadership & practice heads</p>
              <h2 id="our-team-title" className="mt-3 font-display text-3xl font-bold leading-tight text-offwhite md:text-4xl">Meet the people guiding each practice.</h2>
              <p className="mt-4 text-sm leading-relaxed text-offwhite/65">Select a profile to explore a team member’s role and professional portfolio.</p>
            </div>
            <OrbitalHubShowcase eyebrow="Leadership & practice heads" title="A connected team across strategy, technology, and learning." items={teamProfiles.map((member) => ({
              title: member.name,
              image: member.image,
              description: `${member.name} leads the ${member.designation.toLowerCase()} practice at SASTRAVA.`,
              focus: member.designation,
              href: member.profile,
            }))} />
          </section>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true, margin: '-60px' }}
            className="relative mt-20 overflow-hidden rounded-3xl border border-gold-DEFAULT/25 bg-gradient-to-br from-gold-DEFAULT/10 via-navy-900/80 to-peacock-light/10 p-8 text-center md:mt-24 md:p-12"
          >
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-gold-DEFAULT/25 bg-gold-DEFAULT/10 text-gold-light"><CheckCircle2 className="h-5 w-5" aria-hidden="true" /></span>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Start with a conversation</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-offwhite md:text-4xl">Have a challenge or idea to work through?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-offwhite/65">Tell us what you are trying to change or create. We can help clarify a practical next step.</p>
            <Link to="/contact" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#E6C200] px-5 font-bold text-navy-950 transition-colors hover:bg-[#FFF3B0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light">
              Contact SASTRAVA <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.section>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
