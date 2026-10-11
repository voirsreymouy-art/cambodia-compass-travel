'use client';

import { FormEvent, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { tours } from '@/data/site';

export default function PaymentPage() {
  const params = useSearchParams();
  const selectedTour = tours.find((tour) => tour.slug === params.get('tour')) || tours[0];
  const defaultTravelers = Number(params.get('travelers') || '2');
  const defaultDate = params.get('date') || '';

  const [travelDate, setTravelDate] = useState(defaultDate);
  const [travelers, setTravelers] = useState(defaultTravelers);
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nationality, setNationality] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [submitted, setSubmitted] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  const subtotal = useMemo(() => selectedTour.price * travelers, [selectedTour.price, travelers]);
  const taxes = Math.round(subtotal * 0.08);
  const total = subtotal + taxes;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tour: selectedTour.title,
        customerName,
        email,
        phone,
        nationality,
        travelDate,
        travelers,
        totalPrice: total,
        specialRequests,
      }),
    });

    if (!response.ok) {
      alert('Unable to create booking. Please try again.');
      return;
    }

    const data = await response.json();
    setBookingReference(data.booking.reference);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="section container narrow">
        <div className="confirmation-card">
          <p className="eyebrow text-accent">Booking confirmed</p>
          <h1>Thanks, {customerName || 'traveler'}.</h1>
          <p>Your booking reference is <strong>{bookingReference}</strong>.</p>
          <p>A confirmation email has been sent to <strong>{email}</strong>.</p>
          <a href="/tours" className="button primary">
            Explore more journeys
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="section container payment-layout">
      <div className="payment-main">
        <p className="eyebrow text-accent">Booking & payment</p>
        <h1>Reserve your Cambodia adventure</h1>

        <div className="stepper">
          <span className="active">Review</span>
          <span>Traveler details</span>
          <span>Payment</span>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="content-block">
            <h2>1. Review your trip</h2>
            <div className="trip-summary">
              <div>
                <span>Tour</span>
                <strong>{selectedTour.title}</strong>
              </div>
              <div>
                <span>Date</span>
                <strong>{travelDate || 'Select a date'}</strong>
              </div>
              <div>
                <span>Travelers</span>
                <strong>{travelers}</strong>
              </div>
            </div>
          </div>

          <div className="content-block">
            <h2>2. Traveler details</h2>
            <div className="form-grid">
              <div className="field-group">
                <label htmlFor="name">Full name</label>
                <input id="name" type="text" value={customerName} onChange={(event) => setCustomerName(event.target.value)} required />
              </div>
              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
              </div>
              <div className="field-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} required />
              </div>
              <div className="field-group">
                <label htmlFor="nationality">Nationality</label>
                <input id="nationality" type="text" value={nationality} onChange={(event) => setNationality(event.target.value)} required />
              </div>
              <div className="field-group full-width">
                <label htmlFor="requests">Special requests</label>
                <textarea id="requests" rows={4} value={specialRequests} onChange={(event) => setSpecialRequests(event.target.value)} />
              </div>
            </div>
          </div>

          <div className="content-block">
            <h2>3. Payment</h2>
            <div className="payment-options">
              <label>
                <input type="radio" name="payment" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} />
                Credit / Debit Card
              </label>
              <label>
                <input type="radio" name="payment" checked={paymentMethod === 'aba'} onChange={() => setPaymentMethod('aba')} />
                ABA Pay
              </label>
              <label>
                <input type="radio" name="payment" checked={paymentMethod === 'khqr'} onChange={() => setPaymentMethod('khqr')} />
                KHQR
              </label>
            </div>

            {paymentMethod === 'card' ? (
              <div className="form-grid">
                <div className="field-group full-width">
                  <label htmlFor="card-number">Card number</label>
                  <input id="card-number" type="text" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="field-group">
                  <label htmlFor="expiry">Expiry</label>
                  <input id="expiry" type="text" placeholder="MM/YY" />
                </div>
                <div className="field-group">
                  <label htmlFor="cvc">CVC</label>
                  <input id="cvc" type="text" placeholder="123" />
                </div>
              </div>
            ) : (
              <div className="payment-placeholder">
                <p>Local payment instructions will be displayed after confirmation.</p>
              </div>
            )}
          </div>

          <button type="submit" className="button primary block">
            Pay ${total} USD
          </button>
        </form>
      </div>

      <aside className="detail-side">
        <div className="sticky-card">
          <h3>Price summary</h3>
          <div className="price-summary-card">
            <div>
              <span>Subtotal</span>
              <strong>${subtotal}</strong>
            </div>
            <div>
              <span>Taxes</span>
              <strong>${taxes}</strong>
            </div>
            <div className="total-row">
              <span>Total</span>
              <strong>${total}</strong>
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="travel-date">Travel date</label>
            <input id="travel-date" type="date" value={travelDate} onChange={(event) => setTravelDate(event.target.value)} required />
          </div>

          <div className="field-group">
            <label htmlFor="travelers-count">Travelers</label>
            <input id="travelers-count" type="number" min={1} value={travelers} onChange={(event) => setTravelers(Number(event.target.value) || 1)} />
          </div>
        </div>
      </aside>
    </section>
  );
}
