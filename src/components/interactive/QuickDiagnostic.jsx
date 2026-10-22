import { useMemo, useState } from 'react';
import { ArrowRight, RotateCcw } from 'lucide-react';

const optionSets = {
  startup: {
    title: 'Startup & growth bottleneck finder',
    intro: 'Answer four quick questions to identify which area may deserve your next focused discussion. This is a planning aid, not a business assessment.',
    questions: [
      { prompt: 'What is least certain right now?', options: ['Who needs this?', 'Why would they choose us?', 'Can we deliver it well?', 'Can the process repeat?'] },
      { prompt: 'Where does progress most often pause?', options: ['Customer conversations', 'Qualified demand', 'Product delivery', 'Manual handoffs'] },
      { prompt: 'What would help most in the next month?', options: ['Evidence from users', 'Clearer positioning', 'A working prototype', 'A connected workflow'] },
      { prompt: 'Which outcome matters first?', options: ['Customer discovery', 'Positioning & demand', 'Product delivery', 'Process automation'] },
    ],
    outcomes: ['Customer Discovery', 'Positioning & Demand', 'Product Delivery', 'Process Automation'],
  },
  seo: {
    title: 'SEO, AEO & GEO readiness mini-diagnostic',
    intro: 'Select what you already have in place. The result shows useful next checks; it does not predict rankings.',
    questions: [
      { prompt: 'Pages have distinct titles and descriptions.', options: ['In place', 'Needs review'] },
      { prompt: 'Services and location are consistent across the site and business listing.', options: ['In place', 'Needs review'] },
      { prompt: 'Important service pages have crawlable links and useful visible text.', options: ['In place', 'Needs review'] },
      { prompt: 'Search Console and analytics measure relevant visits and leads.', options: ['In place', 'Needs review'] },
    ],
  },
  security: {
    title: 'Website security & VAPT risk self-check',
    intro: 'Use this checklist to find topics to review with your technical team. It is not a penetration test or security certification.',
    questions: [
      { prompt: 'Are administrator accounts protected with MFA?', options: ['Yes', 'Not sure', 'No'] },
      { prompt: 'Are dependencies and platform runtimes reviewed for updates?', options: ['Yes', 'Not sure', 'No'] },
      { prompt: 'Are backups tested and access to production secrets restricted?', options: ['Yes', 'Not sure', 'No'] },
      { prompt: 'Are security fixes verified after patching?', options: ['Yes', 'Not sure', 'No'] },
    ],
  },
  secureHygiene: {
    title: 'Founder & SMB secure-product hygiene check',
    intro: 'Check foundational practices for a small product team. This self-check does not test the application or infrastructure.',
    questions: [
      { prompt: 'Are preview, staging, and production credentials separated?', options: ['Yes', 'Not sure', 'No'] },
      { prompt: 'Can you identify who has production and database access?', options: ['Yes', 'Not sure', 'No'] },
      { prompt: 'Do releases have a tested rollback or recovery route?', options: ['Yes', 'Not sure', 'No'] },
      { prompt: 'Does the team review dependencies and remove unused access?', options: ['Yes', 'Not sure', 'No'] },
    ],
  },
};

