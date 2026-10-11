import Link from 'next/link';
import Image from 'next/image';
import type { Tour } from '@/data/site';

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="tour-card">
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
          <span>{tour.category}</span>
        </div>
        <p>{tour.description}</p>
        <div className="tour-footer">
          <strong>From ${tour.price}</strong>
          <Link href={`/tours/${tour.slug}`} className="text-link">
            View details →
          </Link>
        </div>
      </div>
    </article>
  );
}
