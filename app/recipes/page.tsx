import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";
import { getAllRecipes } from "../actions/meal";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { DividerVerticalIcon } from "@radix-ui/react-icons";

export default async function Recipes() {
    const meals = await getAllRecipes()
    
    return(
        <>
         <section className="w-full  flex justify-center items-center">
            
         <div className="flex justify-around space-x-0 flex-shrink mt-8 rounded-lg shadow-lg h-full py-4 w-10/12 ">
            <div>Image</div>
            <DividerVerticalIcon/>
         <div>Category</div>
         <DividerVerticalIcon/>
         <div>Description</div>
         <DividerVerticalIcon/>
         <div>Difficulty</div></div>
         </section>

         {meals.data.map((e:any,index:any)=>(

<Card key={index} className="flex h-full shadow-lg justify-center m-4 gap-4 p-2">
    <CardContent className="flex w-full h-full items-center pt-4 space-x-4 mx-4 justify-around">
        <div className="w-full h-full items-center flex justify-around">
            <Image height={82} width={82} alt="image" src={e.image} className="rounded-lg"/>
        <div className="w-1/7 font-semibold  flex justify-center"><h1>{e.category}</h1></div>
        <div className="w-1/6  flex justify-center"><h1>{e.Description}</h1></div>
        <div className="w-1/7 flex justify-center"><h1><Badge className={e.Difficulty == "easy" ? "bg-green-500" : "bg-yellow-400"}>{e.Difficulty}</Badge></h1></div>
        </div>
    </CardContent>
</Card>
))}
        </>
    )
}