import { NextResponse } from "next/server";
import prisma from "../../utils/db"


export async function GET(){
   try {
    const data = await prisma.ingredients.findMany({
        select: {
            id: true,
            name: true,
            imagesrc:true,
            type:true
        }
    })
  return NextResponse.json(data)
   } catch (error) {
    return NextResponse.json(error)
   }
}