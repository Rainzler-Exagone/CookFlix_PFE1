"use client"
import { Button } from "@/components/ui/button"
import axios from "axios"
import prisma from "../utils/db"
import { CheckboxReactHookFormMultiple } from "../components/choosData"
import { CheckboxReactHookFormSingle } from "../components/checkbox"
import { SkeletonCard } from "../components/skeleton"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"


export async function fetchItemsFromDatabase(name:string[]) {
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
    
    return data;
  }
  

// export const  getData = () =>{



    
//     const response =  axios.get("http://localhost:3000/api")
//     .then(function(response) {
//        console.log(response);
       
//     })
//        .catch(function(error){console.log(error);
//        })
// }

export default  function SeedDatabase() {
    const [item, setItems] = useState("");
    const name = [ 'Eggs', 'Sugar', 'Milk', 'Flour', 'Baking powder' ]
  let a = ["Autumn","spring","summer","winter"]
    useEffect(() => {
         fetchItemsFromDatabase(a)
         
         .then(data=>{
            console.log(data);
         setItems(data);   
         })
         .catch(error=>{console.log(error);
         })
    }, []);
    // async function postData() {
    //     "use server"

    //  const  data =  await prisma.meal.findFirst({
    //             where:{
    //                 Ingredients:{
    //                     every:{
    //                         name:{
    //                          in:["Eggs","Sugar","Milk","Flour","Baking powder"]
                            
    //                         }
    //                      },
                        
    //                 },
                    
    //             },
    //             select:{
    //                 name:true,
    //                 Ingredients:{
    //                     select:{
    //                         name:true
    //                     }
    //                 }
    //             }
    //           })
    //         console.log(data);
            
    // }
    // const [state, setstate] = useState();
    // useEffect(() => {
    //     const data = fetchItemsFromDatabase()
           
    //     return () => {
            
    //     };
    // }, []);

   const params = useParams()
   console.log(params);
    return (
        <>
            <div  >
                <form >
                    <Button type="submit" >{JSON.stringify(a)}</Button>
                    
                </form>
            </div>
       
           
        </>
    )
}