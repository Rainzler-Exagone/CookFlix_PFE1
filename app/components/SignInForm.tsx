"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Form (){

    const [email,setEamil] = useState<null | string>(null)

    async function signInwithEmail() {
        const signInResult = await signIn('email',{
            email:email,
            callbackUrl:`${window.location.origin}`,
            redirect:false,
        })
    }
   return(
    
    <form method="post"  action="/api/auth/signin">
    <h1 className="text-3xl font-semibold  text-white">Login</h1>
    <div className="space-y-4 mt-5">
        <Input type="email" name="email" placeholder="Email" onChange={(e)=>setEamil(e.target.value)} className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block" />
        {/* <Input type="password" name="password" placeholder="Password" className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full  inline-block"/> */}
        <Button type="submit" variant="secondary" className="w-full bg-yellow-300"  > Sign In</Button>
    
    </div>
    </form>
    
   )
}