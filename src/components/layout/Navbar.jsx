import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Courses', href: '/courses' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

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
          ? 'bg-navy-950/80 backdrop-blur-glass border-b border-gold-DEFAULT/20 shadow-elevation'
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
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center gap-3 transition-transform"
            onClick={() => setIsOpen(false)}
          >
            <Logo size="xl" />
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
                <NavLink to={link.href} end={link.href === '/'} className={navClassName}>
                  {link.name}
                </NavLink>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex -translate-y-2 items-center gap-3">
            <Button variant="primary" size="sm" action="navigate" actionConfig={{ path: '/contact' }}>
              Start a Conversation
            </Button>
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
                  <NavLink
                    to={link.href}
                    end={link.href === '/'}
                    className={mobileNavClassName}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <div className="px-4 pt-2">
                <Button variant="primary" size="md" className="w-full" action="navigate" actionConfig={{ path: '/contact' }}>
                  Start a Conversation
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
