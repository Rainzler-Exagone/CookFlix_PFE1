
import prisma from "../utils/db"
import { getRecipeById } from "@/app/components/functions/Recipe_Meal" 
import Link from "next/link";
import Profile from "../components/Profile";
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { authOptions } from "../utils/auth";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Heart, LogOut, Settings, User } from "lucide-react";
import { signOut } from "next-auth/react";
import AvatarIcon from "../components/Avatar";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import DialogProfie from "../components/AlertDialog";

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { GiGamepadCross } from "react-icons/gi";




export default  function Seed(){
   

    // useEffect(() => {
    //     getRecipeById(params.id)
    //     .then((data)=>console.log(data)
    //     )
    //     .catch((error)=>console.log(error)
    //     )
    // }, []);
 
        async function update() {
          "use server"
          const data =  await prisma.meal.update({
            where:{
              name:'ss'
            },
            data:{
                 name:'Loubya machto',
                 image:'https://utfs.io/f/167c239c-1d80-46fd-bf44-1c3f416330e0-k5t8lj.jpg'

            }
          })
        }

    return(
        <>


  
      <form action={update}>
        <button type="submit">update</button>
      </form>

        </>
    )
}

