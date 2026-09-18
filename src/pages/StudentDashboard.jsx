import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { BookOpen, LogOut, ShieldCheck } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { AUTH_ROLES, getSession, logout } from '../services/authService';

export const StudentDashboard = () => {
  const session = getSession();

  if (!session || session.role !== AUTH_ROLES.STUDENT) {
    return <Navigate to="/login/student?returnTo=%2Fstudent-dashboard" replace />;
  }

  const userName = session.user?.name || 'Learner';

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-navy-950 px-6 pb-20 pt-36 md:pt-44">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-peacock-light">Learner dashboard</p>
              <h1 className="text-3xl font-bold text-offwhite md:text-5xl">Welcome, {userName}</h1>
              <p className="mt-3 max-w-2xl text-offwhite/65">Your verified learner account is ready. Course progress and enrollment details will appear here.</p>
            </div>
            <button type="button" onClick={logout} className="inline-flex items-center gap-2 self-start rounded-xl border border-offwhite/15 px-4 py-2.5 text-sm text-offwhite/75 hover:border-gold-DEFAULT/50 hover:text-gold-light transition-colors">
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <section className="glass-peacock gloss rounded-2xl border border-peacock-light/25 p-7">
              <BookOpen className="mb-5 h-8 w-8 text-peacock-light" />
              <h2 className="text-xl font-bold text-offwhite">My learning</h2>
              <p className="mt-2 text-sm leading-6 text-offwhite/60">Start a course from the catalog. Your enrolled courses will be connected here as the learning backend is enabled.</p>
              <Link to="/courses" className="mt-6 inline-flex rounded-xl bg-peacock-light px-5 py-3 text-sm font-bold text-navy-950 hover:bg-peacock-green transition-colors">Browse courses</Link>
            </section>
            <section className="glass-gold gloss rounded-2xl border border-gold-DEFAULT/25 p-7">
              <ShieldCheck className="mb-5 h-8 w-8 text-gold-light" />
              <h2 className="text-xl font-bold text-offwhite">Account verified</h2>
              <p className="mt-2 text-sm leading-6 text-offwhite/60">Your access is protected by the authentication method you used. Enrollment access is now available.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StudentDashboard;
