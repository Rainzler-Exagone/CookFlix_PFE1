import prisma from "@/app/utils/db";

interface RequestBody{
  category: string
  image: string
  Description: string
  cooking_t : number
  preparation_t: number
  rest_t : number
  difficulty : any

}

export async function POST() {
    try {
        const data = await prisma.recipe.create({
            data:{
               
            }
        })
    } catch (error) {
        
    }
}