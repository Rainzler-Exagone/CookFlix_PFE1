import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import FacebookButton from "@/app/components/FacebookSignInButton"
import GoogleButton from "@/app/components/GoogleSignInButton"
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

export default async function Login() {

    const session = await getServerSession(authOptions)
    if (session) {
        return redirect('/home')
    }
    return (
        <div className="mt-32 rounded-xl bg-black/45 py-10 px-6 md:max-w-sm  md:px-14">
            <form method="post" action="/api/auth/signin">
                <h1 className="text-3xl font-semibold  text-white">Login</h1>
                <div className="space-y-4 mt-5">
                    <Input type="email" name="emai" placeholder="Email" className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block" />
                    <Input type="password" name="password" placeholder="Password" className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full  inline-block"/>
                    <Button type="submit" variant="secondary" className="w-full bg-yellow-300"  > Sign In</Button>

                </div>
            </form>
            <div className="text-gray-500 text-sm mt-2">
                New to Cookflix ? {" "}<Link className="text-white hover:underline " href="/signup">Sign up!</Link>
            </div>

            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
                <FacebookButton />
                <GoogleButton />

            </div>
        </div>
    )
}