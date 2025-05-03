import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message?: string;
  score: number;
};

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed', score: 0 });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token is required', score: 0 });
  }

  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: 'POST',
      }
    );

    const data = await response.json();

    if (!data.success) {
      return res.status(400).json({ message: 'Invalid token', score: 0 });
    }

    return res.status(200).json({ score: data.score });
  } catch (error) {
    console.error('Error verifying reCAPTCHA:', error);
    return res.status(500).json({ message: 'Error verifying reCAPTCHA', score: 0 });
  }
} 