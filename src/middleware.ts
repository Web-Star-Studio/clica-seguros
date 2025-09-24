import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/dashboard') {
    return NextResponse.redirect(new URL('/dashboard/contratos', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard'],
}
