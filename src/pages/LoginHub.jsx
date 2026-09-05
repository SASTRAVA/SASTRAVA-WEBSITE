import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crown, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { PageHero } from '../components/sections/PageHero';
import { LOGIN_ROLES, HEAD_ROLE_KEYS } from '../config/authRoles';
import { AUTH_ROLES } from '../services/authService';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const HeadCard = ({ roleKey }) => {
  const role = LOGIN_ROLES[roleKey];
  return (
    <motion.div variants={itemVariants}>
      <Link to={role.path} className="block h-full group">
        <div
          className="h-full glass-gold gloss p-6 rounded-2xl border border-gold-DEFAULT/25
            hover:border-gold-light/40 transition-all duration-300 will-change-transform
            hover:-translate-y-1 flex flex-col items-center text-center"
          style={{
            boxShadow: '0 0 18px rgba(201, 168, 76, 0.12), inset 0 0 10px rgba(201, 168, 76, 0.04)',
          }}
        >
          <div className="mb-4 p-3 rounded-xl bg-gold-DEFAULT/10">
            <Crown className="w-7 h-7 text-gold-light" strokeWidth={1.75} />
          </div>
          <h3 className="text-lg font-bold text-offwhite mb-1">{role.label}</h3>
          <span className="text-xs text-offwhite/50 uppercase tracking-widest flex items-center gap-1 group-hover:text-gold-light transition-colors">
            Sign in <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export const LoginHub = () => {
  return (
    <>
      <Navbar />
      <PageHero
        title="SASTRAVA Login"
        subtitle="Portal Access"
        description="Sign in to the portal that matches your role at SASTRAVA."
      />

      <section className="relative py-16 md:py-24 bg-navy-950">
        <div className="absolute top-20 right-0 w-96 h-96 bg-peacock-green/6 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-DEFAULT/5 rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          {/* HEAD ACCESS SECTION (with Student login anchored lower-right on desktop) */}
          <div className="relative mb-28 md:mb-16 pb-0 md:pb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-offwhite mb-8 text-center md:text-left"
            >
              <span className="text-transparent bg-gradient-to-r from-gold-mid via-gold-light to-gold-mid bg-clip-text">
                Head Access
              </span>
            </motion.h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-5 md:w-2/3"
            >
              {HEAD_ROLE_KEYS.map((roleKey) => (
                <HeadCard key={roleKey} roleKey={roleKey} />
              ))}
            </motion.div>

            {/* STUDENT LOGIN — lower-right of the Head section on desktop, normal flow on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 md:mt-0 md:absolute md:bottom-0 md:right-0 md:w-72"
            >
              <Link to={LOGIN_ROLES[AUTH_ROLES.STUDENT].path} className="block group">
                <div
                  className="glass-peacock gloss p-6 rounded-2xl border border-peacock-light/30
                    hover:border-peacock-light/50 transition-all duration-300 will-change-transform
                    hover:-translate-y-1 flex flex-col items-center text-center"
                  style={{
                    boxShadow: '0 0 18px rgba(20, 184, 166, 0.12), inset 0 0 10px rgba(20, 184, 166, 0.04)',
                  }}
                >
                  <div className="mb-4 p-3 rounded-xl bg-peacock-light/10">
                    <GraduationCap className="w-7 h-7 text-peacock-light" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-bold text-offwhite mb-1">Student Login</h3>
                  <span className="text-xs text-offwhite/50 uppercase tracking-widest flex items-center gap-1 group-hover:text-peacock-light transition-colors">
                    Sign in <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* EMPLOYEE LOGIN SECTION — visually distinct from Head logins */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="pt-8 border-t border-offwhite/10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-offwhite mb-8 text-center md:text-left">
              <span className="text-transparent bg-gradient-to-r from-peacock-light via-peacock-green to-peacock-light bg-clip-text">
                Employee Access
              </span>
            </h2>
            <Link to={LOGIN_ROLES[AUTH_ROLES.EMPLOYEE].path} className="block group max-w-sm">
              <div
                className="glass-peacock gloss p-6 rounded-2xl border border-peacock-light/30
                  hover:border-peacock-light/50 transition-all duration-300 will-change-transform
                  hover:-translate-y-1 flex items-center gap-4"
                style={{
                  boxShadow: '0 0 18px rgba(20, 184, 166, 0.12), inset 0 0 10px rgba(20, 184, 166, 0.04)',
                }}
              >
                <div className="p-3 rounded-xl bg-peacock-light/10 flex-shrink-0">
                  <Briefcase className="w-7 h-7 text-peacock-light" strokeWidth={1.75} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-offwhite mb-1">Employee Login</h3>
                  <span className="text-xs text-offwhite/50 uppercase tracking-widest flex items-center gap-1 group-hover:text-peacock-light transition-colors">
                    Sign in <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LoginHub;
