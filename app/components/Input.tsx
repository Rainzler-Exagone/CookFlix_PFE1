"use client"
import { Autocomplete, TextField  } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import Spinner from "./Spinner";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import"./z.all.css"
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";












export async function fetchSidebarItemsFromDatabase() {
 
  const arr: any[] = []
  const response = await fetch('http://localhost:3000/api/ordered_items', {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch sidebar items');
  }
  const data = await response.json();
  console.log(data)
  {
    data.map((item: any) => {

      console.log(item.name)
      const count = arr.push(item.name)
    })
  }
  //return chunks;
  return arr;



}
export async function getByIngredients(name: any) {
  //  const name = [ 'Eggs', 'Sugar', 'Milk', 'Flour', 'Baking powder' ]
  //   const queryParams = name.toString()
  const response = await fetch(`http://localhost:3000/api/meals/${name}`, {
    method: 'GET',
  }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch sidebar items');
  }
  const data = await response.json();
  console.log(data);

  return data;
}

export const IngredientLists = () => {
  const ingredients = fetchSidebarItemsFromDatabase
  const [selectedIngredients, setSelectedIngredients] = useState<any>([]);
  const [ingredientInputValue, setIngredientInputValue] = useState("");
  const [newoptions, setNewOptions] = useState([])
  const [loading, setLoading] = useState(false)
  const [meal, setMeal] = useState([])
  const [id, setId] = useState();


  console.log(selectedIngredients);





  
  
  const handleSearch = async () => {

    if (selectedIngredients.length !== 0 ) {
      const search = await getByIngredients(selectedIngredients);
      setMeal(search);
      setId(search.id)
      
      


    }
    else {
      toast.error('Enter at least on ingredient')
       console.log('empty array');
       
    }





  };


  useEffect(() => {
    const data = fetchSidebarItemsFromDatabase()
      .then((data:any) => { setNewOptions(data); })
      .catch((error: any) => { console.log(error) });
  }, []);

  return (



    <React.Fragment>

      <Autocomplete

        options={newoptions}
        multiple
        style={{ width: "80%" }}

        className="bg-white/55"
        onChange={(event, newIngredient: any) => {
          setSelectedIngredients(newIngredient);
        }}
        inputValue={ingredientInputValue}
        onInputChange={(event, newIngredientInputValue) => {
          setIngredientInputValue(newIngredientInputValue);
        }}
        renderInput={(params) => {

          return <TextField label='Select your ingredients' {...params} />;
        }}
      ></Autocomplete>
      <div className="md:w-32 md:ml-8 md:h-14 sm:w-10 sm:h-7 ">
      <Drawer >
          <DrawerTrigger  asChild>
            <Button onClick={handleSearch} disabled={selectedIngredients.length == 0 ? true : false} className="w-32">Search</Button>
          </DrawerTrigger>
          <DrawerContent>

            <div className="mx-auto w-full ">
              <DrawerHeader className="flex justify-center">
                <DrawerTitle>Choose your meal</DrawerTitle>
              </DrawerHeader>
              {loading ? (<Spinner />) : (
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
                              <div className="w-1/3">
                                
                                <Link href={`http://localhost:3000/recipe/${item.id}`}>
                                <Button className="w-36 self-start">Show Recipe</Button>
                                </Link>
                                </div>
                              </div>
                              <DrawerClose asChild>
                                <div className="w-full flex justify-center">
                                  
                              <div className="w-1/3 flex justify-start">

<Button variant="outline" className="w-3/4">Cancel</Button>
</div>
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
              )}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      {/* <Button onClick={handleSearch} className="md:w-32 md:ml-8 md:h-14 sm:w-10 sm:h-7   "><Search size={16} className="mr-3" /> Search </Button> */}
    </React.Fragment>
  );
};

