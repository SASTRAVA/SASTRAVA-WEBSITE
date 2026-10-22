import { useId, useRef, useState } from 'react';
import { ArrowUpRight, Orbit } from 'lucide-react';

export function OrbitalHubShowcase({ eyebrow = 'Interactive explorer', title, description, items, initialIndex = 0 }) {
  const [active, setActive] = useState(initialIndex);
  const componentId = useId().replaceAll(':', '');
  const tabRefs = useRef([]);
  const item = items[active] || items[0];
  if (!item) return null;
  const tilt = (event) => {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.transform = `perspective(1100px) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 3).toFixed(2)}deg)`;
  };
  const resetTilt = (event) => { event.currentTarget.style.transform = ''; };
  const moveTab = (event, index) => {
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : event.key === 'ArrowUp' || event.key === 'ArrowLeft' ? -1 : 0;
    if (!direction) return;
    event.preventDefault();
    const next = (index + direction + items.length) % items.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="relative overflow-hidden bg-navy-950 px-6 py-16 md:py-20" aria-label={title}>
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-peacock-light/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">{eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-offwhite md:text-4xl">{title}</h2>
          {description && <p className="mt-4 leading-relaxed text-offwhite/70">{description}</p>}
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div onPointerMove={tilt} onPointerLeave={resetTilt} className="relative rounded-3xl border border-peacock-light/25 bg-[radial-gradient(circle_at_center,rgba(17,147,130,.23),rgba(7,19,30,.96)_58%)] p-5 transition-transform duration-200 ease-out md:p-8">
            <div aria-hidden="true" className="pointer-events-none absolute inset-[18%] rounded-full border border-dashed border-gold-light/25" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-[30%] rounded-full border border-peacock-light/30" />
            <div className="relative mb-5 flex min-h-28 items-center justify-center">
              <div className="grid h-24 w-24 place-items-center rounded-full border border-gold-light/40 bg-navy-950/90 text-gold-light shadow-[0_0_55px_rgba(218,166,68,.18)]">
                <Orbit className="h-10 w-10" aria-hidden="true" />
                <span className="sr-only">SASTRAVA central hub</span>
              </div>
            </div>
            <div role="tablist" aria-label="Choose a topic" aria-orientation="horizontal" className="relative grid grid-cols-2 gap-2 sm:grid-cols-3">
              {items.map((entry, index) => <button key={entry.title} ref={(node) => { tabRefs.current[index] = node; }} id={`${componentId}-tab-${index}`} role="tab" type="button" aria-selected={active === index} aria-controls={`${componentId}-panel`} tabIndex={active === index ? 0 : -1} onKeyDown={(event) => moveTab(event, index)} onClick={() => setActive(index)} className={`min-h-12 rounded-xl border px-3 py-3 text-left text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light ${active === index ? 'border-gold-light/60 bg-gold-light/10 text-white shadow-[0_0_24px_rgba(218,166,68,.12)]' : 'border-white/10 bg-navy-950/75 text-offwhite/70 hover:border-peacock-light/50 hover:text-white'}`}>
                {entry.image && <img src={entry.image} alt="" width="32" height="32" loading="lazy" className="mb-2 h-8 w-8 rounded-full object-cover" />}{entry.title}
              </button>)}
            </div>
          </div>
          <article id={`${componentId}-panel`} role="tabpanel" aria-labelledby={`${componentId}-tab-${active}`} tabIndex={0} aria-live="polite" className="min-h-64 rounded-3xl border border-white/10 bg-navy-900/80 p-6 shadow-elevation backdrop-blur-xl md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-peacock-light">Selected focus · {String(active + 1).padStart(2, '0')}</p>
            <h3 className="mt-3 text-2xl font-bold text-white">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-offwhite/70">{item.description}</p>
            {item.focus && <p className="mt-4 text-sm font-semibold text-peacock-light">Practice focus: {item.focus}</p>}
            {item.href && <a href={item.href} className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-gold-light underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light">Explore this area <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>}
          </article>
        </div>
      </div>
    </section>
  );
}
