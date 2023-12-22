import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { updateTokens } from 'lib/data/auth'

export async function middleware(request: NextRequest) {
  // AUTHENTICATION
  if (
    request.nextUrl.pathname.startsWith('/admin') ||
    request.nextUrl.pathname.startsWith('/login')
  ) {
    const accessToken = cookies().get('access_token')
    if (accessToken) {
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
      const refreshToken = cookies().get('refresh_token')
      if (refreshToken) {
        try {
          const response = await updateTokens(request)
          return response
        } catch (error) {
          return NextResponse.redirect(new URL('/login', request.nextUrl))
        }
      } else {
        if (request.nextUrl.pathname !== '/login') {
          return NextResponse.redirect(new URL('/login', request.nextUrl))
        }
      }
    }
  }
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
}
