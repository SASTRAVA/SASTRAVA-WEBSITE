import { SeoAnswers } from '../components/seo/SeoAnswers';
import { DownloadableResources } from '../components/sections/DownloadableResources.jsx';
import { ExplodedAnatomyStage } from '../components/interactive/ExplodedAnatomyStage';
import { DeliverablesBento } from '../components/interactive/DeliverablesBento';
import { QuickDiagnostic } from '../components/interactive/QuickDiagnostic';
import { penetrationSteps, deliverables } from '../config/phase7Experiences';
/**
 * Penetration Testing Service Page
 * Advanced security testing and attack simulation
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ServiceLegalNote } from '../components/sections/ServiceLegalNote';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { TestimonialCard, CaseStudyPreview } from '../components/trust';
import { CheckCircle, Shield, Target, Zap } from 'lucide-react';

const PenetrationTesting = () => {
  const benefits = [
    'Identify critical security vulnerabilities before attackers',
    'Test incident response procedures and team readiness',
    'Validate security controls and defense mechanisms',
    'Compliance with regulatory requirements (PCI-DSS, HIPAA)',
    'Reduce security breach risk and liability',
    'Improve overall security posture',
  ];



  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <PageHero
          title="Penetration Testing"
          subtitle="Advanced Security Testing & Attack Simulation"
          description="Identify vulnerabilities before attackers do. Comprehensive security testing aligned with industry standards"
        />
        <ExplodedAnatomyStage eyebrow="Authorized penetration testing" title="See the guardrails around a controlled security test." description="A clear authorization and rules of engagement guide every test stage, from asset discovery through remediation retesting." steps={penetrationSteps} />
        <QuickDiagnostic kind="security" />
        <DownloadableResources templateIds={['security']} />
        <DeliverablesBento items={deliverables.pentest} title="Penetration test outputs" />



        {/* Benefits */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Why Penetration Testing</h2>

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
                  <Shield className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>




        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-gold/10 to-peacock/10 border-y border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for a Security Assessment?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's test your infrastructure and strengthen your defenses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" action="navigate" actionConfig={{ path: '/contact' }}>
                Discuss penetration testing scope
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

export default PenetrationTesting;
