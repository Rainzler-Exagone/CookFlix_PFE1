import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string | undefined;
      email: string | undefined;
      image: string | undefined
      accessToken: string | undefined;
    };
  }
}