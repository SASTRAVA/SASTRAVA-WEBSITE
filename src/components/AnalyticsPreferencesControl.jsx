import { useState } from 'react';
import { Link } from 'react-router-dom';
import { readAnalyticsConsent, setAnalyticsConsent } from '../services/analyticsConsent.js';

export function AnalyticsPreferencesControl({ className = '' }) {
  const [open, setOpen] = useState(false);
  const [consent, setConsent] = useState(() => (typeof window === 'undefined' ? null : readAnalyticsConsent()));

  const choose = (value) => {
    setAnalyticsConsent(value);
    setConsent(value);
  };

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="analytics-preferences-panel"
        onClick={() => { setConsent(readAnalyticsConsent()); setOpen((current) => !current); }}
        className="inline-flex min-h-11 items-center rounded-lg border border-white/15 px-3 py-2 text-sm font-semibold text-offwhite/75 transition-colors hover:border-gold-light/40 hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
      >
        Cookie &amp; Analytics Preferences
      </button>
      {open && (
        <section id="analytics-preferences-panel" aria-label="Cookie and analytics preferences" className="mt-3 max-w-xl rounded-xl border border-gold-light/25 bg-navy-900 p-4 text-left shadow-xl">
          <p className="text-sm text-offwhite/75">Optional Google Analytics: <strong className="text-offwhite">{consent === 'accepted' ? 'Allowed' : consent === 'rejected' ? 'Rejected' : 'Not set'}</strong></p>
          <p className="mt-2 text-xs leading-relaxed text-offwhite/55">Your choice is stored in this browser. Rejecting disables analytics and removes first-party Google Analytics cookies where accessible.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={() => choose('rejected')} className="min-h-11 rounded-lg border border-white/20 px-3 text-sm font-semibold text-offwhite hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light">Reject optional analytics</button>
            <button type="button" onClick={() => choose('accepted')} className="min-h-11 rounded-lg bg-gold-light px-3 text-sm font-bold text-navy-950 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light">Allow analytics</button>
            <Link to="/privacy" className="inline-flex min-h-11 items-center px-2 text-sm text-peacock-light underline underline-offset-4">Privacy notice</Link>
          </div>
        </section>
      )}
    </div>
  );
}
