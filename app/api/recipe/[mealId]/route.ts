import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../utils/db"
import { NextApiRequest } from "next";


export async function GET(req: any, { params }: { params: { name: string } }) {
  const name = params.name
  try {



    const data = await prisma.recipe.findMany({
      where: {
       
        mealId: name
      },
      select: {
        instruction:true,
        Cooking_t:true,
        Preparation_t:true,
        Rest_t:true,
        Events:true,
         image:true,
       videoEmbedId:true,
      }

    })
    console.log(name)
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(name)
  }
}