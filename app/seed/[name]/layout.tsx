import { getServerSession } from "next-auth";
import { Children, ReactNode } from "react";
import Navbar from "../../components/Navbar";


export default async function HomeLayout({children}:{children : ReactNode}){


   return(
   
<>


         <Navbar />
         <main >
            {children}
         </main>

</>
    
   )
    

}