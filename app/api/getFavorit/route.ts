import prisma from "@/app/utils/db";
import { NextResponse } from "next/server";

interface RequestBody{
    userId: string,
}

export async function POST(request : Request) {
  try {
    const body : RequestBody = await request.json()
    const data = await prisma.favorit.findMany({
        where:{
            userId: body.userId
        },
        select:{
            Recipe:true
        }
    })
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(error) 
  }
}