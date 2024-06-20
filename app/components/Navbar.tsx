import UserNav from "./UserNav";
import Logo from "./Logo"

import NavbarC from "./NavbarC"
import { Search } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default async function Navbar() {

    const session = await getServerSession();


    return (

        <div className="w-full mx-auto items-center py-5 bg-opacity-70  bg-yellow-500  justify-between px-5 sm:px-6 lg:px-8 flex ">
            <div className="flex items center">
                <Logo />
            </div>
               <NavbarC/>
            <div className="flex items-center gap-x-8 pr-10 mt-5 ">
                <Search  className="cursor-pointer"/>
                {/* <UserNav/> */}
                {session ? <UserNav/> : <Link href="/login"><Button variant={"outline"}  >Sign In</Button></Link>}
            </div>
         </div>

    )
 } 





  {/* <div className="flex items center"> */}
                {/* <Link href="/home" className="w-32  text-3xl flex"> */}
                    {/* replace this with your logo */}
                  {/* <h1 className="font-Kaushan">Instant</h1> <Image src={Logo} alt="logo-image" />
                </Link> */}
                {/* <Logo />

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

            </div> */}