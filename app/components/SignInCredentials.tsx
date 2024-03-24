"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export  default function SingInCredentials(){
    return (
        <>
         <Button type="submit" variant="secondary" className="w-full bg-yellow-300" onClick={()=>signIn()}   > Sign In</Button>
        </>
)
    
} 