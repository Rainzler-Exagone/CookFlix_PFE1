import NextAuth from "next-auth/next";


declare module 'next-auth' {
    interface session {
      user:{
        id: string,
        name: string,
        email: string,
        accesstoken:string
      }
    }
}