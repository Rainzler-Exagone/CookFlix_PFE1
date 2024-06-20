"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { toast } from "sonner";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


export default function Form (){
   
    const router =useRouter()
    // const {toast}  = useToast()
    const {data:session} = useSession()
 
      
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const response = await signIn("credentials", {
          email: formData.get("email") as string,
          password: formData.get('password'),

          redirect: false,
        });

      if (response?.error) {
        
        toast.error('invalid credentials')
      }
     router.push('/ ')
        
    }

        
   return(
    
    <form method="post"  action="/api/auth/signin" onSubmit={handleSubmit}>
    <h1 className="text-3xl font-semibold flex justify-center items-center  text-white">Login</h1>
    <div className="space-y-4 mt-5 text-white">
        <Input type="email" name="email" placeholder="Email" className="bg-[#333] text-white placeholder:text-xs placeholder:text-gray-400 w-full inline-block" />
        <Input  type="password" name="password"  placeholder="Password" className="bg-[#333] text-white placeholder:text-xs placeholder:text-gray-400 w-full  inline-block"/>
    
    </div>
        <Button  type="submit" variant="secondary" className="w-full bg-yellow-300 mt-4"> Sign In</Button>
    </form>
    
   )
}