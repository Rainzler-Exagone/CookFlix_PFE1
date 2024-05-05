import prisma from "@/app/utils/db";

export async function GET(req: any, { params }: { params: { name: string } }){
    try {
      
      const res = await prisma.recipe.findMany({
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