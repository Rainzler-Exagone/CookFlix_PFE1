"use client"

import { Button } from "@/components/ui/button"
import facebookIcon from "@/public/facebook.png"
import { signIn } from "next-auth/react"
import Image from "next/image"

export default function FacebookButton (){
  return (
    <Button onClick={()=>signIn("facebook")} variant="outline" size="icon">
                <Image src={facebookIcon} alt="google" className="w-7 h-7" />
                </Button>
  )
}