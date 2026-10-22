import { useState } from 'react';

export function LearningTrackSwitcher({ roles }) {
  const [selected, setSelected] = useState(0);
  return <section className="mx-auto max-w-7xl bg-navy-950 px-6 py-14" aria-labelledby="learning-track-title">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-peacock-light">Find your learning track</p>
    <h2 id="learning-track-title" className="mt-2 text-3xl font-bold text-white">Choose the perspective that fits you.</h2>
    <div role="group" aria-label="Choose your learner role" className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {roles.map((role, index) => <button type="button" key={role.title} aria-pressed={selected === index} onClick={() => setSelected(index)} className={`min-h-14 rounded-xl border p-4 text-left font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light ${selected === index ? 'border-gold-light/60 bg-gold-light/10 text-white' : 'border-white/10 bg-navy-900 text-offwhite/75 hover:border-peacock-light/50'}`}>{role.title}</button>)}
    </div>
    <p aria-live="polite" className="mt-4 rounded-xl border border-white/10 bg-navy-900/70 p-5 leading-relaxed text-offwhite/75">{roles[selected].description}</p>
  </section>;
}
