import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { InteractiveBlueprintFilter } from '../components/interactive/InteractiveBlueprintFilter';
import { projectBlueprints } from '../config/phase7Experiences';

// Portfolio Hero Section
const PortfolioHero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 bg-navy-950 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-peacock-blue/10 rounded-full filter blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-DEFAULT/5 rounded-full filter blur-3xl"
          animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          style={{ willChange: 'transform' }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-8"
          >
            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide bg-gold-DEFAULT/10 text-gold-light border border-gold-DEFAULT/30">
              Strategy · Innovation · Delivery
            </span>
          </motion.div>

          {/* SASTRAVA Brand Label */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-lg font-semibold mb-4 bg-gradient-to-r from-gold-DEFAULT via-gold-mid to-gold-light bg-clip-text text-transparent"
          >
            SASTRAVA
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-offwhite mb-6 leading-tight"
          >
            Business Consulting,{' '}
            <span className="bg-gradient-to-r from-gold-DEFAULT via-gold-mid to-gold-light bg-clip-text text-transparent">
              Innovation
            </span>{' '} & Incubation
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Explore SASTRAVA’s work across strategy, incubation, AI and automation, software, cybersecurity, digital marketing, and technical learning.
          </motion.p>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10"
          >
            <div className="glass-gold gloss rounded-lg p-4 border border-gold-DEFAULT/20">
              <div className="text-xl md:text-2xl font-bold text-gold-light">Consult</div>
              <div className="text-xs md:text-sm text-slate-300">Strategy & incubation</div>
            </div>
            <div className="glass-gold gloss rounded-lg p-4 border border-gold-DEFAULT/20">
              <div className="text-xl md:text-2xl font-bold text-gold-light">Build</div>
              <div className="text-xs md:text-sm text-slate-300">Products & automation</div>
            </div>
            <div className="glass-gold gloss rounded-lg p-4 border border-gold-DEFAULT/20">
              <div className="text-xl md:text-2xl font-bold text-gold-light">Grow</div>
              <div className="text-xs md:text-sm text-slate-300">Security & visibility</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

function Portfolio() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <PortfolioHero />
        <section className="bg-navy-900 px-6 py-16 md:py-20" aria-labelledby="portfolio-blueprints-title">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-peacock-light">Project blueprints & architecture</p>
            <h2 id="portfolio-blueprints-title" className="mt-3 max-w-3xl text-3xl font-bold text-white md:text-4xl">Explore the anatomy of a considered delivery.</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-offwhite/70">These are illustrative blueprints and internal capability patterns, not claims of completed client projects or measured client outcomes.</p>
            <div className="mt-8"><InteractiveBlueprintFilter filterLabel="Filter portfolio project blueprints" items={projectBlueprints} categories={['All', 'Consulting & Growth', 'AI & Automation', 'Software Builds', 'Cybersecurity & VAPT', 'Sastrava Edutech']} /></div>
          </div>
        </section>
        <section className="bg-navy-950 px-6 py-16 md:py-20" aria-labelledby="portfolio-tools-title">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">Live browser demos</p>
            <h2 id="portfolio-tools-title" className="mt-3 text-3xl font-bold text-white">Try a planning tool yourself.</h2>
            <p className="mt-3 max-w-3xl text-offwhite/70">These tools run locally in your browser and demonstrate practical assessment flows. They do not scan a site or submit your entries to SASTRAVA.</p>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {[
                ['/tools/seo-aeo-checker', 'SEO, AEO & GEO readiness', 'Score key discoverability checks and create a review checklist.'],
                ['/tools/ai-roi-calculator', 'Workflow automation estimate', 'Adjust time and workload assumptions for a bounded pilot.'],
                ['/tools/security-checklist', 'Website security self-check', 'Review basic safeguards and note follow-up actions.'],
              ].map(([href, title, description]) => <a key={href} href={href} className="group flex min-h-52 flex-col rounded-2xl border border-white/10 bg-navy-900 p-6 transition-colors hover:border-gold-light/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"><span className="text-xs font-bold uppercase tracking-wider text-gold-light">Interactive demo</span><h3 className="mt-3 text-xl font-semibold text-white">{title}</h3><p className="mt-2 flex-1 leading-relaxed text-offwhite/70">{description}</p><span className="mt-5 min-h-11 font-semibold text-peacock-light underline underline-offset-4">Open the tool</span></a>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export { Portfolio };
export default Portfolio;
