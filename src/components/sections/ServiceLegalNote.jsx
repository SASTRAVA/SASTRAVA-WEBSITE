import { Link } from 'react-router-dom';

export function ServiceLegalNote() {
  return <p className="mx-auto max-w-7xl border-t border-white/10 px-6 py-4 text-xs leading-relaxed text-offwhite/55">Service information is general; the agreed scope, responsibilities, and deliverables are confirmed for each engagement. Read our <Link className="underline underline-offset-2 hover:text-gold-light" to="/terms">Terms</Link> and <Link className="underline underline-offset-2 hover:text-gold-light" to="/privacy">Privacy Policy</Link>.</p>;
}
