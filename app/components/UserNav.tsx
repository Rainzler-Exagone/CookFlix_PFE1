"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import AvatarIcon from "./Avatar"
import { signOut } from "next-auth/react"
import { Heart, LogOut, Settings, User } from "lucide-react"
import Link from "next/link"
import { Avatar } from "@mui/material"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import Profile from "./Profile"
import DialogProfie from "./AlertDialog"
import { AlertDialogTrigger } from "@/components/ui/alert-dialog"



export default function UserNav() {

  return (
    <>
      <div>
      <Dialog> {/* 🔴 The dialog provider outside of the DropdownMenuContent */}
      <DropdownMenu>
       
        <DropdownMenuTrigger>
            <AvatarIcon />
          </DropdownMenuTrigger>
        <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
          <DropdownMenuItem>
            <DialogTrigger className="flex">
            <User className=" mr-2 h-4 w-4" />
            <span>Profile</span> 
            </DialogTrigger>
          </DropdownMenuItem>
          <DropdownMenuItem>
              <Heart className="mr-2 h-4 w-4" />
              <span>Favorits</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span onClick={()=>signOut()}>Log out</span>
            </DropdownMenuItem>

        </DropdownMenuContent>
      </DropdownMenu>
      {/* 🔴 DialogContent ouside of DropdownMenuContent */}
      <DialogContent>
        <Profile/>
      </DialogContent>
    </Dialog>
          
      </div>


    </>
  )
}