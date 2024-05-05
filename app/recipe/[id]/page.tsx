"use client"
import { FormEvent, useEffect, useState } from "react";
// import { getRecipeById } from "../../components/functions/getRecipe"
import { getByIngredients } from "../../components/functions/call"
import YoutubeEmbed from "../../components/VideoEmbed"
import Navbar from "@/app/components/Navbar";
import "./style.css"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {getRecipeById} from "@/app/components/functions/Recipe_Meal"
import { Button } from "@/components/ui/button";
import { Heart, BellIcon } from "lucide-react";
import { Rating, Typography } from "@mui/material";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"


// export async function getRecipeById(id:any) {
//     //  const name = [ 'Eggs', 'Sugar', 'Milk', 'Flour', 'Baking powder' ]
//     //   const queryParams = name.toString()
//       const response = await fetch(`http://localhost:3000/api/recipe/${id}`, {
//         method: 'GET',
//       }
//       );

//       if (!response.ok) {
//         throw new Error('Failed to fetch sidebar items');
//       }
//       const data = await response.json();
//       console.log(data);

//       return data;
//     }


export default function Product({ params }: any) {
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const [recipe, setRecipe] = useState<any>([])
  const [id, setId] = useState();
  const [value, setValue] = useState<null | number>();
  const[Index, setIndex] = useState<any>()



  useEffect(() => {
    getRecipeById(params)
      .then((data) => {
        setRecipe(data);
      })
      .then((data) => {
        console.log(recipe)
      })
      .catch((error: any) => { console.log(error) });



  }, []);

  //   const handleSearch = async () => {

  //     if (selectedItems != "") {
  //       const search = await getRecipeById(params);
  //       setMeal(search);
  //       setId(search.id)




  //     }
  //     else {
  //       console.log("empty")

  //     }
  //   console.log(params)

  //   }

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     const formData = new FormData(e.currentTarget)
//     const response = await fetch('/api/auth/rating', {
//       method: "POST",
//       body: JSON.stringify({
//           name: formData.get('name'),
//           email: formData.get('email'),
//           password: formData.get('password')
//       })
//   });
// }

  const v: any = JSON.stringify(recipe)
  return (

    <>
      <section className="flex  justify-around m-4 ">
  

              {recipe.map((el:any,index:any)=>(
        <Card key={index} className="w-full">
          <CardHeader>
            <CardTitle>{el.Meal.name}</CardTitle>
            <CardDescription>{el.Description}</CardDescription>
          </CardHeader>
          <CardContent  className="grid gap-4  ">
            <div className="flex justify-start">
            <div className=" flex items-center justify-start h-64  w-1/2 space-x-4 rounded-md border p-4">
                
                <div className="flex w-full space-y-1">
                   <Image src={el.Meal.image} height={250} width={350} alt="image" priority objectFit="full" />
                   
              </div>
            </div>
           

            </div>
            <div>
              <div>
               { el.Difficulty == "easy" ?
               (<Badge className="bg-green-500">{el.Difficulty}</Badge>):
               (<div>hola</div>)
                 
                    
                    }
              
              
              </div>
              <div className="mb-4 mt-7 pb-4 last:mb-0 last:pb-0">
                <div className="space-y-1 w-full">
                    <h2 className="text-lg font-bold">Instructions :</h2>
                  <p className="text-sm font-medium leading-none">
                    {el.instruction.map((e:any,index:any)=>(
                        <p key={index} className="flex mt-4 text-md">{e.StepNo}. {e.description}</p>
                       
                    ))}
                  </p>

                </div>
                <div className=" w-full bg-red-500 flex ">
                  <YoutubeEmbed embedId="3wofbmwLNUw"/>
                </div>

              </div>
            </div>
          </CardContent>
          <CardFooter>
           
          </CardFooter>
        </Card>

        
              ))}
          
      </section>
    </>
    // <div className="bg-red-800">
    //     {v}
    //     {meal.map((recipe: any, index: any) => (
    //         <div key={index}>
    //             <h1>Youtube Embed</h1>
    //             <div className="w-full">
    //             <YoutubeEmbed embedId={recipe.videoEmbedId} />
    //             </div>
    //         </div>
    //     ))}

    // </div>
  )
}
