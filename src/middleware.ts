import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)

  //Este macher es el original
  // matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
  
  //Este macher hace que login quede excluido del enrutamiento de next-intl
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*|auth|login|register).*)'
};