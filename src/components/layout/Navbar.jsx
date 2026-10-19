import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { primaryNavigation } from '../../config/siteNavigation.js';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => { if (event.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  const navLinks = primaryNavigation;

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  const navClassName = ({ isActive }) =>
    `px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 min-h-10 flex items-center ${
      isActive
        ? 'text-gold-light bg-gold-DEFAULT/15 shadow-glow-gold'
        : 'text-offwhite hover:text-gold-light hover:bg-gold-DEFAULT/10'
    }`;

  const mobileNavClassName = ({ isActive }) =>
    `block px-4 py-3 rounded-lg transition-all duration-300 min-h-12 flex items-center ${
      isActive
        ? 'text-gold-light bg-gold-DEFAULT/15'
        : 'text-offwhite hover:bg-gold-DEFAULT/5 hover:text-gold-light'
    }`;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-xl border-b border-gold-DEFAULT/20 shadow-elevation'
          : 'bg-transparent'
      }`}
      style={{
        boxShadow: isScrolled ? '0 0 30px rgba(201, 168, 76, 0.15)' : 'none',
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Primary"
    >
      <div className="mx-auto max-w-7xl px-5 py-2.5 md:px-6 md:py-3">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-3 transition-transform"
            onClick={() => setIsOpen(false)}
          >
            <Logo size="sm" />
            <span
              className="text-xl font-bold text-gold-light font-display hidden sm:inline"
              style={{
                textShadow: '0 0 5px rgba(255, 243, 176, 0.72), 0 0 16px rgba(230, 194, 0, 0.45)',
              }}
            >
              SASTRAVA
            </span>
          </Link>

          <div className="hidden md:flex -translate-y-2 items-center gap-1">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                custom={idx}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="relative flex items-center">
                  <NavLink to={link.href} end={link.href === '/'} className={navClassName} onClick={() => setIsServicesOpen(false)}>
                    {link.name}
                  </NavLink>
                  {link.children && (
                    <>
                      <button
                        type="button"
                        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg text-offwhite/75 transition-colors hover:bg-gold-DEFAULT/10 hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light"
                        aria-label="Toggle service links"
                        aria-expanded={isServicesOpen}
                        onClick={() => setIsServicesOpen((open) => !open)}
                      >
                        <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                      </button>
                      {isServicesOpen && (
                        <div className="absolute left-0 top-full z-50 mt-2 grid w-[30rem] grid-cols-2 gap-1 rounded-xl border border-gold-DEFAULT/20 bg-navy-950 p-3 shadow-2xl">
                          <NavLink to="/services" onClick={() => setIsServicesOpen(false)} className="col-span-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-gold-light hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light">All services</NavLink>
                          {link.children.map((child) => (
                            <NavLink key={child.href} to={child.href} onClick={() => setIsServicesOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-offwhite/80 hover:bg-white/5 hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light">
                              {child.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            className="md:hidden text-gold-DEFAULT hover:text-gold-light transition-colors p-2 min-h-12 min-w-12 flex items-center justify-center rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 space-y-1 pb-4"
            >
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  custom={idx}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div>
                    <div className="flex items-center gap-1">
                      <NavLink
                        to={link.href}
                        end={link.href === '/'}
                        className={`${mobileNavClassName} flex-1`}
                        onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}
                      >
                        {link.name}
                      </NavLink>
                      {link.children && (
                        <button
                          type="button"
                          className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-lg text-offwhite hover:bg-white/5 hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light"
                          aria-label="Toggle service links"
                          aria-expanded={isServicesOpen}
                          onClick={() => setIsServicesOpen((open) => !open)}
                        >
                          <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                        </button>
                      )}
                    </div>
                    {link.children && isServicesOpen && (
                      <div className="ml-4 mt-1 border-l border-gold-DEFAULT/25 pl-3">
                        {link.children.map((child) => (
                          <NavLink key={child.href} to={child.href} className={mobileNavClassName} onClick={() => { setIsOpen(false); setIsServicesOpen(false); }}>
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
