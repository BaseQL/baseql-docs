import { NextResponse } from 'next/server'

import analyticsMiddleware from "./lib/middleware/analyticsMiddleware"

export async function middleware(request) {
    const response = NextResponse.next();
    return await analyticsMiddleware(request, response);
}

export const config = {
    matcher: [
      {
        /*
        * Match all request paths except for the ones starting with:
        * - api (API routes)
        * - _next/static (static files)
        * - _next/image (image optimization files)
        * - *.ico,*.png,*.svg (image files)
        */
        source: '/((?!api|_next/static|_next/image|.*.ico|.*.png|.*.svg).*)',
        missing: [
          { type: 'header', key: 'next-router-prefetch' },
          { type: 'header', key: 'purpose', value: 'prefetch' },
        ],
      }
    ],
  }