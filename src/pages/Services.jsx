import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BriefcaseBusiness,
  Check,
  Clapperboard,
  Code2,
  GraduationCap,
  Megaphone,
  ShieldCheck,
} from 'lucide-react';

const SERVICE_GROUPS = [
  {
    id: 'strategy-growth',
    number: '01',
    eyebrow: 'Direction & growth',
    title: 'Decide where to go. Make it easier to be found.',
    description: 'Clarify the opportunity, shape a clear message, and build a practical path to market.',
    services: [
      {
        id: 'consulting-incubation',
        tag: 'Business consulting & incubation',
        heading: 'Turn a complex challenge into a practical plan.',
        description: 'Work through priorities, validate an idea, and identify useful next steps for your business or venture.',
        capabilities: ['Business and market discovery', 'Startup and venture incubation', 'Go-to-market planning', 'Growth priorities and operating plans'],
        Icon: BriefcaseBusiness,
        href: '/grow',
        linkLabel: 'Explore consulting and incubation',
        tone: 'gold',
      },
      {
        id: 'digital-marketing',
        tag: 'Digital marketing',
        heading: 'Build visibility around the way customers search.',
        description: 'Connect organic discovery and paid campaigns to a clear audience, offer, and measurement plan.',
        capabilities: ['SEO, keyword research, AEO and GEO', 'Search and social campaigns', 'Positioning and content planning', 'Conversion measurement and reporting'],
        Icon: Megaphone,
        href: '/digital-marketing',
        linkLabel: 'Explore digital marketing services',
        tone: 'teal',
      },
      {
        id: 'content-media',
        tag: 'Content & media',
        heading: 'Create useful content with a clear purpose.',
        description: 'Plan and produce digital content that explains your offer and supports your communication goals.',
        capabilities: ['Creative direction and scripts', 'Video production and editing', 'Graphic and digital assets', 'Content calendars and publishing plans'],
        Icon: Clapperboard,
        href: '/contact',
        linkLabel: 'Discuss content and media services',
        tone: 'gold',
      },
    ],
  },
  {
    id: 'build-automation',
    number: '02',
    eyebrow: 'Build & automate',
    title: 'Make useful ideas work in the real world.',
    description: 'Shape, build, and connect digital products and workflows around the needs of the people who use them.',
    services: [
      {
        id: 'software-development',
        tag: 'Software development',
        heading: 'Digital products shaped around real user needs.',
        description: 'Design, build, integrate, and maintain websites, applications, and internal tools to an agreed scope.',
        capabilities: ['Websites and applications', 'Backend and API development', 'System integrations', 'Maintenance and technical handover'],
        Icon: Code2,
        href: '/build',
        linkLabel: 'Explore software development',
        tone: 'teal',
      },
      {
        id: 'automation-ai',
        tag: 'Automation & AI workflows',
        heading: 'Give repetitive work back to your team.',
        description: 'Map processes and connect systems, automating steps that are safe and useful to streamline.',
        capabilities: ['Process mapping and automation planning', 'CRM, forms, email, and reporting integrations', 'AI-assisted internal workflows', 'Human review, monitoring, and handover'],
        Icon: Bot,
        href: '/ai',
        linkLabel: 'Explore AI and automation',
        tone: 'gold',
      },
    ],
  },
  {
    id: 'security-learning',
    number: '03',
    eyebrow: 'Protect & enable',
    title: 'Build confidence into the systems and skills you depend on.',
    description: 'Strengthen digital security while helping teams and learners develop practical technology skills.',
    services: [
      {
        id: 'security-testing',
        tag: 'Security audits, testing & patching',
        heading: 'Find weaknesses. Fix them. Verify the result.',
        description: 'Review applications and infrastructure within an authorized scope, prioritize findings, and support remediation.',
        capabilities: ['Application, API, cloud, and infrastructure reviews', 'Vulnerability assessment and scoped testing', 'Patching and remediation support', 'Retesting and clear reporting'],
        Icon: ShieldCheck,
        href: '/cybersecurity/security-audits',
        linkLabel: 'Explore security audit services',
        tone: 'gold',
      },
      {
        id: 'digital-learning',
        tag: 'Digital learning',
        heading: 'Practical technology learning for people and institutions.',
        description: 'Develop skills through workshops, mentoring, and project guidance shaped around the learner and context.',
        capabilities: ['Software, AI, and cybersecurity learning', 'Technical workshops and mentoring', 'Project guidance for learners and teams', 'Flexible formats and schedules'],
        Icon: GraduationCap,
        href: '/learn',
        linkLabel: 'Explore digital learning services',
        tone: 'teal',
      },
    ],
  },
];

