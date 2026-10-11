import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { tours } from '@/data/site';
import TourDetailBookingCard from '@/components/TourDetailBookingCard';

export default function TourDetailPage({ params }: { params: { slug: string } }) {
  const tour = tours.find((item) => item.slug === params.slug);

  if (!tour) {
    notFound();
  }

  return (
    <>
      <section className="page-banner page-banner-tour">
        <div className="container narrow">
          <p className="eyebrow text-accent">{tour.destination}</p>
          <h1>{tour.title}</h1>
          <div className="meta-row subtle light">
            <span>{tour.duration} days</span>
            <span>Category: {tour.category}</span>
            <span>★ {tour.rating}</span>
          </div>
        </div>
      </section>

      <section className="section container detail-layout">
        <div className="detail-main">
          <div className="gallery-grid">
            {tour.images.map((image, index) => (
              <div key={index} className={`gallery-item item-${index + 1}`}>
                <Image src={image} alt={`${tour.title} ${index + 1}`} fill className="cover-image" />
              </div>
            ))}
          </div>

          <div className="content-block">
            <h2>Overview</h2>
            <p>{tour.description}</p>
          </div>

          <div className="content-block">
            <h2>Itinerary</h2>
            <div className="itinerary-list">
              {tour.itinerary.map((day) => (
                <div key={day.day} className="itinerary-item">
                  <div className="day-pill">Day {day.day}</div>
                  <div>
                    <h3>{day.title}</h3>
                    <p>{day.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-columns">
            <div className="content-block">
              <h2>Included</h2>
              <ul className="check-list">
                {tour.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="content-block">
              <h2>Excluded</h2>
              <ul className="cross-list">
                {tour.excluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="content-block">
            <h2>Meeting point</h2>
            <p>{tour.meetingPoint}</p>
          </div>

          <div className="content-block">
            <h2>FAQs</h2>
            <div className="faq-stack">
              {tour.faqs.map((faq) => (
                <div key={faq.question} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="detail-side">
          <TourDetailBookingCard tour={tour} />
        </aside>
      </section>
    </>
  );
}
