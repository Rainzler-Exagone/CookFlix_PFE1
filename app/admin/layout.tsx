import { ReactNode } from "react";
import Navbar from "../../app/components/Navbar"
import { Toaster } from "@/components/ui/toaster";
import Footer from "../components/Footer";



export default async function HomeLayout({children}:{children : ReactNode}){

  
   return(
   
<>

         <body >
         <Navbar/>
            
           <main> {children}</main>
           <Toaster/>
         <Footer/>
         </body>

</>
    
   )
    

}