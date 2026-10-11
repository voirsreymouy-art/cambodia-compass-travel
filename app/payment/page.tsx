import { NextResponse } from 'next/server';
import { updateBooking } from '@/lib/bookings';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  const updated = await updateBooking(params.id, body);

  if (!updated) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
  }

  return NextResponse.json({ success: true, booking: updated });
}
