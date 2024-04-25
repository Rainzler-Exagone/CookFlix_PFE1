"use client"
import prisma from "../utils/db";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox"
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ChoosForm } from "../components/form"
import { Pagination, Navigation } from 'swiper/modules';
// import { Left, Right } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/components/ui/use-toast";
import {fetchPantryfromdatabase} from "./fetch/fetchPentry"
import {fetchVegetablesFromDatabase} from "./fetch/vegetables"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Search } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { fetchSidebarItemsFromDatabase } from "./functions/now";

import 'swiper/css';
import 'swiper/css/navigation';
import './z.all.css'






export async function fetchItemsFromDatabase() {
  let chunkSize = 9;
  let chunks = []
  const type = "Vegetables___Greens";
  const response = await fetch('http://localhost:3000/api/ingredients', {
    method: 'GET',
  },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch sidebar items');
  }
  const data = await response.json();
  
  return data;
}



const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})


export default function Ingredients() {

  const [pantry, setPantry] = useState([])
  const [items, setItems] = useState([])
  const [type, setType] = useState('')
  const [selectedItems, setSelectedItems] = useState<any>([]);
  
  const data = fetchItemsFromDatabase()



  async function onCheck(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/submit', {
      method: 'POST',
      body: selectedItems,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  })


   function checkboxhandler(e:any) {
    let isSelected = e.target.checked;
    let value= (e.target.value);

    if (isSelected) {
     setSelectedItems([...selectedItems, value]);
    }else{
     return setSelectedItems((prevData:any)=>{
       return prevData.filter( (id:any)=>id !== value)
     })
    }

    console.log(selectedItems)
 }
  


  useEffect(() => {
    fetchSidebarItemsFromDatabase()
    .then((data) => { setItems(data); })
      .catch((error: any) => { console.log(error) });
  }, []);


  useEffect(() => {
  
    fetchPantryfromdatabase()  
      .then((data) => { setPantry(data); })
      .catch((error: any) => { console.log(error) });
      
  }, []);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    const res  = JSON.stringify(data,null,2)
    console.log(res)
  }

  const params = {
    containerClass: 'testimony-carousel',
    loop: true,
    lazy: true,
    rebuildOnUpdate: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true
    },
    centeredSlides: true,
    slidesPerView: 1
  }

  return (
    <section className="flex-col justify-center">
     
     <form onSubmit={onCheck} className="flex justify-center">
      <Button type="submit" className="w-32">Search</Button>
     </form>
      
    {
      items.map((item:any, index:any)=>(
          
      <div key={index} className="h-6/5 w-6/4 m-10 items-center bg-white/30 backdrop-blur-md overflow-hidden  rounded-2xl">
      <h1 className="text-3xl pt-2 text-center">Pantry Essentiels</h1>
      <div className="">
      <Swiper key={index}  navigation={true}
               modules={[Navigation]}
                 >
        {/* <div className="p-5 flex self-end overflow-x-scroll scrollbar-hide min-h-[100%] md:grid-cols-3"> */}
            {item.map((ingredient:any,index:any)=>(
               <SwiperSlide key={ingredient.id}>
                <div id="container" className="grid min-w-[100%] min-h-full object-cover  p-5 sm:grid-cols-4   md:grid-cols-5 " >
            {ingredient.map((el:any)=>(
              <div key={el.id}  className="flex-col">
                  <div className=" flex justify-center p-5 ">
                <Avatar className="  cursor-pointer">
                  <AvatarImage src={el.imagesrc} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex justify-center text-sm text-center">
              <input type="checkbox"  id="ingredient" value={el.name} onChange={checkboxhandler} className="mx-2   cursor-pointer"  />
              <label htmlFor="ingredient" className="self-center text-center">{el.name}</label>
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
      ))
    }
  


    </section>

 
  )

}
