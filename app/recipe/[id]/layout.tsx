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


export default async function HomeLayout({children}:{children : ReactNode}){


   return(
   
<>

         <Navbar/>
         <main >
            {children}
         </main>

</>
    
   )
    

}