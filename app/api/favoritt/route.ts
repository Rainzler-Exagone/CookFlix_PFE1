import prisma from "@/app/utils/db"
import { NextResponse } from "next/server"

interface RequestBody{
    userId: string,
    recipeId: string
}

export async function POST(request : Request){
try {
    const body:RequestBody =  await request.json()
    const data = await prisma.favorit.findFirst({
        where:{
            userId:body.userId ,
            recipeId: body.recipeId
        }
    })
        if (!data) {
        
            await prisma.favorit.create({
            data:{
                userId: body.userId,
                recipeId:body.recipeId
            }
        })
        
        console.log("created");
    }
            else{
            
            await prisma.favorit.delete({
                where:{
                id : data?.id
                }
            })
        
            console.log("deleted");
        }
    return NextResponse.json({message:"done"})
} catch (error) {
    return NextResponse.json(error)
}
}