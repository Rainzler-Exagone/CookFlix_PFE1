import { getServerSession } from "next-auth";
import { Children, ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar-A";
import {IngredientLists} from "../components/Input"
import Poster from "../components/CookPoster";

export default async function HomeLayout({children}:{children : ReactNode}){
    const session = await getServerSession(authOptions)

    if(session){
       return redirect("/home")
    }
   return(
   
<>


         <Navbar />
         <main >
            {children}
         </main>

</>
    
   )
    

}