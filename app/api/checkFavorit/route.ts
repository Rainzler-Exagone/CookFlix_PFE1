import prisma from "@/app/utils/db"
import { NextResponse } from "next/server"

interface RequestBody{
    userId: string,
    recipeId: string
}
export async function POST(request:Request){
   try {
    const body:RequestBody =  await request.json()
    const data = await prisma.favorit.findFirst({
        where:{
            userId:body.userId ,
            recipeId: body.recipeId
        }
    })
    
    return NextResponse.json(data)
   } catch (error) {
    return NextResponse.json(error)
   }
}