import homePoster from "@/public/home-bg.jpeg"
import Image from "next/image"
import bg from "@/public/bg-main.jpg"
import bg2 from "@/public/new-bg.jpg"
import bgSmall from "@/public/sm.jpeg"
import { useEffect, useState } from "react"


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
    alt="bg-main"
    className="brightness-50"
    />
       
    
    </>
 )   
}