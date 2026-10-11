'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { Tour } from '@/data/site';

export default function TourDetailBookingCard({ tour }: { tour: Tour }) {
  const [travelers, setTravelers] = useState(2);
  const [travelDate, setTravelDate] = useState('');

  const total = useMemo(() => tour.price * travelers, [tour.price, travelers]);
  const bookingUrl = `/payment?tour=${encodeURIComponent(tour.slug)}&travelers=${travelers}${travelDate ? `&date=${encodeURIComponent(travelDate)}` : ''}`;

  return (
    <div className="sticky-card">
      <div className="booking-header">
        <div>
          <p>From</p>
          <h3>${tour.price} <span>/ person</span></h3>
        </div>
        <span className="rating">★ {tour.rating}</span>
      </div>

      <div className="field-group">
        <label htmlFor="travel-date">Travel date</label>
        <input id="travel-date" type="date" value={travelDate} onChange={(event) => setTravelDate(event.target.value)} />
      </div>

      <div className="field-group">
        <label htmlFor="travelers">Number of travelers</label>
        <input id="travelers" type="number" min={1} max={12} value={travelers} onChange={(event) => setTravelers(Number(event.target.value) || 1)} />
      </div>

      <div className="price-summary-card">
        <div>
          <span>Subtotal</span>
          <strong>${total}</strong>
        </div>
        <div>
          <span>Taxes</span>
          <strong>${Math.round(total * 0.08)}</strong>
        </div>
        <div className="total-row">
          <span>Total</span>
          <strong>${Math.round(total * 1.08)}</strong>
        </div>
      </div>

      <Link href={bookingUrl} className="button primary block">
        Book Now
      </Link>
    </div>
  );
}
