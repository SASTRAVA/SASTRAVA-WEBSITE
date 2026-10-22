/**
 * SEO Services Page
 * Search Engine Optimization for organic visibility and rankings
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ServiceLegalNote } from '../components/sections/ServiceLegalNote';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { CheckCircle, Search, TrendingUp, BarChart3 } from 'lucide-react';
import { DownloadableResources } from '../components/sections/DownloadableResources.jsx';
import { ExplodedAnatomyStage } from '../components/interactive/ExplodedAnatomyStage';
import { QuickDiagnostic } from '../components/interactive/QuickDiagnostic';
import { DeliverablesBento } from '../components/interactive/DeliverablesBento';
import { seoSteps, deliverables } from '../config/phase7Experiences';

const SEO = () => {
  const benefits = [
    'Increase organic visibility for target keywords',
    'Drive qualified traffic to your website',
    'Build long-term sustainable rankings',
    'Improve user experience and engagement',
    'Generate leads and conversions at scale',
    'Establish authority in your industry',
  ];



  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Search Engine Optimization"
          subtitle="Organic Rankings & Qualified Traffic"
          description="Strategic SEO to increase visibility, drive organic traffic, and generate qualified leads"
        />

        <section lang="te" className="bg-navy-950 py-8" aria-label="Local search summary in Telugu">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <details className="rounded-xl border border-peacock-light/20 bg-peacock-light/5 p-5 text-gray-200">
              <summary className="min-h-11 cursor-pointer font-semibold text-peacock-light">తెలుగులో సమాచారం: విజయవాడ, తాడేపల్లి, గుంటూరు &amp; అమరావతి వ్యాపారాల కోసం SEO మరియు డిజిటల్ మార్కెటింగ్</summary>
              <p className="mt-3 leading-relaxed">మీ వ్యాపారం గూగుల్ సెర్చ్ (Google Search), గూగుల్ మ్యాప్స్ (Google Maps), మరియు AI సెర్చ్ ఇంజన్లలో (ChatGPT, Perplexity, Gemini) మెరుగ్గా కనిపించేలా SASTRAVA SEO, AEO &amp; GEO సేవలతో సహాయపడుతుంది. స్థానిక కస్టమర్లను ఆకర్షించడానికి మరియు మీ బ్రాండ్ డిజిటల్ గుర్తింపును బలోపేతం చేయడానికి మాతో సంప్రదించండి. శోధన ఫలితాల్లో స్థానం లేదా వ్యాపార ఫలితాలకు హామీ ఉండదు.</p>
            </details>
          </div>
        </section>
        <ExplodedAnatomyStage eyebrow="Local and organic search anatomy" title="Build search visibility on useful site foundations." description="Move through technical crawlability, keyword intent, answer-ready content, and measurement to shape an actionable search plan." steps={seoSteps} />
        <QuickDiagnostic kind="seo" />
        <DeliverablesBento items={deliverables.seo} title="SEO, AEO & GEO review outputs" />



        {/* Benefits */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Why Invest in SEO</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <Search className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>




        <DownloadableResources templateIds={['localSeo']} />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-gold/10 to-peacock/10 border-y border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's develop an SEO strategy that drives sustainable organic growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" action="navigate" actionConfig={{ path: '/contact' }}>
                Discuss an SEO assessment
              </Button>
            </div>
          </div>
        </section>
      <ServiceLegalNote />
      </main>
      <Footer />
    </>
  );
};

export default SEO;
