import { ReactNode } from "react";
import Navbar from "../../app/components/Navbar"



export default async function HomeLayout({children}:{children : ReactNode}){

  
   return(
   
<>

         <body >
         <Navbar/>
            
            {children}
         </body>

</>
    
   )
    

}