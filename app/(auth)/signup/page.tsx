import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GoogleButton from "../../components/GoogleSignInButton"
import FacebookButton from "@/app/components/FacebookSignInButton";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { Checkbox } from "@/components/ui/checkbox"
import { authOptions } from "@/app/utils/auth";
import React from "react";
import { signIn } from "next-auth/react";
import Form from "@/app/components/SignupForm";


export default  async function Signup (){

    const session = await getServerSession(authOptions)
    if(session){
        return redirect('/home')
    }
    return (
        <div className="mt-20 rounded-xl bg-black/45 py-10 px-6 md:max-w-sm  md:px-14">
            <Form/>
            <div className="text-gray-500 text-sm mt-2">
                already have an account ? {" "}<Link className="text-white hover:underline " href="/login">Log in now!</Link>
            </div>

            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                
                <FacebookButton />
                <GoogleButton />
            </div>
        </div>
    )
}