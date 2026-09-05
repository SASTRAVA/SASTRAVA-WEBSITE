import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { LoginForm } from '../components/auth/LoginForm';
import { LOGIN_ROLES } from '../config/authRoles';
import { NotFound } from './NotFound';

/**
 * Generic role-based login page.
 * Serves /login/head-1, /login/head-2, /login/head-3, /login/head-4,
 * /login/employee, and /login/student from a single component driven
 * by the LOGIN_ROLES config, avoiding six near-identical page files.
 */
export const LoginRole = () => {
  const { role } = useParams();
  const roleConfig = LOGIN_ROLES[role];

  if (!roleConfig) {
    return <NotFound />;
  }

  return (
    <>
      <Navbar />
      <section className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-gradient-peacock-animated bg-300% opacity-20 animate-gradient-flow" />
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-peacock-green/6 rounded-full filter blur-3xl pointer-events-none hidden md:block" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-DEFAULT/6 rounded-full filter blur-3xl pointer-events-none hidden md:block" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 text-sm text-offwhite/60 hover:text-gold-light transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Login Options
          </Link>

          <LoginForm
            role={role}
            title={roleConfig.label}
            accent={roleConfig.accent}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LoginRole;
