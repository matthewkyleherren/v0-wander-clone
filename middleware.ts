import { NextRequest, NextResponse } from "next/server"

const protectedRoutes = ["/dashboard", "/account", "/bookings"]
const authRoutes = ["/login", "/signup"]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const sessionCookie = request.cookies.get("better-auth.session_token")?.value
  const isAuthenticated = !!sessionCookie

  // Redirect authenticated users away from auth pages
  if (authRoutes.some((route) => pathname.startsWith(route))) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/", request.url))
    }
    return NextResponse.next()
  }

  // Protect routes that require authentication
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!isAuthenticated) {
      const loginUrl = new URL("/login", request.url)
      loginUrl.searchParams.set("callbackUrl", pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
