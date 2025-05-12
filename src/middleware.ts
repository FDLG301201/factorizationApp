import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
 
const nextIntlMiddleware = createMiddleware(routing);

export async function middleware(req: any) {
  const pathname = req.nextUrl.pathname;
  const isPublic = ['/login', '/register', '/forget-password'].includes(pathname);

  // Utiliza el middleware de next-intl primero para manejar el enrutamiento de idiomas
  const nextIntlResponse = nextIntlMiddleware(req);

  // Si la ruta es pública, permitir el acceso sin verificar la sesión
  if (isPublic) {
    return nextIntlResponse;
  }

  // Obtener el token de la sesión
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Si hay una sesión, permitir el acceso a la ruta protegida
  if (session) {
    return nextIntlResponse;
  }

  // Si no hay sesión, redirigir al usuario a la página de login manteniendo la locale
  const locale = req.nextUrl.locale || routing.defaultLocale;
  const url = new URL(`/login`, req.url);
  return NextResponse.redirect(url);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)

  //Este macher es el original
  // matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
  
  //Este macher hace que login quede excluido del enrutamiento de next-intl
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*|auth|login|register).*)'
};