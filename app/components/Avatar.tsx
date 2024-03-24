import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar" 

export default async function AvatarIcon (){
    const session = await getServerSession(authOptions)
    return (
        <div>
            
        <Avatar>
  <AvatarImage src={session?.user?.image} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
        </div>

    )
}