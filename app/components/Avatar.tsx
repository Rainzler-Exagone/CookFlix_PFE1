"use client"
import { useSession } from "next-auth/react";
import { authOptions } from "../utils/auth";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Avatar } from "@mui/material";

export default  function AvatarIcon() {
    // const session = await getServerSession(authOptions)
    const {data:session} = useSession()
    const avatar = session?.user?.image as string
    
       
        
    
    

    return (
        <>
        <Avatar alt="Remy Sharp" src={avatar} />
          
        </>
    )
}