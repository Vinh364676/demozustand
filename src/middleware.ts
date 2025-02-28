import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n/setting';


export default createMiddleware({
  // Các locale được hỗ trợ
  locales: locales,
  defaultLocale: defaultLocale,
  localeDetection: true
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};