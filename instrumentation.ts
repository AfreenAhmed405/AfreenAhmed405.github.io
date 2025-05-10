import * as Sentry from '@sentry/nextjs';

export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    Sentry.init({
      dsn: process.env.SENTRY_DSN || "https://719176225ef96e3c423294841fbb4bca@o4507426507456512.ingest.us.sentry.io/4507426508832768",
      tracesSampleRate: 1.0,
      debug: false,
      enabled: process.env.NODE_ENV === 'production',
      integrations: [],
    });
  
    // Server-side error hook for RSC support
    return {
      onRequestError: Sentry.captureRequestError,
    };
  }
  
  return {};
}
