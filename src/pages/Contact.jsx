import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Globe } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { LeadForm } from '../components/forms/LeadForm';
import { CONTACT_FORM_CONFIG, LEAD_TYPES } from '../services/leadTypes';
import { getSession } from '../services/authService';


export const Contact = () => {
  const [selectedLocation, setSelectedLocation] = useState('headquarters');

  if (!getSession()) {
    return <Navigate to="/login/student?returnTo=%2Fcontact" replace />;
  }

  // Office locations with Indian cities
  const offices = [
    {
      id: 'headquarters',
      city: 'Vijayawada',
      name: 'Headquarters',
      address: 'Vijayawada, Andhra Pradesh',
      street: 'India · Remote collaboration available nationwide',
      phone: '+91 7981 576083',
      email: 'siri@sastrava.com',
      secondaryEmail: 'neeraj@sastrava.com',
      hours: 'Mon - Sat: 9:30 AM - 5:30 PM IST',
      whatsapp: '917981576083',
      highlight: true,
    },
  ];

  const selectedOffice = offices.find(o => o.id === selectedLocation);

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
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Mon-Sat: 9:30 AM - 5:30 PM IST',
      action: 'hours',
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
                  const isInteractive = method.action !== 'hours';
                  const href =
                    method.action === 'email'
                      ? method.href
                      : method.action === 'phone'
                      ? 'tel:+917981576083'
                      : method.action === 'whatsapp'
                      ? 'https://wa.me/917981576083?text=Hi%20SASTRAVA,%20I%20am%20interested%20in%20your%20services'
                      : undefined;
                  const Wrapper = isInteractive ? motion.a : motion.div;
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
                      className="group p-4 rounded-lg bg-navy-900 border border-gold-DEFAULT/10 hover:border-gold-DEFAULT/30 transition-all duration-300 block"
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

              {/* Office Selector */}
              <div className="pt-6 border-t border-gold-DEFAULT/10">
                <h3 className="text-lg font-semibold text-offwhite mb-4">Our Offices</h3>
                <div className="space-y-2">
                  {offices.map(office => (
                    <motion.button
                      key={office.id}
                      onClick={() => setSelectedLocation(office.id)}
                      whileHover={{ scale: 1.02 }}
                      className={`w-full text-left p-3 rounded-lg border transition-all duration-300 ${
                        selectedLocation === office.id
                          ? 'bg-gold-DEFAULT/20 border-gold-DEFAULT/50 text-gold-light'
                          : 'bg-navy-900 border-gold-DEFAULT/10 text-offwhite hover:border-gold-DEFAULT/30'
                      }`}
                    >
                      <p className="font-semibold">{office.city}</p>
                      <p className="text-xs opacity-70">{office.name}</p>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Selected Office Details */}
              {selectedOffice && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="pt-6 border-t border-gold-DEFAULT/10"
                >
                  <h3 className="text-lg font-semibold text-offwhite mb-3">{selectedOffice.name}</h3>
                  <div className="space-y-3 text-sm text-offwhite/70">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gold-DEFAULT mt-0.5 flex-shrink-0" />
                      <div>
                        <p>{selectedOffice.address}</p>
                        <p>{selectedOffice.street}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-gold-DEFAULT flex-shrink-0" />
                      <a href={`tel:${selectedOffice.phone}`} className="hover:text-gold-light transition-colors">
                        {selectedOffice.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-gold-DEFAULT flex-shrink-0" />
                      <a href={`mailto:${selectedOffice.email}`} className="hover:text-gold-light transition-colors">
                        {selectedOffice.email}
                      </a>
                      <span className="text-offwhite/40"> · </span>
                      <a href={`mailto:${selectedOffice.secondaryEmail}`} className="hover:text-gold-light transition-colors">
                        {selectedOffice.secondaryEmail}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-gold-DEFAULT flex-shrink-0" />
                      <p>{selectedOffice.hours}</p>
                    </div>
                  </div>
                </motion.div>
              )}
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

