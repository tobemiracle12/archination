import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const signupCookie = request.cookies.get('signup_success')
  const { pathname } = request.nextUrl

  if (pathname === '/signup-success') {
    if (!signupCookie) {
      return NextResponse.redirect(new URL('/auth', request.url))
    }
    return NextResponse.next()
  }

  if (
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/onboarding') ||
    pathname.startsWith('/admin')
  ) {
    if (!token) {
      // return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
  }

  if (
    token &&
    (pathname === '/sign-in' ||
      pathname === '/forgotten-password' ||
      pathname === '/reset-password' ||
      pathname === '/sign-up')
  ) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|api|static|favicon.ico).*)', // Match all paths except assets
  ],
}
