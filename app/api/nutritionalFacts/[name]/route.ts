import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/utils/db"
import { NextApiRequest } from "next";


export async function GET(req:NextApiRequest,{params}:{params: {name :string} }){
  
      const name = req.query.name
      
   try {
      
      const data = await prisma.meal.findMany({
         where:{
           name: name
         },select:{
            id:true
         }
      })
    return NextResponse.json(name)
     }catch (error) {
      console.log(name)
    return NextResponse.json(error)
   }
}