import { getServerSession } from "next-auth";
import { Children, ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";
import {IngredientLists} from "../components/Input"

export default async function HomeLayout({children}:{children : ReactNode}){
    const session = await getServerSession(authOptions)

    if(!session){
       return redirect("/login")
    }
   return(
    <>
    <Navbar/>
    <main className="w-full max-w-7xl mx-auto bg-white sm:px-6 lg:px-8">
        {/* {children} */}
            <IngredientLists/>
    </main>
    </>
   )
    

}