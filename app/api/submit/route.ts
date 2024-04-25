import prisma from '@/app/utils/db'
import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function GET(res : NextApiResponse ,req: any) {
  const { ingredients } = req.query;
  const ingredientList = Array.isArray(ingredients) ? ingredients : [ingredients]; 
  const result  = await prisma.meal.findMany({
    where: {
      Ingredients: ingredients
    }
  })
 
  res.status(200).json({ result })
}