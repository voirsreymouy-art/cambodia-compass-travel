import { NextResponse } from 'next/server';
import { setAdminSession } from '@/lib/auth';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (email === 'admin@cambodiacompasstravel.com' && password === 'Cambodia2025!') {
    const response = NextResponse.json({ success: true });
    setAdminSession(response);
    return response;
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
