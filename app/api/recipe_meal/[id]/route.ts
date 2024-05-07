import prisma from "@/app/utils/db";

export async function GET(req: any, { params }: { params: { name: string } }){
    try {
      const name = params.name
      const res = await prisma.recipe.findMany({
        where:{
          id:name
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