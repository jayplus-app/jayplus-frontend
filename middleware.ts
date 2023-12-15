import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // AUTHENTICATION
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const is_admin = false

    if (
      request.nextUrl.pathname === '/admin' ||
      request.nextUrl.pathname === '/admin/login'
    ) {
      if (is_admin) {
        return NextResponse.redirect(
          new URL('/admin/dashboard', request.nextUrl)
        )
      }
    }

    if (!is_admin) {
      if (request.nextUrl.pathname !== '/admin/login') {
        return NextResponse.redirect(new URL('/admin/login', request.nextUrl))
      }
    }
  }
}

export const config = {
  matcher: '/admin/:path*',
}
