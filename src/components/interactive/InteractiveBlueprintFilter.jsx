import { useMemo, useState } from 'react';
import { PreferredSourceBadge } from '../seo/PreferredSourceBadge.jsx';

export function InteractiveBlueprintFilter({ items, categories = ['All'], filterLabel = 'Filter project blueprints' }) {
  const [category, setCategory] = useState('All');
  const filtered = useMemo(() => category === 'All' ? items : items.filter((item) => item.category === category), [category, items]);
  return (
    <div>
      <div role="group" aria-label={filterLabel} className="mb-6 flex flex-wrap gap-2">
        {categories.map((name) => <button key={name} type="button" aria-pressed={category === name} onClick={() => setCategory(name)} className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light ${category === name ? 'border-gold-light/60 bg-gold-light/10 text-gold-light' : 'border-white/15 text-offwhite/70 hover:border-peacock-light/50 hover:text-white'}`}>{name}</button>)}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" aria-live="polite">
        {filtered.map((item, index) => <details id={item.id || item.slug} key={item.title} onPointerMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`); event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`); }} className="phase8-almanac-card group rounded-2xl border border-white/10 bg-navy-900/75 p-5 open:border-peacock-light/45">
          <span aria-hidden="true" className="phase8-card-index">[{String(index + 1).padStart(2, '0')} // {String(filtered.length).padStart(2, '0')}]</span>
          <summary className="min-h-11 cursor-pointer list-none font-semibold text-white marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light"><span className="text-xs font-bold uppercase tracking-wider text-gold-light">{item.category}</span><span className="mt-2 block text-lg">{item.title}</span><span className="mt-2 block text-sm font-normal leading-relaxed text-offwhite/65">{item.problem}</span></summary>
          <div className="phase8-card-content mt-4 space-y-3 border-t border-white/10 pt-4 text-sm leading-relaxed text-offwhite/70"><p><strong className="text-peacock-light">System anatomy:</strong> {item.anatomy}</p><p><strong className="text-peacock-light">Deliverables:</strong> {item.deliverables}</p><p><strong className="text-peacock-light">Verification:</strong> {item.verification}</p>{item.articleSections?.map((section) => <section key={section.heading}><h3 className="font-semibold text-offwhite">{section.heading}</h3><p className="mt-1">{section.text}</p></section>)}{item.href && <a className="inline-flex min-h-11 items-center font-semibold text-gold-light underline underline-offset-4" href={item.href} download={item.download || undefined}>{item.linkLabel || 'Open resource'}</a>}{item.articleSections?.length > 0 && <PreferredSourceBadge />}</div>
        </details>)}
      </div>
      {filtered.length === 0 && <p className="rounded-xl border border-white/10 p-5 text-offwhite/70">No blueprints in this category yet.</p>}
    </div>
  );
}
