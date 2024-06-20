import prisma from "@/app/utils/db"
import { NextResponse } from "next/server"

interface RequestBody{
    name : string
}

export async function POST(request:Request) {
 try {
    const body :RequestBody = await request.json()
    const data = await prisma.user.findFirst({
        where:{
            name:body.name
        },
        select:{
            id:true
        }
    })
    return NextResponse.json(data)
 } catch (error) {
    return NextResponse.json(error)
 }  
}