import { useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Bot, Check, Clipboard, Download, Globe2, MessageCircle, RotateCcw, Share2, ShieldCheck } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { trackEvent } from '../services/conversionTracking.js';

function useToolTracking(toolName) {
  const started = useRef(false);
  const resultCreated = useRef(false);
  const start = () => {
    if (started.current) return;
    started.current = true;
    trackEvent('tool_interaction_start', { tool_name: toolName });
  };
  const result = (scoreOrTier = 'completed') => {
    start();
    if (resultCreated.current) return;
    resultCreated.current = true;
    trackEvent('tool_result_generated', { tool_name: toolName, score_or_tier: String(scoreOrTier) });
  };
  return { start, result };
}

function ToolResultActions({ toolName, summary, report, shareParams = {} }) {
  const [status, setStatus] = useState('');
  const link = new URL(window.location.pathname, window.location.origin);
  Object.entries(shareParams).forEach(([key, value]) => link.searchParams.set(key, String(value)));
  const message = `Hi SASTRAVA, I used the ${toolName}. ${summary} I would like to discuss practical next steps.`;

  const share = async () => {
    const url = link.toString();
    try {
      if (navigator.share) await navigator.share({ title: `SASTRAVA ${toolName}`, text: summary, url });
      else {
        await navigator.clipboard.writeText(`${summary}\n${url}`);
        setStatus('Assessment summary and link copied.');
      }
    } catch (error) {
      if (error.name !== 'AbortError') setStatus('Sharing is unavailable in this browser.');
    }
  };

  const download = () => {
    const blob = new Blob([`${report}\n\nSASTRAVA | https://sastrava.com\nContact: neeraj@sastrava.com | +91 7981 576083\n\nThis planning report is based on your inputs. It is not a guarantee, audit, or professional determination.\n`], { type: 'text/plain;charset=utf-8' });
    const objectUrl = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = objectUrl;
    anchor.download = `sastrava-${toolName}-action-plan.txt`;
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    trackEvent('tool_report_downloaded', { tool_name: toolName });
    setStatus('Your action plan was downloaded.');
  };

  return (
    <div className="mt-6 border-t border-white/10 pt-5">
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={share} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 px-3 text-sm font-semibold text-offwhite hover:border-peacock-light/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light"><Share2 className="h-4 w-4" aria-hidden="true" />Share assessment link</button>
        <button type="button" onClick={download} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/15 px-3 text-sm font-semibold text-offwhite hover:border-peacock-light/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light"><Download className="h-4 w-4" aria-hidden="true" />Download action plan</button>
        <a href={`https://wa.me/917981576083?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-peacock-light/30 px-3 text-sm font-semibold text-peacock-light hover:bg-peacock-light/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light"><MessageCircle className="h-4 w-4" aria-hidden="true" />Open WhatsApp draft</a>
      </div>
      <p className="mt-2 min-h-5 text-xs leading-relaxed text-offwhite/55" role="status">{status || 'WhatsApp opens a message draft. It is sent only if you choose Send.'}</p>
    </div>
  );
}

const tools = {
  '/tools/seo-aeo-checker': {
    eyebrow: 'Free website review',
    title: 'SEO, AEO & GEO readiness checker',
    intro: 'Use this ten-point self-check to spot practical search-readiness gaps across technical SEO, local visibility, useful answers, and measurement.',
    icon: Globe2,
  },
  '/tools/ai-roi-calculator': {
    eyebrow: 'Free planning calculator',
    title: 'AI & workflow automation ROI calculator',
    intro: 'Estimate the time and labor value a bounded automation might return. Adjust the assumptions before using this estimate in a project decision.',
    icon: Bot,
  },
  '/tools/security-checklist': {
    eyebrow: 'Free security self-check',
    title: 'Website security readiness checklist',
    intro: 'Review eight foundational controls for a website or small application. This self-check is educational and does not test your website.',
    icon: ShieldCheck,
  },
};

const seoChecks = [
  'Important pages return successfully and are allowed to be crawled.',
  'Each important page has a distinct, descriptive title and meta description.',
  'Each page has one clear, useful main heading that matches its content.',
  'Canonical URLs use HTTPS and point to the preferred version of each page.',
  'A current XML sitemap is linked from robots.txt and submitted in Search Console.',
  'Navigation and related content use crawlable links to important service pages.',
  'The site works on narrow mobile screens without sideways scrolling.',
  'Images have suitable dimensions, compression, and meaningful alternative text.',
  'Local name, address, phone, map, and business profile details are consistent.',
  'Structured data, analytics consent, and conversion tracking are reviewed.',
];

const securityChecks = [
  'Administrative accounts use multi-factor authentication.',
  'Software, plugins, dependencies, and hosting components are patched regularly.',
  'Backups are protected and restoration is tested.',
  'User permissions follow least-privilege access.',
  'Forms and APIs validate input and limit abusive requests.',
  'Secrets are kept in server-side configuration, not public code or browser bundles.',
  'Security events and important application errors are logged and reviewed.',
  'There is a response contact and a written scope for any security testing.',
];

const toolLinks = Object.entries(tools).map(([href, tool]) => ({ href, title: tool.title, Icon: tool.icon }));

function ToolShell({ tool, children }) {
  const Icon = tool.icon;
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const sharedScoreValue = params.get('score');
  const sharedScore = sharedScoreValue === null ? Number.NaN : Number(sharedScoreValue);
  const sharedMessage = Number.isInteger(sharedScore) && sharedScore >= 0 && sharedScore <= 100
    ? `Shared SEO/AEO/GEO readiness score: ${sharedScore} out of 100.`
    : params.get('calculation') === 'estimate-ready'
      ? 'A shared automation ROI calculator link was opened. Values are not included in the link.'
      : params.get('assessment') === 'complete'
        ? 'A shared security checklist link was opened. Individual answers and priority tier are not included in the link.'
        : '';
  return (
    <>
      <Navbar />
      <main id="main-content" className="min-h-[70vh] bg-navy-950 px-5 pb-20 pt-32 text-offwhite md:pt-40">
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-offwhite/60">
            <Link className="underline underline-offset-4 hover:text-gold-light" to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link className="underline underline-offset-4 hover:text-gold-light" to="/services">Services</Link>
            <span aria-hidden="true"> / </span>
            <span aria-current="page">Free tools</span>
          </nav>
          <header className="mb-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-peacock-light/25 bg-peacock-light/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-peacock-light">
              <Icon className="h-4 w-4" aria-hidden="true" /> {tool.eyebrow}
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">{tool.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-offwhite/70">{tool.intro}</p>
          </header>
          {sharedMessage && <p className="mb-6 rounded-xl border border-peacock-light/20 bg-peacock-light/5 p-4 text-sm text-peacock-light" role="status">{sharedMessage}</p>}
          {children}
          <section className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8" aria-labelledby="other-tools-heading">
            <h2 id="other-tools-heading" className="font-display text-2xl font-semibold">Explore the other free tools</h2>
            <ul className="mt-5 grid gap-3 md:grid-cols-3">
              {toolLinks.map(({ href, title, Icon: ToolIcon }) => (
                <li key={href}>
                  <Link to={href} className="flex min-h-14 items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-offwhite/80 transition-colors hover:border-gold-DEFAULT/40 hover:text-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light">
                    <ToolIcon className="h-4 w-4 shrink-0 text-peacock-light" aria-hidden="true" />
                    <span>{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-6 inline-flex min-h-12 items-center gap-2 font-semibold text-gold-light hover:text-peacock-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light">
              Discuss your next step <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function SeoChecker({ tool }) {
  const [selected, setSelected] = useState([]);
  const [copyStatus, setCopyStatus] = useState('');
  const tracking = useToolTracking('seo-aeo-checker');
  const score = selected.length * 10;
  const missing = seoChecks.filter((_, index) => !selected.includes(index));
  const toggle = (index) => setSelected((current) => {
    const next = current.includes(index) ? current.filter((item) => item !== index) : [...current, index];
    tracking.start();
    tracking.result(`score-${next.length * 10}`);
    return next;
  });

  const copyPlan = async () => {
    const plan = missing.length
      ? `SASTRAVA SEO, AEO & GEO action checklist\n\n${missing.map((item) => `- ${item}`).join('\n')}`
      : 'SASTRAVA SEO, AEO & GEO action checklist\n\nAll ten checks are marked complete. Recheck changes regularly.';
    try {
      await navigator.clipboard.writeText(plan);
      setCopyStatus('Checklist copied.');
    } catch {
      setCopyStatus('Clipboard access is unavailable in this browser. Select and copy the visible checklist.');
    }
  };

  return (
    <ToolShell tool={tool}>
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-2xl border border-white/10 bg-navy-900/80 p-5 md:p-8" aria-labelledby="seo-checks-heading">
          <h2 id="seo-checks-heading" className="font-display text-2xl font-semibold">Mark the checks you can verify</h2>
          <p className="mt-2 text-sm text-offwhite/60">A checked item means you have confirmed it, not just planned it.</p>
          <ul className="mt-6 space-y-2">
            {seoChecks.map((check, index) => (
              <li key={check}>
                <label className="flex min-h-14 cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-3 transition-colors hover:border-peacock-light/30 has-[:checked]:border-peacock-light/40 has-[:checked]:bg-peacock-light/5">
                  <input type="checkbox" checked={selected.includes(index)} onChange={() => toggle(index)} className="mt-1 h-5 w-5 shrink-0 accent-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light" />
                  <span className="text-sm leading-relaxed text-offwhite/80">{check}</span>
                </label>
              </li>
            ))}
          </ul>
        </section>
        <aside className="h-fit rounded-2xl border border-gold-DEFAULT/20 bg-navy-900/80 p-6" aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">Readiness score</p>
          <p className="mt-3 font-display text-5xl font-bold text-offwhite">{score}<span className="text-2xl text-offwhite/50"> / 100</span></p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-peacock-light to-gold-light transition-[width] duration-300" style={{ width: `${score}%` }} /></div>
          <h3 className="mt-7 font-semibold">Prioritized next checks</h3>
          {missing.length ? (
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-offwhite/70">
              {missing.slice(0, 5).map((item) => <li key={item}>{item}</li>)}
            </ol>
          ) : <p className="mt-3 text-sm leading-relaxed text-offwhite/70">All listed foundations are marked complete. Confirm them regularly and review search and conversion data.</p>}
          <button type="button" onClick={copyPlan} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-peacock-light/30 px-4 font-semibold text-peacock-light transition-colors hover:bg-peacock-light/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light">
            <Clipboard className="h-4 w-4" aria-hidden="true" /> Copy action checklist
          </button>
          <p className="mt-2 min-h-5 text-sm text-peacock-light" role="status">{copyStatus}</p>
          <p className="mt-4 text-xs leading-relaxed text-offwhite/45">This score is a planning aid, not a ranking prediction or a technical audit. Search platforms change and do not guarantee visibility.</p>
          <ToolResultActions toolName="seo-aeo-readiness" summary={`SEO, AEO & GEO readiness score: ${score} out of 100.`} report={`SEO, AEO & GEO readiness score: ${score}/100\n\nNext checks:\n${missing.length ? missing.map((item) => `- ${item}`).join('\n') : '- All ten checklist items are marked complete.'}`} shareParams={{ score }} />
        </aside>
      </div>
    </ToolShell>
  );
}

function RoiCalculator({ tool }) {
  const [teamSize, setTeamSize] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(4);
  const [hourlyCost, setHourlyCost] = useState(500);
  const [automationRate, setAutomationRate] = useState(35);
  const tracking = useToolTracking('ai-roi-calculator');
  const estimate = useMemo(() => {
    const monthlyHours = Number(teamSize) * Number(hoursPerWeek) * 4.33;
    const savedHours = monthlyHours * (Number(automationRate) / 100);
    return { savedHours, monthlyValue: savedHours * Number(hourlyCost), annualValue: savedHours * Number(hourlyCost) * 12 };
  }, [teamSize, hoursPerWeek, hourlyCost, automationRate]);
  const currency = (amount) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Number.isFinite(amount) ? amount : 0);
  const fields = [
    { id: 'team-size', label: 'People doing this workflow', value: teamSize, setValue: setTeamSize, min: 1, max: 10000, step: 1 },
    { id: 'weekly-hours', label: 'Hours spent per person each week', value: hoursPerWeek, setValue: setHoursPerWeek, min: 0, max: 168, step: 0.5 },
    { id: 'hourly-cost', label: 'Estimated labor cost per hour (₹)', value: hourlyCost, setValue: setHourlyCost, min: 0, max: 10000000, step: 50 },
    { id: 'automation-rate', label: 'Share of time potentially reduced (%)', value: automationRate, setValue: setAutomationRate, min: 0, max: 100, step: 5 },
  ];

  return (
    <ToolShell tool={tool}>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <form className="space-y-5 rounded-2xl border border-white/10 bg-navy-900/80 p-5 md:p-8" onSubmit={(event) => event.preventDefault()}>
          <h2 className="font-display text-2xl font-semibold">Set your assumptions</h2>
          {fields.map((field) => (
            <label key={field.id} htmlFor={field.id} className="block text-sm font-medium text-offwhite/80">
              {field.label}
              <input id={field.id} type="number" min={field.min} max={field.max} step={field.step} value={field.value} onChange={(event) => { tracking.start(); tracking.result('estimate-generated'); field.setValue(event.target.value); }} className="mt-2 block min-h-12 w-full rounded-xl border border-white/15 bg-navy-950 px-4 text-base text-offwhite focus:border-gold-light focus:outline-none focus:ring-2 focus:ring-gold-light/30" />
            </label>
          ))}
          <p className="flex gap-2 rounded-xl border border-gold-DEFAULT/15 bg-gold-DEFAULT/5 p-4 text-sm leading-relaxed text-offwhite/65"><Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" aria-hidden="true" />Your inputs stay in this browser. This page does not send the calculation to SASTRAVA.</p>
        </form>
        <section className="rounded-2xl border border-peacock-light/20 bg-navy-900/80 p-6 md:p-8" aria-live="polite" aria-labelledby="roi-results-heading">
          <h2 id="roi-results-heading" className="font-display text-2xl font-semibold">Illustrative estimate</h2>
          <p className="mt-2 text-sm leading-relaxed text-offwhite/60">Based on 4.33 weeks per month and your chosen automation share.</p>
          <dl className="mt-7 space-y-5">
            <div><dt className="text-sm text-offwhite/55">Potential time returned each month</dt><dd className="mt-1 font-display text-3xl font-bold text-peacock-light">{estimate.savedHours.toLocaleString('en-IN', { maximumFractionDigits: 1 })} hours</dd></div>
            <div><dt className="text-sm text-offwhite/55">Illustrative monthly labor value</dt><dd className="mt-1 font-display text-3xl font-bold text-gold-light">{currency(estimate.monthlyValue)}</dd></div>
            <div><dt className="text-sm text-offwhite/55">Illustrative annual labor value</dt><dd className="mt-1 font-display text-3xl font-bold text-offwhite">{currency(estimate.annualValue)}</dd></div>
          </dl>
          <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-relaxed text-offwhite/45">This is not a savings guarantee or a complete ROI calculation. Validate process quality, implementation and support costs, exception handling, security, and human review before deciding to automate.</p>
          <ToolResultActions toolName="ai-automation-roi" summary={`Illustrative estimate: ${estimate.savedHours.toLocaleString('en-IN', { maximumFractionDigits: 1 })} hours returned each month and annual labor value of ${currency(estimate.annualValue)}.`} report={`AI & workflow automation planning estimate\n\nPotential hours returned per month: ${estimate.savedHours.toLocaleString('en-IN', { maximumFractionDigits: 1 })}\nIllustrative monthly labor value: ${currency(estimate.monthlyValue)}\nIllustrative annual labor value: ${currency(estimate.annualValue)}\n\nAssumptions entered:\nTeam size: ${teamSize}\nHours per person each week: ${hoursPerWeek}\nLabor cost per hour: ${currency(hourlyCost)}\nPotential time reduction assumption: ${automationRate}%\n\nValidate implementation, support, exception handling, quality, security, and human review costs before making a decision.`} shareParams={{ calculation: 'estimate-ready' }} />
        </section>
      </div>
    </ToolShell>
  );
}

function SecurityChecklist({ tool }) {
  const [answers, setAnswers] = useState({});
  const tracking = useToolTracking('security-checklist');
  const answered = Object.keys(answers).length === securityChecks.length;
  const gaps = securityChecks.reduce((count, _, index) => count + (answers[index] === 'yes' ? 0 : 1), 0);
  const tier = gaps >= 6 ? { name: 'Critical gaps to address', tone: 'text-red-300', advice: 'Prioritize access controls, patching, backups, and a scoped review with an authorized security professional.' }
    : gaps >= 3 ? { name: 'Moderate gaps to review', tone: 'text-gold-light', advice: 'Create owners and due dates for unresolved controls, then verify the changes and response process.' }
      : { name: 'Foundational controls look stronger', tone: 'text-peacock-light', advice: 'Keep these controls tested. This checklist does not evaluate your application or prove it is secure.' };

  return (
    <ToolShell tool={tool}>
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-2xl border border-white/10 bg-navy-900/80 p-5 md:p-8" aria-labelledby="security-checks-heading">
          <h2 id="security-checks-heading" className="font-display text-2xl font-semibold">Review each control</h2>
          <p className="mt-2 text-sm text-offwhite/60">Choose “Not sure” when you have not verified a control.</p>
          <ol className="mt-6 space-y-4">
            {securityChecks.map((check, index) => (
              <li key={check} className="rounded-xl border border-white/10 p-4">
                <fieldset>
                  <legend className="text-sm font-medium leading-relaxed text-offwhite/85">{index + 1}. {check}</legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[['yes', 'Yes'], ['no', 'No'], ['unknown', 'Not sure']].map(([value, label]) => (
                      <label key={value} className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-white/10 px-3 text-sm text-offwhite/75 hover:border-peacock-light/30 has-[:checked]:border-gold-DEFAULT/50 has-[:checked]:bg-gold-DEFAULT/10">
                        <input type="radio" name={`security-${index}`} value={value} checked={answers[index] === value} onChange={() => setAnswers((current) => { const next = { ...current, [index]: value }; tracking.start(); if (Object.keys(next).length === securityChecks.length) tracking.result('completed'); return next; })} className="h-4 w-4 accent-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light" />
                        {label}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </li>
            ))}
          </ol>
          <button type="button" onClick={() => setAnswers({})} className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-peacock-light hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light"><RotateCcw className="h-4 w-4" aria-hidden="true" /> Reset answers</button>
        </section>
        <aside className="h-fit rounded-2xl border border-gold-DEFAULT/20 bg-navy-900/80 p-6" aria-live="polite">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-light">Your checklist summary</p>
          {!answered ? <p className="mt-4 text-sm leading-relaxed text-offwhite/65">Answer all eight questions to see a preliminary priority tier. “No” and “Not sure” both flag a control for follow-up.</p> : (
            <>
              <p className={`mt-4 font-display text-2xl font-bold ${tier.tone}`}>{tier.name}</p>
              <p className="mt-3 text-sm leading-relaxed text-offwhite/70">{gaps} of 8 controls need follow-up. {tier.advice}</p>
              <Link to="/contact" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#E6C200] px-4 font-bold text-navy-950 hover:bg-[#FFF3B0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light">Discuss an authorized review <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            </>
          )}
          <p className="mt-6 border-t border-white/10 pt-5 text-xs leading-relaxed text-offwhite/45">This educational self-assessment runs only in your browser. It does not scan, test, or transmit information about your website. A security review requires written authorization and a defined scope.</p>
          {answered && <ToolResultActions toolName="security-checklist" summary={`Security self-check: ${tier.name}. ${gaps} of 8 controls need follow-up.`} report={`Website security readiness self-check\n\nResult: ${tier.name}\nFollow-up controls: ${gaps} of 8\n\n${tier.advice}\n\nAnswers:\n${securityChecks.map((check, index) => `- ${check}: ${answers[index] === 'yes' ? 'Yes' : answers[index] === 'no' ? 'No' : 'Not sure'}`).join('\n')}\n\nThis is a browser-based planning aid. It does not scan, test, or certify a system.`} shareParams={{ assessment: 'complete' }} />}
        </aside>
      </div>
    </ToolShell>
  );
}

export default function Tools() {
  const { pathname } = useLocation();
  const tool = tools[pathname] ?? tools['/tools/seo-aeo-checker'];
  if (pathname === '/tools/ai-roi-calculator') return <RoiCalculator tool={tool} />;
  if (pathname === '/tools/security-checklist') return <SecurityChecklist tool={tool} />;
  return <SeoChecker tool={tool} />;
}
