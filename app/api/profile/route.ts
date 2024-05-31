import prisma from "@/app/utils/db"
import { NextResponse } from "next/server"

interface requestBody{
    userId : string
}

export async function POST(request:Request){
    
    try {
        const body: requestBody = await request.json()
        const data = await prisma.profile.findFirst({
            where:{
                userId:body.userId
            },
            include:{
                user:true
            }
        })
    
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json(error)
    }
    
}