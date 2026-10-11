import { faqs } from '@/data/site';

export const metadata = {
  title: 'FAQ | Cambodia Compass Travel',
  description: 'Helpful answers about visas, best times to visit, cancellation policies, and travel safety in Cambodia.',
};

export default function FAQPage() {
  return (
    <section className="section container narrow page-copy">
      <p className="eyebrow text-accent">FAQ</p>
      <h1>Everything you need to know before you go.</h1>

      <div className="faq-stack">
        {faqs.map((faq) => (
          <div key={faq.question} className="faq-item big">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
