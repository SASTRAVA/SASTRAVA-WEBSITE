import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const consentStorageKey = 'sastrava-analytics-consent';

function enableGoogleAnalytics(measurementId) {
  if (window.sastravaAnalyticsInitialized) return;

  window.sastravaAnalyticsInitialized = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args) => window.dataLayer.push(args);
  window.gtag('js', new Date());
  window.gtag('config', measurementId, { send_page_view: true });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  script.dataset.sastravaAnalytics = 'true';
  document.head.append(script);
}

function readConsent() {
  try {
    return window.localStorage.getItem(consentStorageKey);
  } catch {
    return null;
  }
}

function saveConsent(value) {
  try {
    window.localStorage.setItem(consentStorageKey, value);
  } catch {
    // The current-page choice still applies when browser storage is unavailable.
  }
}

export function AnalyticsConsent() {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
  const [consent, setConsent] = useState(() => (typeof window === 'undefined' ? null : readConsent()));

  useEffect(() => {
    if (measurementId && consent === 'accepted') enableGoogleAnalytics(measurementId);
  }, [consent, measurementId]);

  if (!measurementId || consent) return null;

  const choose = (value) => {
    saveConsent(value);
    setConsent(value);
  };

  return (
    <aside
      aria-label="Analytics choice"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-2xl border border-white/15 bg-navy-900 p-5 text-offwhite shadow-2xl md:inset-x-6 md:flex md:items-center md:justify-between md:gap-6"
    >
      <div>
        <h2 className="font-semibold">Optional analytics</h2>
        <p className="mt-1 max-w-xl text-sm leading-relaxed text-offwhite/70">
          Allow Google Analytics to measure visits and improve this site. Analytics stays off unless you choose to allow it. See our <Link className="underline underline-offset-2" to="/privacy">Privacy Policy</Link>.
        </p>
      </div>
      <div className="mt-4 flex shrink-0 flex-wrap gap-2 md:mt-0">
        <button type="button" onClick={() => choose('rejected')} className="min-h-11 rounded-lg border border-white/20 px-4 text-sm font-semibold hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light">
          Reject optional
        </button>
        <button type="button" onClick={() => choose('accepted')} className="min-h-11 rounded-lg bg-gold-light px-4 text-sm font-bold text-navy-950 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light">
          Allow analytics
        </button>
      </div>
    </aside>
  );
}
