import { Sparkles } from 'lucide-react';
import { trackEvent } from '../../services/conversionTracking.js';

const preferredSourceUrl = 'https://www.google.com/preferences/source?q=sastrava.com';

export function PreferredSourceBadge({ variant = 'compact' }) {
  const isCallout = variant === 'callout';
  return (
    <aside className={isCallout ? 'relative overflow-hidden rounded-2xl border border-peacock-light/25 bg-[radial-gradient(ellipse_at_top_right,rgba(64,198,177,0.14),transparent_55%),linear-gradient(135deg,rgba(18,46,58,0.95),rgba(13,20,35,0.96))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] md:p-8' : 'rounded-2xl border border-white/10 bg-white/[0.025] p-4'}>
      <div className={`flex ${isCallout ? 'flex-col gap-4 md:flex-row md:items-center md:justify-between' : 'flex-col gap-3'}`}>
        <div className="flex items-start gap-3">
          <span aria-hidden="true" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-gold-light">
            <Sparkles className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <div>
            <h2 className={isCallout ? 'font-display text-xl font-semibold text-offwhite md:text-2xl' : 'font-semibold text-offwhite'}>
              {isCallout ? 'Prefer SASTRAVA in Google Search & AI Mode' : 'Help readers find SASTRAVA in Google'}
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-offwhite/65">
              Choose SASTRAVA as a preferred source in Google. If our content is eligible and shown, Google may highlight it as preferred.
            </p>
          </div>
        </div>
        <a
          href={preferredSourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent('preferred_source_click', { source_page: window.location.pathname })}
          className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl border border-gold-light/45 bg-gold-light/10 px-4 py-3 text-center text-sm font-semibold leading-snug text-gold-light transition-colors hover:border-gold-light/70 hover:bg-gold-light/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
        >
          <Sparkles aria-hidden="true" className="h-4 w-4" />
          Add SASTRAVA as a Preferred Source on Google
        </a>
      </div>
    </aside>
  );
}
