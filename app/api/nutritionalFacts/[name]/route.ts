import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/utils/db"
import { NextApiRequest } from "next";


export async function GET(req:NextApiRequest,{params}:{params: {id :string} }){
  
      const name = params.id
      
   try {
      
      const data = await prisma.nutrition_facts.findMany({
         where:{
           id:name
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