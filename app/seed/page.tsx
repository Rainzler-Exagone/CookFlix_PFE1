import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import prisma from "../utils/db"
import { CheckboxReactHookFormMultiple } from "../components/choosData"
import { CheckboxReactHookFormSingle } from "../components/checkbox"
import { SkeletonCard } from "../components/skeleton"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import SignInButton from "../../app/components/SignInButton";
import { Button } from "@/components/ui/button"
import 'swiper/css';
import 'swiper/css/navigation';
import '../../app/components/z.all.css'
import { Rating, Typography } from "@mui/material";
import YoutubeEmbed from "../components/VideoEmbed";






export default async function SeedDatabase(lata:any) {
      
     async function seedDatabase(){
      "use server"
      const res = await prisma.rating.update({
          where:{
            id:"0cba7f48-928c-48e0-babb-b654a6b09b9c"
          },
          data:{
            stars:3
          }
        
        //

        //   {
        //    StepNo:1,
        //    description: "We take a container in which we put eggs, salt, snide and vanilla and mix well with foie gras, then add oil and a glass of acid (diluted with water) and mix well",
        //    recipeId:"961a7c8a-c0b3-4894-8d11-b6a616969ee1"
        // },
        //   {
        //    StepNo:2,
        //    description: "And put a spoonful of vinegar on it and take flour and put two spoons with a muffler and sift them and put sifted flour and mix with a wooden spoon from top to bottom and if the mixture is light, add a little flour",
        //    recipeId:"961a7c8a-c0b3-4894-8d11-b6a616969ee1"
        // },
        //   {
        //    StepNo:3,
        //    description: "To find out that the dough is suitable, we write in the mixture 8 we take the mole and lift the container with the mixture and pour the dough into the mole so that the air enters the mixture and then we mix the mole and put it in the oven at a very low temperature for 45 minutes to an hour",
        //    recipeId:"961a7c8a-c0b3-4894-8d11-b6a616969ee1"
        // }
      
        
      })
      
    console.log(res);
    
     }
 
      

    return (
    <>


    <form action={seedDatabase}><Button type="submit">Reed</Button>
    {/* <Typography component="legend">Controlled</Typography>
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  /> */}
   </form>
    <YoutubeEmbed />
    <SignInButton/>
    </>
    )
}









