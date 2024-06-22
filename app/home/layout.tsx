import { getServerSession } from "next-auth";
import { Children, ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";
import { Toaster } from "sonner";

export default async function HomeLayout({children}:{children : ReactNode}){
    const session = await getServerSession(authOptions)
    
    console.log('this is session :' + session);
    
    
   
    if(!session){
       return redirect("/guest")
    }else{
      
    if (session.user?.email=="admin@gmail.com") {
      return redirect("/admin")
    }
      
      return(
         
         <>
         
         
                  <Navbar />
                  <main >
                     <Toaster/>
                     {children}
                  </main>
                  
         
         </>
             
            )
    }
    
    

}