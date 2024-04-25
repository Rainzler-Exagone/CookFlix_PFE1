import homePoster from "@/public/home-bg.jpeg"
import Image from "next/image"
import bg from "@/public/bg-main.jpg"
import bg2 from "@/public/new-bg.jpg"


export  default function Poster(){
 return(
    <>
    <Image 
    priority
    src={bg2} 
    alt="bg-main"
    className="brightness-50"
    />
    </>
 )   
}