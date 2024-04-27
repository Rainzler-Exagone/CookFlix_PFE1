import prisma from '@/app/utils/db'
import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
 
export  async function GET(res:NextResponse) {
  const ingredients  = ["Sugar","Backing powder","Flower","Milk","Eggs"];
  const ingredientList = Array.isArray(ingredients) ? ingredients : [ingredients]; 
  const result  = await prisma.meal.findMany({
    where: {
      Ingredients: {
         every:{
          name:{
            in:ingredients
          }
         }
      }
    }
  })
 
  res.status(200).json({ result })
}