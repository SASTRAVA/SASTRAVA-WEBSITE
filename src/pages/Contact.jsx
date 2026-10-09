import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Globe } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { LeadForm } from '../components/forms/LeadForm';
import { CONTACT_FORM_CONFIG, LEAD_TYPES } from '../services/leadTypes';


export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'siri@sastrava.com',
      action: 'email',
      href: 'mailto:siri@sastrava.com',
    },
    {
      icon: Mail,
      label: 'Leadership Email',
      value: 'neeraj@sastrava.com',
      action: 'email',
      href: 'mailto:neeraj@sastrava.com',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+91 7981 576083',
      action: 'phone',
    },
    {
      icon: Globe,
      label: 'WhatsApp',
      value: 'Message us anytime',
      action: 'whatsapp',
    },
  ];

  return (
    <>
      <Navbar />
      <main id="main-content">
      <PageHero
        title="Get in Touch"
        subtitle="Contact SASTRAVA"
        description="We're here to help you succeed. Reach out to us via email, phone, WhatsApp, or start a conversation about your challenge."
      />

      {/* MAIN CONTACT SECTION */}
      <section className="relative py-20 md:py-28 bg-navy-950">
        <div className="absolute top-0 right-0 w-96 h-96 bg-peacock-green/6 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-DEFAULT/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT COLUMN: CONTACT METHODS */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              <h2 className="text-3xl font-bold text-offwhite mb-8">Contact Information</h2>

              {/* Quick Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, idx) => {
                  const Icon = method.icon;
                  const href =
                    method.action === 'email'
                      ? method.href
                      : method.action === 'phone'
                      ? 'tel:+917981576083'
                      : 'https://wa.me/917981576083?text=Hi%20SASTRAVA,%20I%20am%20interested%20in%20your%20services';
                  const Wrapper = motion.a;
                  return (
                    <Wrapper
                      key={method.label}
                      href={href}
                      target={method.action === 'whatsapp' ? '_blank' : undefined}
                      rel={method.action === 'whatsapp' ? 'noreferrer' : undefined}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="group block min-h-16 rounded-lg bg-navy-900 border border-gold-DEFAULT/10 p-4 transition-all duration-300 hover:border-gold-DEFAULT/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
                    >
                      <div className="flex items-start gap-4">
                        <Icon className="w-6 h-6 text-gold-DEFAULT mt-1 group-hover:text-gold-light transition-colors" />
                        <div className="flex-1">
                          <p className="text-sm text-offwhite/60 mb-1">{method.label}</p>
                          <p className="text-offwhite font-semibold group-hover:text-gold-light transition-colors">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              <div className="rounded-lg border border-gold-DEFAULT/10 bg-navy-900 p-5">
                <h3 className="text-lg font-semibold text-offwhite">Location & availability</h3>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-offwhite/75">
                  <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-light" aria-hidden="true" />Vijayawada, Andhra Pradesh, India. Remote collaboration available nationwide.</p>
                  <p className="flex items-start gap-3"><Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-light" aria-hidden="true" />Monday–Saturday, 9:30 AM–5:30 PM IST.</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <LeadForm
                leadType={LEAD_TYPES.CONTACT_INQUIRY}
                fields={CONTACT_FORM_CONFIG.fields}
                title="Send us a Message"
                subtitle="We typically respond within 24 hours"
                metadata={{
                  sourcePage: '/contact',
                  sourceButton: 'Contact Form',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;

