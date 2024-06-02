import prisma from "@/app/utils/db";
import { NextResponse } from "next/server";

interface requestBody{
    email:string;
    image:string;
}
export async function POST(request:Request) {
    try {
        const body:requestBody = await request.json()
        const result = await prisma.user.update({
            where:{
              email:body.email
            },
            data:{
                image:body.image
            }
        })
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(error)
    }   
}