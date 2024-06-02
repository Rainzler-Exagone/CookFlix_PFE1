import { NextResponse } from "next/server"

export { default } from "next-auth/middleware"
import { cookies } from "next/headers"


export async function middleware(request:Request) {
   
  const cookieStore = cookies()
  let theme = cookieStore.get('next-auth.session-token')
   if (!theme) {
    
    return NextResponse.redirect(new URL("/",request.url))
   }
    
  }


export const config = {
  matcher: ["/recipe/:path*",'/profile'],
}