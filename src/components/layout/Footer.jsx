import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Mail, Send, Share2 } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import { footerSections } from '../../config/siteNavigation.js';
import { googleMapsListingAddress, googleMapsListingName, googleMapsListingUrl, googleMapsReviewUrl } from '../../config/businessProfile.js';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:neeraj@sastrava.com,siri@sastrava.com', label: 'Email' },
    { icon: Share2, href: 'https://www.linkedin.com/in/sastrava-aa3097429/', label: 'LinkedIn' },
    { icon: Send, href: 'https://x.com/SASTRAVA_', label: 'X / @SASTRAVA_' },
    { icon: Camera, href: 'https://www.instagram.com/sastrava_/', label: 'Instagram / @sastrava_' },
  ];

  return (
    <Motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-navy-950 border-t border-gold-DEFAULT/10 py-16 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-10 mb-12 sm:grid-cols-2 xl:grid-cols-6 xl:gap-8">
          <Motion.div
            className="xl:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="inline-flex text-2xl font-bold text-transparent bg-gradient-gold bg-clip-text mb-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light">
              SASTRAVA
            </Link>
            <p className="text-offwhite/70 text-sm leading-relaxed mb-6">
              Business consulting, innovation, and incubation based in Tadepalli, Guntur District, near Vijayawada and Amaravati. Working with teams across India.
            </p>
            <address className="mb-5 space-y-2 not-italic text-sm leading-relaxed text-offwhite/65">
              <p>{googleMapsListingAddress}</p>
              <a href="tel:+917981576083" className="block min-h-11 py-2 hover:text-gold-light">+91 7981 576083</a>
              <a href="mailto:neeraj@sastrava.com,siri@sastrava.com" className="block min-h-11 py-2 hover:text-gold-light">neeraj@sastrava.com · siri@sastrava.com</a>
              <a href={googleMapsListingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center py-2 text-peacock-light underline underline-offset-4 hover:text-gold-light">Find {googleMapsListingName} on Google Maps</a>
              <a href={googleMapsReviewUrl} target="_blank" rel="noopener noreferrer" className="block min-h-11 py-2 text-peacock-light underline underline-offset-4 hover:text-gold-light">Read or leave an honest review on Google</a>
            </address>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Graphic, href, label }) => (
                <Motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="w-12 h-12 rounded-lg bg-gold-DEFAULT/10 border border-gold-DEFAULT/30 flex items-center justify-center text-gold-DEFAULT hover:bg-gradient-gold hover:text-navy-950 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  {React.createElement(Graphic, { size: 18 })}
                </Motion.a>
              ))}
            </div>
          </Motion.div>

          {footerSections.map((section, idx) => (
            <Motion.div
              key={section.title}
              className="min-w-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-gold-light font-semibold mb-4">{section.title}</p>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.name}`}>
                    <Link
                      to={link.href}
                      className="inline-flex min-h-11 items-center py-2 text-offwhite/70 text-sm leading-snug hover:text-gold-light transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Motion.div>
          ))}
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/30 to-transparent mb-8" />

        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-offwhite/70 text-sm">
            © {currentYear} SASTRAVA. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="inline-flex min-h-12 min-w-12 items-center text-offwhite/70 hover:text-gold-light transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="inline-flex min-h-12 min-w-12 items-center text-offwhite/70 hover:text-gold-light transition-colors">
              Terms of Service
            </Link>
            <Link to="/security" className="inline-flex min-h-12 min-w-12 items-center text-offwhite/70 hover:text-gold-light transition-colors">
              Security
            </Link>
          </div>
        </Motion.div>
      </div>
    </Motion.footer>
  );
};

export default Footer;
