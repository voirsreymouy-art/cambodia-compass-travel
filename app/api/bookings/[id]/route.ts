import { NextResponse } from 'next/server';
import { createBooking, generateReference } from '@/lib/bookings';

export async function POST(request: Request) {
  const body = await request.json();

  const booking = {
    id: crypto.randomUUID(),
    reference: generateReference(),
    tour: body.tour || 'Custom itinerary',
    customerName: body.customerName || 'Traveler',
    email: body.email || '',
    phone: body.phone || '',
    nationality: body.nationality || '',
    travelDate: body.travelDate || new Date().toISOString(),
    travelers: Number(body.travelers || 1),
    totalPrice: Number(body.totalPrice || 0),
    paymentStatus: 'Pending',
    bookingStatus: 'Pending',
    specialRequests: body.specialRequests || '',
    createdAt: new Date().toISOString(),
  };

  const created = await createBooking(booking);
  return NextResponse.json({ success: true, booking: created });
}