const ServiceCard = ({ service, index }) => {
  const { tag, heading, description, capabilities, Icon, href, linkLabel, tone } = service;
  const iconStyle = tone === 'gold'
    ? 'border-gold-DEFAULT/25 bg-gold-DEFAULT/10 text-gold-light group-hover:bg-gold-DEFAULT/20'
    : 'border-peacock-light/25 bg-peacock-light/10 text-peacock-light group-hover:bg-peacock-light/20';

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
      viewport={{ once: true, margin: '-60px' }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold-DEFAULT/15 bg-navy-950/75 p-6 shadow-elevation transition-all duration-300 hover:-translate-y-1 hover:border-peacock-light/30 hover:shadow-glow-gold md:p-7"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gold-DEFAULT/5 blur-3xl transition-colors group-hover:bg-peacock-light/10" />
      <div className="relative flex items-start justify-between gap-4">
        <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl border transition-colors ${iconStyle}`}>
          <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-offwhite/55">{tag}</span>
      </div>

      <h3 className="relative mt-6 font-display text-xl font-semibold leading-snug text-offwhite transition-colors group-hover:text-gold-light md:text-2xl">{heading}</h3>
      <p className="relative mt-3 min-h-[4.5rem] text-sm leading-relaxed text-offwhite/65">{description}</p>

      <div className="relative mt-5 border-t border-white/10 pt-5">
        <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-peacock-light">What this can include</h4>
        <ul className="mt-4 space-y-3">
          {capabilities.map((capability) => (
            <li key={capability} className="flex items-start gap-3 text-sm leading-relaxed text-offwhite/75">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />
              <span>{capability}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link to={href} aria-label={linkLabel} className="relative mt-auto inline-flex min-h-12 items-center gap-2 pt-6 text-sm font-semibold text-gold-light transition-colors hover:text-peacock-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light">
        Explore service <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </Link>
    </motion.article>
  );
};

export const Services = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Page Hero */}
        <PageHero
          title="Practical services for your next step."
          subtitle="Our Services"
          description="SASTRAVA combines business consulting and incubation with software, AI and automation, security reviews, digital marketing, content, and practical learning. We agree the scope and work with you toward the outcome that matters."
        />

        <section id="service-offerings" className="relative overflow-hidden bg-navy-950 py-section">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/3 left-0 w-96 h-96 bg-peacock-blue/5 rounded-full filter blur-3xl"
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-0 w-80 h-80 bg-gold-DEFAULT/5 rounded-full filter blur-3xl"
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 14, repeat: Infinity }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-6">
            <nav aria-label="Service categories" className="mb-14 flex flex-wrap gap-3 border-b border-white/10 pb-8">
              {SERVICE_GROUPS.map((group) => (
                <a key={group.id} href={`#${group.id}`} className="inline-flex min-h-11 items-center rounded-full border border-peacock-light/20 bg-peacock-light/5 px-4 text-sm font-semibold text-offwhite/80 transition-colors hover:border-peacock-light/45 hover:text-peacock-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light">
                  {group.eyebrow}
                </a>
              ))}
            </nav>

            <div className="space-y-20 md:space-y-24">
              {SERVICE_GROUPS.map((group) => (
                <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className="scroll-mt-28">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, margin: '-80px' }}
                    className="mb-8 grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(16rem,0.65fr)] md:items-end"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">{group.number} / {group.eyebrow}</p>
                      <h2 id={`${group.id}-title`} className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight text-offwhite md:text-4xl">{group.title}</h2>
                    </div>
                    <p className="max-w-xl text-sm leading-relaxed text-offwhite/60 md:justify-self-end">{group.description}</p>
                  </motion.div>

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {group.services.map((service, index) => (
                      <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="relative py-section overflow-hidden">
          {/* Animated Peacock Gradient Background */}
          <div className="absolute inset-0 bg-gradient-peacock-animated bg-300% opacity-50 animate-gradient-flow" />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-navy-950/60" />

          {/* Decorative Elements */}
          <motion.div
            className="absolute top-20 left-10 w-80 h-80 bg-gold-DEFAULT/15 rounded-full filter blur-3xl shadow-glow-gold"
            animate={{ y: [0, 60, 0], x: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-96 h-96 bg-peacock-blue/15 rounded-full filter blur-3xl shadow-glow-teal"
            animate={{ y: [0, -60, 0], x: [0, -30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-peacock gloss rounded-3xl p-12 md:p-16 backdrop-blur-lg border border-peacock-light/30 text-center shadow-elevation-lg"
              style={{
                boxShadow: '0 0 40px rgba(20, 184, 166, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.05)',
              }}
            >
              {/* Premium Shine Overlay */}
              <div
                className="absolute inset-0 rounded-3xl opacity-30 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)',
                }}
              />

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-h2 text-offwhite mb-6 relative z-10"
              >
                A clear brief.{' '}
                <motion.span
                  className="text-transparent bg-gradient-gold bg-clip-text font-display"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  A coordinated plan.
                </motion.span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-slate-300 text-lg leading-relaxed mb-10 relative z-10 max-w-2xl mx-auto"
              >
                Tell us what you are trying to improve or create. We will clarify the requirements, recommend a practical scope, and outline the next step before work begins.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative z-10 flex justify-center"
              >
                <Button
                  variant="primary"
                  size="lg"
                  action="navigate"
                  actionConfig={{ path: '/contact' }}
                  className="inline-flex items-center gap-2 group"
                >
                  Let's Build Together
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5 group-hover:text-gold-light" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
