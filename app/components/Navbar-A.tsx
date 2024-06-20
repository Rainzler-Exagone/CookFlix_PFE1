"use client"
import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import UserNav from "./UserNav";
import Image from "next/image";
import Logo from "./Logo"
import { Button } from "@/components/ui/button";
import { Url, UrlObject } from "url";



interface linkProps {
    name: string,
    href: string ,
}

const links: linkProps[] = [
    { name: 'Home', href: '/home' },
    { name: 'Recipes', href: '/recipes' }
];

export default function Navbar() {

    const pathName = usePathname()
    return (

        <div className="w-full mx-auto items-center  bg-yellow-500  py-5 justify-between px-5 sm:px-6 lg:px-8 flex ">
            <div className="flex items center">
                <Logo />

            </div>
            <div className="w-1/2 flex mt-5">
                <ul className=" lg:flex  w-full  justify-around hidden ">
                    {links.map((link, idx) => (
                        <div key={idx}  >
                            {pathName === link.href ? (

                                <li>
                                    <Link href={link.href} className="text-white">{link.name}</Link>
                                </li>
                            ) : (
                                <Link href={link.href}>{link.name}</Link>
                            )}
                        </div>
                    ))}
                </ul>

            </div>
            <div className="flex items-center gap-x-8 mt-5 ">
                <Search className="cursor-pointer" />
                <Link href="/login"><Button variant={"outline"}  >Sign In</Button></Link>
            </div>
        </div>

    )
}