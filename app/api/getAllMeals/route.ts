import prisma from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const result = await prisma.meal.findMany({
            select:{
                name:true,
                saisone:true,
                difficulty:true,
                category:true,
                Ingredients:true,

            }
        })

        return NextResponse.json(result)
    } catch (error) {
        console.log(error);
    }
}