"use client"
import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import UserNav from "./UserNav";



interface linkProps {
    name: String,
    href: String,
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

        <div className="w-full max-w-7xl mx-auto items-center mt-6 justify-between px-5 sm:px-6 lg:px-8 flex ">
            <div className="flex items center">
                <Link href="/home" className="w-32  text-3xl">
                    {/* replace this with your logo */}
                    <h1>Cookflix</h1>
                </Link>

            </div>
            <div className="w-1/2 flex ">
                <ul className=" w-full flex justify-around">
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
            <div className="flex items-center gap-x-8">
                <Search  className="cursor-pointer"/>
                <UserNav/>
            </div>
        </div>

    )
}