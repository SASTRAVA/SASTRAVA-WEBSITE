import { Download } from 'lucide-react';
import { downloadTemplates } from '../../config/downloadTemplates.js';
import { trackEvent } from '../../services/conversionTracking.js';

export function DownloadableResources({ templateIds = [] }) {
  const resources = downloadTemplates.filter(({ id }) => templateIds.includes(id));
  if (!resources.length) return null;

  return (
    <section aria-labelledby="downloadable-resources-heading" className="bg-navy-950 py-14 md:py-18">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-peacock-light">Free planning resource</p>
          <h2 id="downloadable-resources-heading" className="mt-2 font-display text-2xl font-bold text-offwhite md:text-3xl">Take a practical checklist with you</h2>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {resources.map((resource) => (
            <article key={resource.id} className="rounded-xl border border-white/10 bg-navy-900/70 p-5">
              <h3 className="font-semibold text-offwhite">{resource.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-offwhite/65">{resource.summary}</p>
              <a href={resource.href} download={resource.filename} onClick={() => trackEvent('template_downloaded', { template_name: resource.filename, source_page: window.location.pathname })} className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-peacock-light underline underline-offset-4 hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light">
                <Download className="h-4 w-4" aria-hidden="true" /> Download free worksheet
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
