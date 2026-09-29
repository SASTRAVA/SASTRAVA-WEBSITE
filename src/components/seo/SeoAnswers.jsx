import { useLocation } from 'react-router-dom';
import { getSeoEntry } from '../../config/seoRoutes';

export function SeoAnswers() {
  const { pathname } = useLocation();
  const faqs = getSeoEntry(pathname).faqs;
  if (!faqs?.length) return null;

  return (
    <section aria-labelledby="common-questions-heading" className="bg-navy-950 py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 id="common-questions-heading" className="mb-8 text-3xl font-bold text-white">
          Clear answers to common questions
        </h2>
        <dl className="space-y-6">
          {faqs.map(([question, answer]) => (
            <div key={question} className="rounded-xl border border-gold-DEFAULT/20 bg-navy-900 p-6">
              <dt className="mb-2 text-lg font-semibold text-white">{question}</dt>
              <dd className="leading-relaxed text-offwhite/80">{answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
