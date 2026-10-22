import { SeoAnswers } from '../components/seo/SeoAnswers';
import { DownloadableResources } from '../components/sections/DownloadableResources.jsx';
import { ExplodedAnatomyStage } from '../components/interactive/ExplodedAnatomyStage';
import { DeliverablesBento } from '../components/interactive/DeliverablesBento';
import { QuickDiagnostic } from '../components/interactive/QuickDiagnostic';
import { securityAuditSteps, deliverables } from '../config/phase7Experiences';
/**
 * Security Audits Service Page
 * Comprehensive system security evaluation and compliance verification
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ServiceLegalNote } from '../components/sections/ServiceLegalNote';
import { PageHero } from '../components/sections/PageHero';
import { Button } from '../components/ui/Button';
import { CheckCircle, Shield, ClipboardList, Zap } from 'lucide-react';

const SecurityAudits = () => {
  const benefits = [
    'Verify compliance with regulatory requirements',
    'Identify security gaps and weaknesses',
    'Validate effectiveness of controls',
    'Meet audit and certification requirements',
    'Establish baseline for continuous improvement',
    'Reduce organizational risk and liability',
  ];



  return (
    <>
      <Navbar />
      <main>
        <PageHero
          title="Cybersecurity audits and remediation"
          subtitle="Comprehensive Security Assessment"
          description="Evaluate your security posture against industry standards and identify improvement areas"
        />
        <ExplodedAnatomyStage eyebrow="Security audit & control review" title="Turn evidence into prioritized remediation." description="Select an audit chapter to see how scope, control evidence, risk context, and verification fit together." steps={securityAuditSteps} />
        <QuickDiagnostic kind="security" />
        <DeliverablesBento items={deliverables.cyberAudit} title="Security audit outputs" />



        {/* Benefits */}
        <section className="py-20 bg-navy-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12">Why Choose Security Audits</h2>

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




        <DownloadableResources templateIds={['security']} />

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-gold/10 to-peacock/10 border-y border-gold/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for a Security Audit?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Understand your security posture and compliance status
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" action="navigate" actionConfig={{ path: '/contact' }}>
                Discuss a security audit
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

export default SecurityAudits;
