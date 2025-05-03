import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const config = {
  recaptcha: {
    siteKey: process.env.VITE_RECAPTCHA_SITE_KEY,
    secretKey: process.env.RECAPTCHA_SECRET_KEY,
  },
} as const;

// Validate required environment variables
const requiredEnvVars = [
  'VITE_RECAPTCHA_SITE_KEY',
  'RECAPTCHA_SECRET_KEY',
] as const;

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
} 