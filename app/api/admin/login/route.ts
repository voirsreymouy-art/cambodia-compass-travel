import { redirect } from 'next/navigation';
import AdminBookingsTable from '@/components/AdminBookingsTable';
import { isAdminAuthenticated } from '@/lib/auth';
import { listBookings } from '@/lib/bookings';

export const metadata = {
  title: 'Admin Bookings | Cambodia Compass Travel',
  description: 'Manage bookings, confirm trips, and monitor payment status.',
};

export default async function AdminBookingsPage() {
  if (!isAdminAuthenticated()) {
    redirect('/admin/login');
  }

  const bookings = await listBookings();

  return (
    <section className="section container">
      <div className="page-header admin-header">
        <div>
          <p className="eyebrow text-accent">Admin dashboard</p>
          <h1>Bookings overview</h1>
        </div>
        <a href="/admin/login" className="button secondary">
          Switch account
        </a>
      </div>
      <AdminBookingsTable bookings={bookings} />
    </section>
  );
}
