import { NextResponse } from 'next/server';

type ResponseData = {
  message?: string;
  score: number;
};

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { message: 'Token is required', score: 0 },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: 'POST',
      }
    );

    const data = await response.json();

    if (!data.success) {
      return NextResponse.json(
        { message: 'Invalid token', score: 0 },
        { status: 400 }
      );
    }

    return NextResponse.json({ score: data.score });
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return NextResponse.json(
      { message: 'Error verifying reCAPTCHA', score: 0 },
      { status: 500 }
    );
  }
} 