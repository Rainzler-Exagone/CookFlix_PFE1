import homePoster from "@/public/home-bg.jpeg"
import Image from "next/image"
import bg from "@/public/bg-main.jpg"
import bg2 from "@/public/new-bg.jpg"
import bgSmall from "@/public/sm.jpeg"
import { useEffect, useState } from "react"
import Shape from "./shape"


export  default function Poster(){
   
  //  const [isSmallScreen, setIsSmallScreen] = useState(false);

  //  useEffect(() => {
  //    const checkScreenWidth = () => {
  //      setIsSmallScreen(window.innerWidth <= 644);
  //    };
 
  //    checkScreenWidth();
 
  //    window.addEventListener('resize', checkScreenWidth);
 
  //    return () => {
  //      window.removeEventListener('resize', checkScreenWidth);
  //    };
  //  }, []);
 return(
    <>
    {/* {isSmallScreen ? (
        <Image 
        priority
        src={bgSmall} 
        alt="bg-main"
        className="brightness-50"
        />
      ) : (
         <Image 
         priority
         src={bg2} 
         alt="bg-main"
         className="brightness-50"
         />
      )} */}
 
      <Image
      priority
      src={bg2}
      alt="bg-image"
       className="brightness-50"
      />

{/*       
<div className="flex justify-end items-center h-lvh  " id="hh">
<div className="flex items-center justify-start mb-20 ml-10 w-1/2 bg-transparent  ">


<Image 
    priority
    src="https://utfs.io/f/a8c3be94-12a7-41a6-ae4c-03406af49e2c-a0wx8b.jpg" 
    height={200}
    width={320}
    alt="bg-main"
    className="brightness-50 border-collapse shadow-lg rounded-md "
    />
</div>
</div>
        */}
    
    </>
 )   
}