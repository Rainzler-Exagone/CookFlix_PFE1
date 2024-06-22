import { NextResponse } from "next/server"

export { default } from "next-auth/middleware"
import { cookies } from "next/headers"


export async function middleware(request:Request) {
   let id
   
  const cookieStore = cookies()
  let theme = cookieStore.get('next-auth.session-token')
   if (!theme && request.url==='http://localhost:3000/recipes') {
    
    return NextResponse.redirect(new URL("/recipes",request.url))
   }
    
   if (!theme && request.url===`http://localhost:3000/recipe/${id}`) {
    
    return NextResponse.redirect(new URL(`/recipe/${id}`,request.url))
   }
    
  }


export const config = {
  matcher: ["/recipe/:path*",'/profile'],
}