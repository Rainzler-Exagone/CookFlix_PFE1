import Image from "next/image";
import { Button } from "@/components/ui/button"
import { authOptions } from "./utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function Home() {
 const session = await getServerSession(authOptions)

 if(!session){
   return redirect('/login')
 }
 else{
   return redirect('/home')
 }
}

