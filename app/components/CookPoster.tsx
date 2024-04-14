import homePoster from "@/public/home-bg.jpeg"
import Image from "next/image"
import bg from "@/public/bg-main.jpg"

export  default function Poster(){
 return(
    <>
    {/* <video 
     src="https://utfs.io/f/0b7c922e-f743-4f05-8baf-dbbde0c96c6d-856mut.mp4"
     muted
   //   autoPlay
   //   loop
     className="h-[70vh] absolute w-full object-cover brightness-50"
    ></video> */}
    <Image 
    src={bg} 
    alt="bg-main"
    className=" brightness-50"
    />
    </>
 )   
}