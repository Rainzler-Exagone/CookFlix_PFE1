import prisma from "@/app/utils/db";


interface RequestBody{
  mealId:string
}


export async function POST(request:Request){
    try {
      const body:RequestBody =  await request.json()
        const res = await prisma.recipe.findFirst({
        where:{
          mealId:body.mealId
        },
        include:{
         Meal:true,
         instruction:true,
         Rating:true,
         composition:true,
        }          
       })
       
      return new Response(JSON.stringify(res))
    } catch (error) {
      return new Response(JSON.stringify(error))
    }
       
}

