import { getServerSession } from "next-auth";
import { Children, ReactNode } from "react";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card"

 import { redirect } from "next/navigation";
import Footer from "@/app/components/Footer";
import Navbar from "../components/Navbar";


export default async function HomeLayout({children}:{children : ReactNode}){

  const session = getServerSession();

   return(
   
<>

         <body >
         <Navbar/>
            
            {children}
            <Footer/>
         </body>

</>
    
   )
    

}