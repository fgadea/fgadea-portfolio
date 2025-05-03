import type { Request, Response } from 'express';
import { config } from '../config';

export async function verifyRecaptcha(req: Request, res: Response) {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ message: 'Token is required', score: 0 });
    }

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${config.recaptcha.secretKey}&response=${token}`,
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