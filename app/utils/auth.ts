import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./db";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";


export const authOptions = {
 adapter:PrismaAdapter(prisma),
   providers: [
    FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID as string,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
      }),
      EmailProvider({
        server: {
          host: process.env.EMAIL_SERVER_HOST,
          port: process.env.EMAIL_SERVER_PORT,
          auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD
          }
        },
        from: process.env.EMAIL_FROM
      }),
      CredentialsProvider({
        
        name: "Credentials",
        
        credentials: {
          email : {label : "Email", type : "email"},
          password : {label : "Password", type : "password"}
        },
        async authorize(credentials, req) {
          const user = { id: "1", name: "rainzler", email: "jsmith@example.com" }
          const {email,password} = credentials as {
            email : String,
            password : String
          };
          
    
          if (email == "yasseraimeur0@gmail.com" && password !== "rainzler2003@") {
            // Any object returned will be saved in `user` property of the JWT
            return user
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null
    
            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        }
      })
    ],
    pages: {
        signIn: '(auth)/login',
      },
    session: {
        strategy: 'jwt'
      },
      secret : process.env.NEXTAUTH_SECRET,
      debug : process.env.NODE_ENV === 'development',
    

} satisfies NextAuthOptions