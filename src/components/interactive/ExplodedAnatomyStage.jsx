import { useId, useRef, useState } from 'react';
import { ArrowDown, Check, CircleDot } from 'lucide-react';

/** A lightweight, keyboard-accessible alternative to a heavy 3D scene. */
export function ExplodedAnatomyStage({ eyebrow = 'Interactive system map', title, description, steps, tone = 'gold' }) {
  const [active, setActive] = useState(0);
  const componentId = useId().replaceAll(':', '');
  const tabRefs = useRef([]);
  const current = steps[active];
  const accentClass = tone === 'teal' ? 'text-peacock-light' : 'text-gold-light';
  const moveTab = (event, index) => {
    const direction = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : event.key === 'ArrowUp' || event.key === 'ArrowLeft' ? -1 : 0;
    if (!direction) return;
    event.preventDefault();
    const next = (index + direction + steps.length) % steps.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="bg-navy-950 px-6 py-16 md:py-20" aria-label={title}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className={`text-xs font-bold uppercase tracking-[0.2em] ${accentClass}`}>{eyebrow}</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold leading-tight text-offwhite md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-xl leading-relaxed text-offwhite/70">{description}</p>
          <div role="tablist" aria-label="Select a system stage" aria-orientation="vertical" className="mt-7 grid gap-2">
            {steps.map((step, index) => (
                <button ref={(node) => { tabRefs.current[index] = node; }} key={step.title} id={`${componentId}-tab-${index}`} role="tab" type="button" aria-selected={active === index} aria-controls={`${componentId}-panel`} tabIndex={active === index ? 0 : -1} onKeyDown={(event) => moveTab(event, index)} onClick={() => setActive(index)} className={`flex min-h-12 w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light ${active === index ? 'border-gold-light/60 bg-white/[0.08] text-white' : 'border-white/10 text-offwhite/70 hover:border-white/25 hover:text-white'}`}>
                  <span className="font-mono text-xs text-gold-light">{String(index + 1).padStart(2, '0')}</span>
                  <span className="flex-1 font-semibold">{step.title}</span>
                  {active === index && <ArrowDown className="h-4 w-4 text-gold-light" aria-hidden="true" />}
                </button>
            ))}
          </div>
        </div>
        <div className="relative min-h-[22rem] overflow-hidden rounded-3xl border border-peacock-light/25 bg-[radial-gradient(ellipse_at_50%_45%,rgba(15,142,128,.24),transparent_52%),linear-gradient(145deg,#102d40,#07131e)] p-5 shadow-elevation md:p-8">
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="relative grid h-full min-h-[19rem] content-center gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <div className="grid gap-3 sm:order-1">
              {steps.slice(0, Math.ceil(steps.length / 2)).map((step, index) => <button key={step.title} type="button" aria-expanded={active === index} aria-controls={`${componentId}-panel`} onClick={() => setActive(index)} className={`min-h-12 rounded-xl border px-3 py-3 text-left text-sm font-semibold backdrop-blur-md transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light ${active === index ? 'border-gold-light/60 bg-gold-light/10 text-white' : 'border-white/15 bg-navy-950/65 text-offwhite/75'}`}>{step.title}</button>)}
            </div>
            <div aria-hidden="true" className="relative order-first mx-auto grid h-32 w-32 place-items-center rounded-full border border-gold-light/35 bg-navy-950/80 shadow-[0_0_60px_rgba(18,171,155,.22)] sm:order-2 sm:h-40 sm:w-40">
              <span className="absolute inset-3 rounded-full border border-peacock-light/30" />
              <span className="grid h-16 w-16 place-items-center rounded-2xl border border-gold-light/40 bg-gold-light/10 text-gold-light"><CircleDot className="h-8 w-8" /></span>
              <span className="absolute -bottom-7 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-offwhite/60">SASTRAVA SYSTEM</span>
            </div>
            <div className="grid gap-3 sm:order-3">
              {steps.slice(Math.ceil(steps.length / 2)).map((step, index) => { const absoluteIndex = index + Math.ceil(steps.length / 2); return <button key={step.title} type="button" aria-expanded={active === absoluteIndex} aria-controls={`${componentId}-panel`} onClick={() => setActive(absoluteIndex)} className={`min-h-12 rounded-xl border px-3 py-3 text-left text-sm font-semibold backdrop-blur-md transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light ${active === absoluteIndex ? 'border-gold-light/60 bg-gold-light/10 text-white' : 'border-white/15 bg-navy-950/65 text-offwhite/75'}`}>{step.title}</button>; })}
            </div>
          </div>
          <article id={`${componentId}-panel`} role="tabpanel" aria-labelledby={`${componentId}-tab-${active}`} tabIndex={0} aria-live="polite" className="relative mt-8 rounded-2xl border border-white/15 bg-navy-950/85 p-5 shadow-xl backdrop-blur-xl md:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-light">Section {String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}</p>
            <h3 className="mt-2 text-xl font-bold text-white">{current.title}</h3>
            <p className="mt-2 leading-relaxed text-offwhite/70">{current.detail}</p>
            {current.outcome && <p className="mt-4 flex gap-2 text-sm font-semibold text-peacock-light"><Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />{current.outcome}</p>}
          </article>
        </div>
      </div>
    </section>
  );
}
