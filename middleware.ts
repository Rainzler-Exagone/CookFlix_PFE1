import { NextResponse } from "next/server"

export { default } from "next-auth/middleware"

export function middleware(request:Request) {
  return NextResponse.redirect(new URL("/",request.url))
}


export const config = {
  matcher: ["/recipe/:path*",'/seed','/profile'],
}