import Link from "next/link";
import LogoPng from "@/public/instant.png" 
import Image from "next/image";

export default function Logo (){
    return(
        <>
        <Link href="/home" className="flex items-center w-40 text-2xl">
        <Image src={LogoPng} alt="logo-image" className=""/>
        </Link>
        </>
    )
}