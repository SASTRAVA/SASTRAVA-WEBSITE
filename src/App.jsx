import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { AnimatePresence, motion as Motion } from 'framer-motion';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import { RouteMeta } from './components/RouteMeta';
import { AnalyticsConsent } from './components/AnalyticsConsent';
import { ErrorBoundary } from './components/ErrorBoundary';
import { trackEvent } from './services/conversionTracking.js';

// Lazy load non-critical pages to reduce initial bundle size
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Learn = lazy(() => import('./pages/Learn'));
const Build = lazy(() => import('./pages/Build'));
const Grow = lazy(() => import('./pages/Grow'));
const Secure = lazy(() => import('./pages/Secure'));
const Domains = lazy(() => import('./pages/index').then(m => ({ default: m.Domains })));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Blog = lazy(() => import('./pages/Blog'));
const Careers = lazy(() => import('./pages/index').then(m => ({ default: m.Careers })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Faq = lazy(() => import('./pages/Faq'));
const Support = lazy(() => import('./pages/Support'));
const Security = lazy(() => import('./pages/Security'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

// Login / Portal Access
const LoginHub = lazy(() => import('./pages/LoginHub'));
const LoginRole = lazy(() => import('./pages/LoginRole'));
const StudentDashboard = lazy(() => import('./pages/StudentDashboard'));

// Authority Building Pages (Phase 2B.2)
const SuccessStories = lazy(() => import('./pages/SuccessStories'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Research = lazy(() => import('./pages/Research'));
const Publications = lazy(() => import('./pages/Publications'));
const OpenSource = lazy(() => import('./pages/OpenSource'));
const Achievements = lazy(() => import('./pages/Achievements'));

// Business Division Hubs
const Cybersecurity = lazy(() => import('./pages/Cybersecurity'));
const PenetrationTesting = lazy(() => import('./pages/PenetrationTesting'));
const SecurityAudits = lazy(() => import('./pages/Cybersecurity_SecurityAudits'));
const AI = lazy(() => import('./pages/AI'));
const GenerativeAI = lazy(() => import('./pages/AI_GenerativeAI'));
const DigitalMarketing = lazy(() => import('./pages/DigitalMarketing'));
const SEO = lazy(() => import('./pages/DigitalMarketing_SEO'));
const Tools = lazy(() => import('./pages/Tools'));

/**
 * Page Wrapper Component
 * Adds fade in/out transition animations for route changes
 * Timing: 300ms for smooth, minimal delay
 */
const PageWrapper = ({ children }) => (
  <Motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
  >
    {children}
  </Motion.div>
);

// Fallback loader for lazy-loaded pages
const LazyLoadFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-navy-950" role="status" aria-live="polite">
    <div className="text-center">
      <div className="mx-auto h-10 w-10 animate-pulse rounded-full border-2 border-gold-DEFAULT/40 border-t-gold-light" />
      <p className="mt-4 text-sm text-offwhite/70">Loading page…</p>
    </div>
  </div>
);

function AppRoutes() {
  return (
    <Suspense fallback={<LazyLoadFallback />}>
      <Routes>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/domains" element={<PageWrapper><Domains /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/services-hub" element={<Navigate to="/services" replace />} />
        <Route path="/services-hub/learn" element={<Navigate to="/learn" replace />} />
        <Route path="/services-hub/build" element={<Navigate to="/build" replace />} />
        <Route path="/services-hub/grow" element={<Navigate to="/grow" replace />} />
        <Route path="/services-hub/secure" element={<Navigate to="/cybersecurity" replace />} />
        <Route path="/services-hub/ai" element={<Navigate to="/ai" replace />} />
        <Route path="/services-hub/cybersecurity" element={<Navigate to="/cybersecurity" replace />} />
        <Route path="/services-hub/digital-marketing" element={<Navigate to="/digital-marketing" replace />} />
        <Route path="/insights" element={<Navigate to="/blog" replace />} />
        <Route path="/learn" element={<PageWrapper><Learn /></PageWrapper>} />
        <Route path="/build" element={<PageWrapper><Build /></PageWrapper>} />
        <Route path="/grow" element={<PageWrapper><Grow /></PageWrapper>} />
        <Route path="/secure" element={<PageWrapper><Secure /></PageWrapper>} />
        <Route path="/courses" element={<Navigate to="/learn" replace />} />
        <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/careers" element={<PageWrapper><Careers /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
        <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><Faq /></PageWrapper>} />
        <Route path="/support" element={<PageWrapper><Support /></PageWrapper>} />
        <Route path="/security" element={<PageWrapper><Security /></PageWrapper>} />

        {/* Login / Portal Access */}
        <Route path="/login" element={<PageWrapper><LoginHub /></PageWrapper>} />
        <Route path="/login/:role" element={<PageWrapper><LoginRole /></PageWrapper>} />
        <Route path="/student-dashboard" element={<PageWrapper><StudentDashboard /></PageWrapper>} />
        
        {/* Authority Building Routes (Phase 2B.2) */}
        <Route path="/success-stories" element={<PageWrapper><SuccessStories /></PageWrapper>} />
        <Route path="/case-studies" element={<PageWrapper><CaseStudies /></PageWrapper>} />
        <Route path="/research" element={<PageWrapper><Research /></PageWrapper>} />
        <Route path="/publications" element={<PageWrapper><Publications /></PageWrapper>} />
        <Route path="/open-source" element={<PageWrapper><OpenSource /></PageWrapper>} />
        <Route path="/achievements" element={<PageWrapper><Achievements /></PageWrapper>} />
        
        {/* Cybersecurity Division Routes (Phase 2B.3) */}
        <Route path="/cybersecurity" element={<PageWrapper><Cybersecurity /></PageWrapper>} />
        <Route path="/cybersecurity/penetration-testing" element={<PageWrapper><PenetrationTesting /></PageWrapper>} />
        <Route path="/cybersecurity/security-audits" element={<PageWrapper><SecurityAudits /></PageWrapper>} />
        
        {/* AI Business Division Routes (Phase 2B.4) */}
        <Route path="/ai" element={<PageWrapper><AI /></PageWrapper>} />
        <Route path="/ai/genai" element={<PageWrapper><GenerativeAI /></PageWrapper>} />
        
        {/* Digital Marketing Division Routes (Phase 2B.5) */}
        <Route path="/digital-marketing" element={<PageWrapper><DigitalMarketing /></PageWrapper>} />
        <Route path="/digital-marketing/seo" element={<PageWrapper><SEO /></PageWrapper>} />
        <Route path="/tools/seo-aeo-checker" element={<PageWrapper><Tools /></PageWrapper>} />
        <Route path="/tools/ai-roi-calculator" element={<PageWrapper><Tools /></PageWrapper>} />
        <Route path="/tools/security-checklist" element={<PageWrapper><Tools /></PageWrapper>} />
        
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </Suspense>
  );
}

function App() {
  const location = useLocation();

  useEffect(() => {
    const handleContactLinkClick = (event) => {
      const anchor = event.target.closest?.('a[href]');
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.href);
      const eventParams = { source_page: window.location.pathname };
      if (url.hostname === 'wa.me') trackEvent('whatsapp_cta_click', eventParams);
      if (url.hostname === 'www.google.com' && url.pathname.startsWith('/maps/')) trackEvent('gbp_maps_click', eventParams);
      if (url.hostname === 'search.google.com' && url.pathname.includes('writereview')) trackEvent('gbp_review_click', eventParams);
    };
    document.addEventListener('click', handleContactLinkClick);
    return () => document.removeEventListener('click', handleContactLinkClick);
  }, [location.pathname]);

  return (
    <ErrorBoundary>
      <ScrollToTop />
      <RouteMeta />
      <AnalyticsConsent />
      <AnimatePresence mode="wait">
        <AppRoutes key={location.pathname} />
      </AnimatePresence>
    </ErrorBoundary>
  );
}

export default App;
