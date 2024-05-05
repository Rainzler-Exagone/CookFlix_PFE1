"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useSession,signOut } from "next-auth/react";

const SignInButton = () =>{
    const{data:session} = useSession();
 
            if(session && session?.user){
                return (
                    <>
                    <Button type="submit" variant="destructive" onClick={()=>signOut()}></Button>
                    </>
                )
            }
    
        return(
            <Button onClick={()=>signIn()}>Sign In</Button>
        )
    
}

export default SignInButton;