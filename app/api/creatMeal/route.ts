import prisma from "@/app/utils/db"
import { category, saisone } from "@prisma/client"
import { NextResponse } from "next/server"



interface RequestBody{
    name : string,
    difficulty: any,
    saisone: any[]
    ingredients : string[] ,
    image: string,
    category: any,
    nutritionalFacts:any

}

export async function POST(request:Request){
   try {
    const body:RequestBody = await request.json()
    const arr:any[] =[]
    body.ingredients.forEach((item,index)=>{
      arr.push({name: `${item}`})
    })

   


    console.log(arr);
    console.log(body.saisone);
    
    
  const data = await prisma.meal.create({
    data:{
      name: body.name,
      image: body.image,
      difficulty: body.difficulty,
      saisone:body.saisone,
      Ingredients:{
        connect: arr
      },
      category:body.category,
      nutrition_facts:{
        create:{
          calorie:body.nutritionalFacts.calorie,
        protein: body.nutritionalFacts.protein,
        fibre: body.nutritionalFacts.fibre,
        sodium: body.nutritionalFacts.sodium,
        Fat: body.nutritionalFacts.Fat,
        cholesterol: body.nutritionalFacts.cholesterol,
        iron: body.nutritionalFacts.iron,
        carbs: body.nutritionalFacts.carbs,
        Sugars: body.nutritionalFacts.sugar
        }
      }
  }})

  return NextResponse.json(data)
   } catch (error) {
    return NextResponse.json(error)
   }
}