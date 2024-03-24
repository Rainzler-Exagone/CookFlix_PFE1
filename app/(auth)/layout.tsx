import Image from "next/image";
import { ReactNode } from "react";
import cinema from "@/public/recipe.jpg"



export default function AuthLayout({children} : {children : ReactNode}){
   return(
    <div className="relative h-screen w-screen flex flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image 
       src={cinema}
       alt="cinema"
       className="hidden sm:flex sm:object-cover -z-10 brightness-50" 
       priority 
       fill 
       /> 
       <h1 className="absolute left-4 top-4 text-4xl">Cookflix</h1>
      {children}
    </div>
      );
}