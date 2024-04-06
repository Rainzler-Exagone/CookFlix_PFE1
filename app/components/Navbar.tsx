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

        <div className="w-full mx-auto items-center  py-5 bg-yellow-500 justify-between px-5 sm:px-6 lg:px-8 flex ">
            <div className="flex items center">
                {/* <Link href="/home" className="w-32  text-3xl flex"> */}
                    {/* replace this with your logo */}
                  {/* <h1 className="font-Kaushan">Instant</h1> <Image src={Logo} alt="logo-image" />
                </Link> */}
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
                <Search  className="cursor-pointer"/>
                <UserNav/>
            </div>
        </div>

    )
}