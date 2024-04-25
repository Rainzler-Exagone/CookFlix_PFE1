import { NextResponse } from "next/server";
import prisma from "@/app/utils/db"


export async function GET(){
   try {
    const data = await prisma.nutrition_facts.create({
        data:{
           carb: 0 ,
           calorie: 100 ,
           sucre: 67,
           sodium: 32,
           protein: 4,
           Fat: 2.4,
           iron: 65,
           fibre:8,
           cholesterol: 0,
        }
    })
  return NextResponse.json(data)
   } catch (error) {
    return NextResponse.json(error)
   }
}