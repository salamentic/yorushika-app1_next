// middleware.ts
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

// Run on all app routes except _next, api and files with a dot
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
