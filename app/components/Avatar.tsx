import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default async function AvatarIcon() {
    // const session = await getServerSession(authOptions)
    return (
        <>
           <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

        </>
    )
}