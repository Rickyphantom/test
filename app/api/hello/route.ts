import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    Message: 'Hello, next.js!',
  };

  return NextResponse.json(data);
}
