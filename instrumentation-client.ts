import * as Sentry from '@sentry/nextjs';

// Only initialize in browser environment
if (typeof window !== 'undefined') {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || "https://719176225ef96e3c423294841fbb4bca@o4507426507456512.ingest.us.sentry.io/4507426508832768",
    tracesSampleRate: 1.0,
    replaysOnErrorSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    debug: false,
    enabled: process.env.NODE_ENV === 'production',
    integrations: [
      Sentry.replayIntegration({
        blockAllMedia: false,
        maskAllText: true,
      }),
      Sentry.feedbackIntegration({
        colorScheme: 'system',
      }),
    ],
  });
}

// Client-side hooks for Sentry
export function register() {
  if (typeof window !== 'undefined') {
    return {
      onRequestError: Sentry.captureRequestError,
    };
  }
  return {};
}