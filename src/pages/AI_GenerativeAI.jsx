import { SeoAnswers } from '../components/seo/SeoAnswers';
import { DownloadableResources } from '../components/sections/DownloadableResources.jsx';
import { ExplodedAnatomyStage } from '../components/interactive/ExplodedAnatomyStage';
import { RoiSlider } from '../components/interactive/QuickDiagnostic';
import { DeliverablesBento } from '../components/interactive/DeliverablesBento';
import { genAiSteps, deliverables } from '../config/phase7Experiences';
/**
 * Generative AI Solutions Service Page
 * LLM fine-tuning, RAG systems, and enterprise GenAI applications
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ServiceLegalNote } from '../components/sections/ServiceLegalNote';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { CheckCircle, Brain, Zap, Settings } from 'lucide-react';

const GenerativeAI = () => {
  const benefits = [
    'Automate complex business processes with AI',
    'Generate personalized content at scale',
    'Improve customer experience with intelligent interactions',
    'Reduce operational costs through automation',
    'Gain competitive advantage with cutting-edge AI',
    'Make faster, data-driven decisions',
  ];



  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Generative AI Solutions"
          subtitle="Custom LLM & GenAI Implementation"
          description="Fine-tuned models, RAG systems, and enterprise GenAI applications tailored to your business"
        />

        <ExplodedAnatomyStage eyebrow="Generative AI architecture" title="Trace a safe path from source material to reviewed output." description="Select a stage to see how source permissions, retrieval, model evaluation, and staff review shape a useful GenAI workflow." steps={genAiSteps} tone="teal" />
        <RoiSlider />
        <DownloadableResources templateIds={['automation']} />
        <DeliverablesBento items={deliverables.ai} title="Generative AI implementation outputs" />

        {/* Benefits */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Business Benefits</h2>

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
                  <Brain className="w-6 h-6 text-peacock flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>




        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-peacock/10 to-gold/10 border-y border-peacock/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Harness Generative AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how custom GenAI can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" action="navigate" actionConfig={{ path: '/contact' }}>
                Discuss a generative AI project
              </Button>
        <SeoAnswers />

            </div>
          </div>
        </section>
      <ServiceLegalNote />
      </main>
      <Footer />
    </>
  );
};

export default GenerativeAI;
