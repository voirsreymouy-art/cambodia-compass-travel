import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export function isAdminAuthenticated() {
  const cookieStore = cookies();
  return cookieStore.get('admin_session')?.value === 'authenticated';
}

export function setAdminSession(response: NextResponse) {
  response.cookies.set('admin_session', 'authenticated', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
  });
}
