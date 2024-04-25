import { NextResponse } from "next/server";
import prisma from "@/app/utils/db"


export async function GET(req:any){
    const {id} = req.params
   try {
    const data = await prisma.meal.()
    console.log(data)
  return NextResponse.json(data)
   } catch (error) {
    return NextResponse.json(error)
   }
}