export function QuickDiagnostic({ kind = 'seo' }) {
  const config = optionSets[kind];
  const [answers, setAnswers] = useState({});
  const [complete, setComplete] = useState(false);
  const result = useMemo(() => {
    if (kind === 'startup') {
      const counts = [0, 0, 0, 0];
      Object.values(answers).forEach((answer) => { if (Number.isInteger(answer)) counts[answer] += 1; });
      return config.outcomes[counts.indexOf(Math.max(...counts))];
    }
    const flagged = Object.values(answers).filter((answer) => answer !== 0).length;
    return flagged === 0 ? 'Your checklist responses suggest routine monitoring and ongoing review.' : `${flagged} item${flagged === 1 ? '' : 's'} may need a follow-up review.`;
  }, [answers, config.outcomes, kind]);
  const ready = Object.keys(answers).length === config.questions.length;

  return <section className="bg-navy-950 px-6 py-14" aria-labelledby="quick-diagnostic-title">
    <div className="mx-auto max-w-5xl rounded-3xl border border-peacock-light/25 bg-navy-900/70 p-6 md:p-9">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-peacock-light">Interactive quick check</p>
      <h2 id="quick-diagnostic-title" className="mt-2 text-2xl font-bold text-white md:text-3xl">{config.title}</h2>
      <p className="mt-3 max-w-3xl leading-relaxed text-offwhite/70">{config.intro}</p>
      {!complete ? <div className="mt-7 grid gap-5 md:grid-cols-2">
        {config.questions.map((question, questionIndex) => <fieldset key={question.prompt} className="rounded-2xl border border-white/10 bg-navy-950/65 p-4">
          <legend className="px-1 font-semibold text-white">{String(questionIndex + 1).padStart(2, '0')} · {question.prompt}</legend>
          <div className="mt-3 flex flex-wrap gap-2">{question.options.map((option, optionIndex) => <button type="button" key={option} aria-pressed={answers[questionIndex] === optionIndex} onClick={() => setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }))} className={`min-h-11 rounded-lg border px-3 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light ${answers[questionIndex] === optionIndex ? 'border-gold-light/60 bg-gold-light/10 text-white' : 'border-white/10 text-offwhite/70 hover:border-peacock-light/50'}`}>{option}</button>)}</div>
        </fieldset>)}
        <button type="button" disabled={!ready} onClick={() => setComplete(true)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 font-bold text-navy-950 disabled:cursor-not-allowed disabled:opacity-50">Show my next step <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
      </div> : <div aria-live="polite" className="mt-7 rounded-2xl border border-gold-light/30 bg-gold-light/5 p-5"><p className="text-xs font-bold uppercase tracking-wider text-gold-light">Your planning result</p><p className="mt-2 text-lg font-semibold text-white">{result}</p><p className="mt-2 text-sm text-offwhite/70">Use this as a starting point for a scoped conversation. No answers are sent or stored.</p><button type="button" onClick={() => { setAnswers({}); setComplete(false); }} className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-peacock-light underline underline-offset-4"><RotateCcw className="h-4 w-4" aria-hidden="true" />Start again</button></div>}
    </div>
  </section>;
}

export function RoiSlider() {
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(500);
  const monthly = hours * rate * 4;
  return <section className="bg-navy-950 px-6 py-14" aria-labelledby="roi-slider-title"><div className="mx-auto grid max-w-5xl gap-8 rounded-3xl border border-gold-light/25 bg-navy-900/75 p-6 md:grid-cols-2 md:p-9"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-light">Illustrative calculator</p><h2 id="roi-slider-title" className="mt-2 text-2xl font-bold text-white">AI & workflow automation ROI slider</h2><p className="mt-3 leading-relaxed text-offwhite/70">Estimate the value of time that might be freed by a workflow change. This is a scenario calculation, not a savings promise.</p><label className="mt-6 block font-semibold text-white" htmlFor="hours-saved">Hours currently spent weekly on the workflow: <output className="text-gold-light">{hours}</output></label><input id="hours-saved" className="mt-3 w-full accent-gold-light" type="range" min="1" max="40" value={hours} onChange={(event) => setHours(Number(event.target.value))} />
<label className="mt-6 block font-semibold text-white" htmlFor="hourly-cost">Illustrative hourly cost (₹): <output className="text-gold-light">{rate}</output></label><input id="hourly-cost" className="mt-3 w-full accent-gold-light" type="range" min="100" max="3000" step="100" value={rate} onChange={(event) => setRate(Number(event.target.value))} /></div><div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-navy-950 p-6"><p className="text-sm text-offwhite/65">If all entered workflow time were addressed, the rough monthly capacity value would be</p><p className="mt-3 text-4xl font-bold text-peacock-light">₹{monthly.toLocaleString('en-IN')}</p><p className="mt-2 text-xs leading-relaxed text-offwhite/55">Illustrative upper-bound based on your inputs: hours × hourly cost × 4 weeks. Actual results depend on feasibility, adoption, maintenance, and remaining human review.</p></div></div></section>;
}
