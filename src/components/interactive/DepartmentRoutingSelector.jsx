import { useState } from 'react';
import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react';

const departments = [
  { title: 'General & operations', detail: 'For enquiries, coordination, and general business questions.', href: 'mailto:siri@sastrava.com', label: 'Email siri@sastrava.com', icon: Mail },
  { title: 'Strategy & leadership', detail: 'For consulting, partnerships, and leadership discussions.', href: 'mailto:neeraj@sastrava.com', label: 'Email neeraj@sastrava.com', icon: Mail },
  { title: 'Digital learning & college workshops', detail: 'For internships, workshops, and institutional learning enquiries.', href: 'https://www.instagram.com/sastrava_edutech/', label: 'Visit @sastrava_edutech', icon: ArrowUpRight },
  { title: 'Security & VAPT scope', detail: 'For authorized security review, remediation, and retest discussions.', href: 'https://wa.me/917981576083?text=Hi%20SASTRAVA%2C%20I%20would%20like%20to%20discuss%20an%20authorized%20security%20review.', label: 'WhatsApp +91 7981 576083', icon: MessageCircle },
];

export function DepartmentRoutingSelector() {
  const [active, setActive] = useState(0);
  const department = departments[active];
  const Icon = department.icon;
  return <section className="rounded-2xl border border-peacock-light/20 bg-navy-900/70 p-5 md:p-6" aria-labelledby="department-routing-title"><p className="text-xs font-bold uppercase tracking-[0.18em] text-peacock-light">Direct department routing</p><h2 id="department-routing-title" className="mt-2 text-2xl font-bold text-white">Choose the right contact.</h2><div role="group" aria-label="Choose a department" className="mt-5 grid gap-2 sm:grid-cols-2">{departments.map((item, index) => <button key={item.title} type="button" aria-pressed={active === index} onClick={() => setActive(index)} className={`min-h-12 rounded-xl border px-3 py-3 text-left text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light ${active === index ? 'border-gold-light/50 bg-gold-light/10 text-white' : 'border-white/10 text-offwhite/70 hover:border-peacock-light/40'}`}>{item.title}</button>)}</div><div aria-live="polite" className="mt-4 rounded-xl border border-white/10 bg-navy-950 p-4"><h3 className="font-semibold text-white">{department.title}</h3><p className="mt-1 text-sm leading-relaxed text-offwhite/65">{department.detail}</p><a href={department.href} target={department.href.startsWith('https://') ? '_blank' : undefined} rel={department.href.startsWith('https://') ? 'noreferrer' : undefined} className="mt-3 inline-flex min-h-11 items-center gap-2 font-semibold text-gold-light underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light"><Icon className="h-4 w-4" aria-hidden="true" />{department.label}</a></div></section>;
}
