import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // AUTHENTICATION
  if (
    request.nextUrl.pathname.startsWith('/admin') ||
    request.nextUrl.pathname.startsWith('/login')
  ) {
    const isAdmin = cookies().get('access_token')

    if (isAdmin) {
      if (
        request.nextUrl.pathname === '/admin' ||
        request.nextUrl.pathname === '/admin/dashboard' ||
        request.nextUrl.pathname === '/login'
      ) {
        return NextResponse.redirect(
          new URL('/admin/booking-management', request.nextUrl)
        )
      }
    } else {
      if (request.nextUrl.pathname !== '/login') {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
      }
    }
  }
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
}
