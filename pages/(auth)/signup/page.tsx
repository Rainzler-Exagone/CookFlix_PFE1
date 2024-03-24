import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {  GithubIcon } from "lucide-react";
import Link from "next/link";
import Google from "@/public/google-48.png"
import Image from "next/image";
import facebookIcon from "@/public/facebook.png"
import { signIn } from "next-auth/react";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";
import FacebookButton from "@/app/components/FacebookSignInButton";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { Checkbox } from "@/components/ui/checkbox"
import { authOptions } from "@/app/utils/auth";
import React from "react";
import SingInCredentials from "@/app/components/SignInCredentials";


export default  async function Signup (){

    const session = await getServerSession(authOptions)
    if(session){
        return redirect('/home')
    }
    return (
        <div className="mt-24 rounded-xl bg-black/45 py-10 px-6 md:max-w-sm  md:px-14">
            <form method="post" action="/api/auth/signin">
                <h1 className="text-3xl font-semibold  text-white">Sign up</h1>
                <div className="space-y-4 mt-5">
                    <Input type="email" id="email" name="email" placeholder="Email" className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"/>
                    <Input type="password"  id="password" name="password" placeholder="Password" className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 mt-3 w-full inline-block"/>
                    <div className="flex items-center gap-3 pb-5">
                    <Checkbox className="ml-1"/>
                    <label htmlFor="Accept" className="text-xs">Accept all Privacy and Policy </label></div>
                    {}
                    <SingInCredentials/>
                </div>
            </form>
            <div className="text-gray-500 text-sm mt-2">
                already have an account ? {" "}<Link className="text-white hover:underline " href="/login">Log in now!</Link>
            </div>

            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                
                <FacebookButton />
                <GoogleSignInButton />
            </div>
        </div>
    )
}