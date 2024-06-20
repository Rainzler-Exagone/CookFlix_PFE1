import type { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "./db";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";
import { compare } from "bcrypt";
import { redirect } from "next/navigation";
import { getUserCredentials } from "../actions/meal";




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
          email: {},
          password: {}
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied

          // const res = await getUserCredentials(credentials?.email as string,  credentials?.password as string)
          const res = await fetch("http://localhost:3000/api/login",{
            method:"POST",
            headers:{
              "Content-type":"application/json"
            },
            body:JSON.stringify({
              email:credentials?.email,
              password: credentials?.password
            })
          })
               


    
 
          
    
        // const user = await resa.json()
        
        
        

    
        const isEmpty = (obj:any) => {
          return Object.keys(obj).length === 0;
        };


        const user = await res.json();

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
       
       
        

    
        
   

       


      
  
        }
      }),
    ],
    callbacks: {
      async jwt({ token, user }) {
    
        return { ...token, ...user };
        
      },
      async session({ session, token, user }) {
        session.user = token as any;
        return session;
      },
    },
    
    session: {
        strategy: 'jwt'
      },
      secret : process.env.NEXTAUTH_SECRET,
      debug : process.env.NODE_ENV === 'development',

      

} satisfies NextAuthOptions