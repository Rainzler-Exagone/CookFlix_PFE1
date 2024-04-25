import { NextResponse } from "next/server";
import prisma from "@/app/utils/db"


export  async function GET(){
   try {
 
    const data = await prisma.ingredients.findMany({
        where: {
            type: "Pantry_Essentials"
        },
        select: {
            id: true,
            name: true,
            imagesrc: true,
            type:true
        }
    })
  return NextResponse.json(data)
   } catch (error) {
    return NextResponse.json(error)
   }
}