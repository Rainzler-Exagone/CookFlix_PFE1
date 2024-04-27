import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../utils/db"
import { NextApiRequest } from "next";


export async function GET(req: any, { params }: { params: { name: string } }) {
  const name = params.name
  const key = name.split(',')
  let v = key.toString()
  try {


    // const data = await prisma.meal.findMany({
    //   where:{
    //     name:name
    //   },
    //   select:{
    //       id:true,
    //        name:true,
    //        image:true
    //   }

    const data = await prisma.meal.findMany({
      where: {
       Ingredients:{
        every:{
          name:{
            in:key
          }
        }
       }


      },
      select: {
        name: true,
        id: true,
        image: true,
        difficulty:true,
      }

    })
    console.log(name)
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(name)
  }
}