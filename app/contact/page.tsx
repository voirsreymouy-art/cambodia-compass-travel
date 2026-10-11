import { faqs } from '@/data/site';

export const metadata = {
  title: 'About | Cambodia Compass Travel',
  description: 'Learn about our mission, local team, and values driving immersive journeys through Cambodia.',
};

export default function AboutPage() {
  return (
    <section className="section container narrow page-copy">
      <p className="eyebrow text-accent">Our story</p>
      <h1>We help travelers meet Cambodia with intention.</h1>
      <p>
        Cambodia Compass Travel is built around a simple belief: the best journeys are shaped by local knowledge, slower travel, and thoughtful hospitality.
      </p>
      <p>
        We partner with guides, families, and small businesses across Cambodia to create curated adventures that feel personal, immersive, and deeply rooted in place.
      </p>

      <div className="team-grid">
        <div className="team-card">
          <h3>Samnang</h3>
          <p>Founder & cultural ambassador</p>
        </div>
        <div className="team-card">
          <h3>Leakhena</h3>
          <p>Travel experience lead</p>
        </div>
        <div className="team-card">
          <h3>Sophal</h3>
          <p>Operations & guest care</p>
        </div>
      </div>

      <div className="content-block">
        <h2>Our values</h2>
        <ul className="check-list">
          <li>Authenticity over speed</li>
          <li>Responsible tourism and local partnerships</li>
          <li>Warm, transparent service from planning to departure</li>
          <li>Memories designed around story and connection</li>
        </ul>
      </div>

      <div className="content-block">
        <h2>Frequently asked questions</h2>
        <div className="faq-stack">
          {faqs.map((faq) => (
            <div key={faq.question} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
