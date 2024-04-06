import homePoster from "@/public/home-bg.jpeg"
import Image from "next/image"

export  default function Poster(){
 return(
    <video 
     src="https://utfs.io/f/0b7c922e-f743-4f05-8baf-dbbde0c96c6d-856mut.mp4"
     muted
     autoPlay
     loop
     className="h-[60vh] w-full object-cover brightness-[60%]"
    ></video>
 )   
}