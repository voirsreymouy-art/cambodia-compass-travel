'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get('email') || '');
    const password = String(form.get('password') || '');

    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      setError('Invalid admin credentials');
      return;
    }

    router.push('/admin/bookings');
    router.refresh();
  }

  return (
    <section className="section container narrow">
      <div className="auth-card">
        <p className="eyebrow text-accent">Admin access</p>
        <h1>Sign in</h1>
        {error ? <p className="form-error">{error}</p> : null}
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" placeholder="admin@cambodiacompasstravel.com" required />
          </div>
          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" name="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="button primary block">
            Continue to admin dashboard
          </button>
        </form>
      </div>
    </section>
  );
}
