"use client"

import { Button } from "@/components/ui/button"
import Google from "../../public/google-48.png"
import { signIn } from "next-auth/react"
import Image from "next/image"

export default function GoogleSignInButton (){
    return(
        <Button onClick={()=>signIn("google",{
            redirect:true,
            callbackUrl:"/home"
        })} variant="outline" size="icon">
        <Image src={Google} alt="google" className="w-6 h-6" />
        </Button>
    )
}