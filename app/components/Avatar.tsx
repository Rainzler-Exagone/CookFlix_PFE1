"use client"
import { useSession } from "next-auth/react";
import { authOptions } from "../utils/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default  function AvatarIcon() {
    // const session = await getServerSession(authOptions)
    const {data:session} = useSession()
    const avatar = session?.user?.image as string
    
    
    
    

    return (
        <>
           <Avatar>
  <AvatarImage src={avatar} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

        </>
    )
}