import Link from 'next/link';
import Image from 'next/image';
import { destinations, testimonials, tours } from '@/data/site';

export default function HomePage() {
  const featuredTours = tours.filter((tour) => tour.featured);

  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <p className="eyebrow">A journey through living heritage</p>
          <h1>Discover the Soul of Cambodia</h1>
          <p className="hero-subtitle">
            Explore ancient temples, riverside towns, island escapes, and warm local hospitality with expertly curated adventures.
          </p>
          <div className="hero-actions">
            <Link href="/tours" className="button primary">
              Explore Journeys
            </Link>
            <Link href="/destinations" className="button secondary light">
              View Destinations
            </Link>
          </div>
          <div className="hero-stats">
            <div>
              <strong>12+</strong>
              <span>Years local expertise</span>
            </div>
            <div>
              <strong>4.9/5</strong>
              <span>Traveler satisfaction</span>
            </div>
            <div>
              <strong>6K+</strong>
              <span>Memories made</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-header split">
          <div>
            <p className="eyebrow text-accent">Featured Expeditions</p>
            <h2>Handpicked journeys for curious travelers</h2>
          </div>
          <Link href="/tours" className="text-link">
            See all journeys →
          </Link>
        </div>

        <div className="tour-carousel">
          {featuredTours.map((tour) => (
            <article key={tour.slug} className="tour-card featured-tour">
              <div className="tour-image-wrap">
                <Image src={tour.images[0]} alt={tour.title} fill className="cover-image" />
              </div>
              <div className="tour-card-body">
                <div className="meta-row">
                  <span className="pill">{tour.destination}</span>
                  <span className="rating">★ {tour.rating}</span>
                </div>
                <h3>{tour.title}</h3>
                <div className="meta-row subtle">
                  <span>{tour.duration} days</span>
                  <span>From ${tour.price}</span>
                </div>
                <p>{tour.description}</p>
                <Link href={`/tours/${tour.slug}`} className="text-link">
                  Learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <div className="section-header centered">
            <p className="eyebrow text-accent">Why travelers choose us</p>
            <h2>Thoughtful planning, unforgettable moments</h2>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <span className="feature-icon">🧭</span>
              <h3>Local expert guides</h3>
              <p>Meet people who know Cambodia beyond the postcards, from hidden pagodas to family-run eateries.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🤝</span>
              <h3>Small groups</h3>
              <p>Enjoy a more personal journey with better access, deeper connection, and flexible pacing.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📅</span>
              <h3>Flexible booking</h3>
              <p>Adjust dates, add extras, and plan a trip that fits your travel rhythm with ease.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🔒</span>
              <h3>Secure payment</h3>
              <p>Book confidently with transparent pricing and trusted payment methods for every journey.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-header split">
          <div>
            <p className="eyebrow text-accent">Popular destinations</p>
            <h2>Explore Cambodia's most enchanting places</h2>
          </div>
          <Link href="/destinations" className="text-link">
            Discover all destinations →
          </Link>
        </div>

        <div className="destination-grid">
          {destinations.map((destination) => (
            <Link key={destination.name} href={`/destinations#${destination.slug}`} className="destination-card">
              <div className="destination-image-wrap">
                <Image src={destination.image} alt={destination.name} fill className="cover-image" />
              </div>
              <div className="destination-overlay">
                <h3>{destination.name}</h3>
                <span>{destination.blurb}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section alt-bg">
        <div className="container">
          <div className="section-header centered">
            <p className="eyebrow text-accent">Traveler stories</p>
            <h2>Real moments from the road</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((review) => (
              <div key={review.name} className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>"{review.comment}"</p>
                <div className="reviewer">
                  <strong>{review.name}</strong>
                  <span>{review.origin}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="cta-banner">
          <div>
            <p className="eyebrow text-accent">Ready to begin?</p>
            <h2>Plan your next unforgettable journey through Cambodia.</h2>
          </div>
          <Link href="/tours" className="button primary">
            Start Planning
          </Link>
        </div>
      </section>
    </>
  );
}