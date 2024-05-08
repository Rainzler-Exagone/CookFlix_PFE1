import { getServerSession } from "next-auth";
import { Children, ReactNode } from "react";
import Navbar from "../../components/Navbar"
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card"

 import { redirect } from "next/navigation";


export default async function HomeLayout({children}:{children : ReactNode}){

  const session = getServerSession();

   return(
   
<>

         <body >
         <Navbar/>
            
            {children}
         </body>

</>
    
   )
    

}