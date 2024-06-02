"use client"
import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import UserNav from "./UserNav";
import Image from "next/image";
// import Logo from "../../public/logo.png"
import Logo from "./Logo"



interface linkProps {
    name: string,
    href: string,
}

const links: linkProps[] = [
    { name: 'Home', href: '/home' },
    { name: 'Recipes', href: '/home/recipes' },
    { name: 'Trending', href: '/home/trending' },
    { name: 'Recently added', href: '/home/recently-added' },
];

export default function Navbar() {

    const pathName = usePathname()

    return (
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

    )
}