"use client"
import { useSession } from "next-auth/react";
import { authOptions } from "../utils/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default  function AvatarIcon() {
    // const session = await getServerSession(authOptions)
    const {data:session} = useSession()
    
    
    
    

    return (
        <>
           <Avatar>
  <AvatarImage src={session?.user?.image} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

        </>
    )
}