import { Check } from 'lucide-react';

export function DeliverablesBento({ items, title = 'What you can take away' }) {
  return <section className="bg-navy-900 px-6 py-14" aria-label={title}>
    <div className="mx-auto max-w-7xl">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">Concrete outputs</p>
      <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => <li key={item} className="flex min-h-20 items-start gap-3 rounded-2xl border border-white/10 bg-navy-950/70 p-5 text-offwhite/85"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-peacock-light/30 bg-peacock-light/10 text-peacock-light"><Check className="h-4 w-4" aria-hidden="true" /></span><span><span className="block text-xs font-bold uppercase tracking-wider text-gold-light">Output {String(index + 1).padStart(2, '0')}</span><span className="mt-1 block font-semibold">{item}</span></span></li>)}
      </ul>
    </div>
  </section>;
}
