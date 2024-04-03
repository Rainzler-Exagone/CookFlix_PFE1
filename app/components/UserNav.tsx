"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Avatar from "./Avatar"
import { ChakraProvider } from "@chakra-ui/react"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'
import { signOut } from "next-auth/react"

  

export default  function UserNav(){

    return(
    <>
    <ChakraProvider>
      <Menu>
        <MenuButton>
          <Avatar />
        </MenuButton>
        <MenuList className="text-black">
          <MenuGroup title='Profile' className="text-black">
            <MenuItem>Yasser458891@gmail.com</MenuItem>
            <MenuItem>Rainzler </MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title='Help'>
              <MenuItem color="red" onClick={()=>signOut()}>Sign out</MenuItem>
          </MenuGroup>
        </MenuList>
      </Menu>
    </ChakraProvider>

  </>
    )
}