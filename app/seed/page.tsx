import { Button } from "@/components/ui/button"
import prisma from "../utils/db"
import { CheckboxReactHookFormMultiple } from "../components/choosData"
import { CheckboxReactHookFormSingle } from "../components/checkbox"
import { SkeletonCard } from "../components/skeleton"
import Els from "../components/els"
import sharp from "sharp"
import bg from "@/public/home-bg.jpeg"

export default  function SeedDatabase() {
    async function postData() {
        "use server"

         await prisma.meal.create({

          data : {
                name : "Baba",
                image : "https://utfs.io/f/0f71c8df-705c-46cb-8742-d491b3a4e6b4-11hbvg.jpg",
                saisone: ['Autumn','spring','summer','winter'],
                difficulty:"easy",
                Ingredients : {connect:[{name: "Flour"},{name:"Eggs"},{name:"Sugar"},{name:"Milk"},{name:"Baking powder"}]},
                 nutrition_facts: {
                     connect: {
                         id: "846604d7-ddf5-426c-8aa0-b44d92e4fff3"
                     }
                 },

                Rating : {
                    create:[{ stars: 3 }, { stars: 4 }]
                },
                 composition : {
                   create:[{ingredientsName: "Flour",quantity:1.3,unit:"g"},{ingredientsName:"Sugar",quantity:2,unit:"Cup"},{ingredientsName:"Milk",quantity:1,unit:"Cup"},{ingredientsName:"Baking powder",quantity:1 , unit:"tea spoon"}]
                 },
                 }
              }
            
       )

    }
    return (
        <>
            <div>
                <form action={postData}>
                    <Button type="submit" >Generate</Button>
                </form>
            </div>
       
           
        </>
    )
}