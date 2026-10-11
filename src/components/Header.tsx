import fs from 'fs/promises';
import path from 'path';

export type BookingStatus = 'Pending' | 'Confirmed' | 'Cancelled';
export type PaymentStatus = 'Pending' | 'Paid' | 'Refunded';

export type BookingRecord = {
  id: string;
  reference: string;
  tour: string;
  customerName: string;
  email: string;
  phone: string;
  nationality: string;
  travelDate: string;
  travelers: number;
  totalPrice: number;
  paymentStatus: PaymentStatus;
  bookingStatus: BookingStatus;
  specialRequests: string;
  createdAt: string;
};

const bookingsPath = path.join(process.cwd(), 'data', 'bookings.json');

async function ensureFile() {
  try {
    await fs.access(bookingsPath);
  } catch {
    await fs.mkdir(path.dirname(bookingsPath), { recursive: true });
    await fs.writeFile(bookingsPath, '[]', 'utf8');
  }
}

export async function listBookings(): Promise<BookingRecord[]> {
  await ensureFile();
  const data = await fs.readFile(bookingsPath, 'utf8');
  return JSON.parse(data || '[]');
}

export async function createBooking(record: BookingRecord): Promise<BookingRecord> {
  await ensureFile();
  const bookings = await listBookings();
  bookings.unshift(record);
  await fs.writeFile(bookingsPath, JSON.stringify(bookings, null, 2), 'utf8');
  return record;
}

export async function updateBooking(id: string, updates: Partial<BookingRecord>): Promise<BookingRecord | null> {
  await ensureFile();
  const bookings = await listBookings();
  const index = bookings.findIndex((booking) => booking.id === id);

  if (index === -1) return null;

  bookings[index] = { ...bookings[index], ...updates };
  await fs.writeFile(bookingsPath, JSON.stringify(bookings, null, 2), 'utf8');

  return bookings[index];
}

export function generateReference() {
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `CC-${random}`;
}
