"use client"
import { CiBowlNoodles } from "react-icons/ci";
import prisma from "../utils/db";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox"
import { z } from "zod";
import {Beef, ChevronDown, Drumstick, FishSymbol, LeafyGreen, Milk, Nut } from "lucide-react"
import { LiaCheeseSolid } from "react-icons/lia";

import { redirect } from "next/navigation";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Navigation } from 'swiper/modules';
import { getRecipeByMealId } from "./functions/getMeal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import { fetchPantryfromdatabase } from "./fetch/fetchPentry"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Search } from "lucide-react";
import Spinner from "./Spinner"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { fetchSidebarItemsFromDatabase } from "./functions/now";
import { getByIngredients } from "./functions/call"
import 'swiper/css';
import 'swiper/css/navigation';
import './z.all.css'
import Image from "next/image";
import Link from "next/link";
// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible"
import {CaretSortIcon} from "@radix-ui/react-icons"

import Collapsible from 'react-collapsible'






const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})





export default function Ingredients() {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [meal, setMeal] = useState([])
  const [link, setLink] = useState();
  const [id, setId] = useState();
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const typesArr = ["Pantry Essentiels","Vegetables & Greens","Cheeses","Dairy","Meats","Fishes & Seafood","Nuts & Seeds"]
  const iconsArr = [<LeafyGreen key='0' />,<LiaCheeseSolid key="1" />, <Beef key='2' />,<Milk key='3' />, <Drumstick key='4' />,  <FishSymbol key='5' /> , <Nut key='6' /> , <CiBowlNoodles key='7' />]






  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  })



  function checkboxhandler(e: any) {
    let isSelected = e.target.checked;
    let value = (e.target.value);

    if (isSelected) {
      setSelectedItems([...selectedItems, value]);
    } else {
      return setSelectedItems((prevData: any) => {
        return prevData.filter((id: any) => id !== value)
      })
    }

    console.log(selectedItems)
  }



  useEffect(() => {
    setLoading(true)
    fetchSidebarItemsFromDatabase()
      .then((data:any) => {
        setItems(data);
        setLoading(false)
      })

      .catch((error: any) => { console.log(error) });
  }, []);






 const handleRecipe = async () => {
  const recipe = await getRecipeByMealId(id)

  console.log(recipe);
 }




  const handleSearch = async () => {

    if (selectedItems != "") {
      setLoading(true)
      const search = await getByIngredients(selectedItems);
      setLoading(false)
      
      setMeal(search);
      setId(search.id)
      

      
      


    }
    else {
      console.log("empty")

    }





  };


  return (
    <section className="flex-col justify-center scrollbar-hide">
       

<div className="w-screen flex justify-center">
        <Drawer>
          <DrawerTrigger asChild>
            <Button onClick={handleSearch} className="w-32">Search</Button>
          </DrawerTrigger>
          <DrawerContent>

            <div className="mx-auto w-full ">
              <DrawerHeader className="flex justify-center">
                <DrawerTitle>Choose your meal</DrawerTitle>
              </DrawerHeader>
              
                <div className="p-2  pb-0">
                  <div className="flex   items-center justify-center ">
                    <Swiper navigation={true}
                      modules={[Navigation]}
                    >
                    
                       {meal.length == 1 ? (
                        <>
                        
                        
                        {meal.map((item: any) => (
                         <SwiperSlide key={item.id}>
                           <div className="flex-1 text-center">
                             <div className="text-7xl font-bold tracking-tighter">
                               <div className="mt-3  h-[120px]">
                                 <Image alt="image" src={item.image} height="340" width="340"  className="mb-5"/>
 
                               </div>
                             </div>
                           </div>
                           <DrawerFooter>
                             <Link href={`http://localhost:3000/recipe/${item.id}`}>
                             <Button className="w-36">Show Recipe</Button>
                             </Link>
                             <DrawerClose asChild>
                               <Button variant="outline">Cancel</Button>
                             </DrawerClose>
                           </DrawerFooter>
                         </SwiperSlide>
                       ))}
                        </>
                       ):(
                        <>
                        
                        {meal.map((item: any) => (
                          <SwiperSlide  key={item.id}>
                            <div className="flex justify-center text-center">
                              {/* <div className="text-7xl font-bold tracking-tighter">*/}
                                <div className="w-1/3  h-[120px]"> 
                                 
                                  <Image alt="image" src={item.image} height="340" width="340"  className="mb-5"/>
                                  </div>
                                {/* 
                              </div> */}
                            </div>
                            <DrawerFooter>
                              <div className="w-full flex justify-center">
                                
                              <Link href={`http://localhost:3000/recipe/${item.id}`}>
                              <Button className="w-36">Show Recipe</Button>
                              </Link>
                              </div>
                              <DrawerClose asChild>
                              <div className="w-full flex justify-center">

                                <Button variant="outline" className="w-48">Cancel</Button>
                              </div>
                              </DrawerClose>
                            </DrawerFooter>
                          </SwiperSlide>
                        ))}
                        </>
                       )}
                    
                    </Swiper>
                  </div>
                </div>
              
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      
       
      {
        items.map((item: any, index: any) => (
         
          <div className="flex justify-center mt-5 w-full" key={index}>
              <Accordion className="rounded-lg w-2/3 py-3  bg-white/30 backdrop-blur-md">
            <AccordionSummary
             expandIcon={<ExpandMoreIcon />}
             aria-controls="panel1-content"
             id="panel1-header"
             
            ><div className=" mx-8">{typesArr[index]} </div><div >{iconsArr[index]}</div></AccordionSummary>
            <AccordionDetails>
          <div key={index} className="h-6/5 w-6/4  items-center bg-white/30 backdrop-blur-md overflow-hidden rounded-2xl">
            {/* <h1 className="text-3xl pt-2 text-center">{typesArr[index]}</h1> */}
            <div className="">
              <Swiper key={index} navigation={true}
                modules={[Navigation]}
                >
                {/* <div className="p-5 flex self-end overflow-x-scroll scrollbar-hide min-h-[100%] md:grid-cols-3"> */}
                {item.map((ingredient: any, index: any) => (
                  <SwiperSlide key={ingredient.id}>
                    <div id="container" className="grid min-w-[100%] min-h-full object-cover grid-cols-2 p-5 sm:grid-cols-4   md:grid-cols-5 " >
                      {ingredient.map((el: any) => (
                        <div key={el.id} className="flex-col">
                          <div className=" flex justify-center p-5 ">
                            <Avatar className="  cursor-pointer">
                              <AvatarImage src={el.imagesrc} />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="flex justify-center text-sm text-center">
                            <input type="checkbox" id={el.name} value={el.name} onChange={checkboxhandler} className="mx-2 cursor-pointer" />
                            <label htmlFor={el.name} className="self-center text-center cursor-pointer ">{el.name}</label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
                {/* </div> */}
              </Swiper>

            </div>

          </div>
          </AccordionDetails>
          </Accordion>
          </div>
            
        ))
      }



    </section>


  )

}
