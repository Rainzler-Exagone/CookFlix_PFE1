import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import FacebookButton from "@/app/components/FacebookSignInButton"
import GoogleButton from "@/app/components/GoogleSignInButton"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";
import Form from "@/app/components/SignInForm"
import { toast } from "react-toastify";

export default async function Login() {

    const session = await getServerSession(authOptions)
    if (session) {
        return redirect('/home')
    }
    
    return (
        <div className="mt-20 rounded-xl bg-black/45 py-10 px-6 md:max-w-sm  md:px-14">
           
             <Form/>
            <div className="text-gray-500 text-sm mt-2">
                New to Instantcook ? {" "}<Link className="text-white hover:underline " href="/signup">Sign up!</Link>
            </div>

            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                <FacebookButton />
                <GoogleButton />

            </div>
           
        </div>
    )
}