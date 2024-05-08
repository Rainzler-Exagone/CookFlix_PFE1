import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/utils/db"

interface RequestBody {
   id: string;
}
export async function POST(request:Request){
  
      const body:RequestBody = await request.json()
      
   try {
      
      const data = await prisma.nutrition_facts.findMany({
         where:{
           id:body.id
         },select:{
            calorie:true,
            carbs:true,
            cholesterol:true,
            Fat:true,
            fibre:true,
            iron:true,
            protein:true,
            sodium:true,
            Sugars:true
         }
      })
    return NextResponse.json(data)
     }catch (error) {
      console.log(name)
    return NextResponse.json(error)
   }
}