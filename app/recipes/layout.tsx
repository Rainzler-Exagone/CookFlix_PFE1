import { ReactNode } from "react";
import Navbar from "../../app/components/Navbar"
import Footer from "../components/Footer";



export default async function HomeLayout({children}:{children : ReactNode}){

  
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