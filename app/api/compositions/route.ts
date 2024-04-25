import { NextResponse } from "next/server";
import prisma from "@/app/utils/db"


export async function GET(){
   try {
           const data = await prisma.composition.create({
            data: {
                Ingredients:{
                    connect:{
                        id:"1e0acbbe-e0c7-4c70-ab89-1fb9bd36669b"
                    }
                },
                quantity: 1,
                unit: "l"
            }
           })
  return NextResponse.json(data)
   } catch (error) {
    return NextResponse.json(error)
   }
}