import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Mail, Send, Share2 } from 'lucide-react';
import { motion as Motion } from 'framer-motion';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:neeraj@sastrava.com', label: 'Email' },
    { icon: Share2, href: 'https://www.linkedin.com/in/sastrava-aa3097429/', label: 'LinkedIn' },
    { icon: Send, href: 'https://x.com/SASTRAVA_', label: 'X / @SASTRAVA_' },
    { icon: Camera, href: 'https://www.instagram.com/sastrava_/', label: 'Instagram / @sastrava_' },
  ];

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
      ],
    },
    {
      title: 'Learning',
      links: [
        { name: 'Courses', href: '/courses' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'FAQ', href: '/faq' },
        { name: 'Support', href: '/support' },
        { name: 'Contact', href: '/contact' },
      ],
    },
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-transparent bg-gradient-gold bg-clip-text mb-3">
              SASTRAVA
            </h3>
            <p className="text-offwhite/70 text-sm leading-relaxed mb-6">
              Business consulting, innovation, and incubation for organizations ready to turn complex challenges into meaningful progress.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Graphic, href, label }) => (
                <Motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  className="w-10 h-10 rounded-lg bg-gold-DEFAULT/10 border border-gold-DEFAULT/30 flex items-center justify-center text-gold-DEFAULT hover:bg-gradient-gold hover:text-navy-950 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  {React.createElement(Graphic, { size: 18 })}
                </Motion.a>
              ))}
            </div>
          </Motion.div>

          {footerLinks.map((section, idx) => (
            <Motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-gold-light font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={`${section.title}-${link.name}`}>
                    <Link
                      to={link.href}
                      className="text-offwhite/70 text-sm hover:text-gold-light transition-colors duration-300"
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
          <p className="text-offwhite/50 text-sm">
            © {currentYear} SASTRAVA. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-offwhite/50 hover:text-gold-light transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-offwhite/50 hover:text-gold-light transition-colors">
              Terms of Service
            </Link>
            <Link to="/security" className="text-offwhite/50 hover:text-gold-light transition-colors">
              Security
            </Link>
          </div>
        </Motion.div>
      </div>
    </Motion.footer>
  );
};

export default Footer;
