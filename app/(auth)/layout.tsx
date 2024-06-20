import Image from "next/image";
import { ReactNode } from "react";
import background from "@/public/recipe.jpg"
import Logo from "@/app/components/Logo"
import Link from "next/link"
import { Toaster } from "sonner";



export default  function AuthLayout({children} : {children : ReactNode}){

  
   return(
    <div className="relative h-screen w-screen flex flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image 
       src={background}
       alt="background"
       className="hidden sm:flex sm:object-cover -z-10 brightness-50" 
       priority 
       fill 
       />
      <div className="w-screen pl-8 top-4 absolute" > <Logo /></div>
      <Toaster richColors />
      {children}
    </div>
      );
}