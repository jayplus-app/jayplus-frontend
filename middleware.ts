import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // AUTHENTICATION
  if (
    request.nextUrl.pathname.startsWith('/admin') ||
    request.nextUrl.pathname.startsWith('/login')
  ) {
    const is_admin = true

    if (
      request.nextUrl.pathname === '/admin' ||
      request.nextUrl.pathname === '/admin/dashboard' ||
      request.nextUrl.pathname === '/login'
    ) {
      if (is_admin) {
        return NextResponse.redirect(
          new URL('/admin/booking-management', request.nextUrl)
        )
      }
    }

    if (!is_admin) {
      if (request.nextUrl.pathname !== '/login') {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
      }
    }
  }
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
}
