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



export default function UserNav() {

  return (
    <>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <AvatarIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/profile">
            <DropdownMenuItem>
              
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
             
            </DropdownMenuItem>
            </Link>
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
      </div>


    </>
  )
}