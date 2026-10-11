import Image from 'next/image';
import Link from 'next/link';
import { destinations } from '@/data/site';

export const metadata = {
  title: 'Destinations | Cambodia Compass Travel',
  description: 'Explore Cambodia’s most enchanting destinations, from Angkor Wat to island escapes and jungle retreats.',
};

export default function DestinationsPage() {
  return (
    <section className="section container">
      <div className="section-header centered">
        <p className="eyebrow text-accent">Destinations</p>
        <h1>Where will your Cambodian story unfold?</h1>
      </div>

      <div className="destination-page-grid">
        {destinations.map((destination) => (
          <div key={destination.slug} id={destination.slug} className="destination-detail-card">
            <div className="destination-image-wrap">
              <Image src={destination.image} alt={destination.name} fill className="cover-image" />
            </div>
            <div className="destination-detail-body">
              <div className="meta-row">
                <span className="pill">{destination.bestTime}</span>
              </div>
              <h2>{destination.name}</h2>
              <p>{destination.blurb}</p>
              <ul className="check-list compact">
                {destination.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <Link href="/tours" className="text-link">
                Explore tours →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
