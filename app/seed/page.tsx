import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import prisma from "../utils/db"

export default function CardWithForm() {
  
  async function deletData(){
    "use server"
  await prisma.ingredients.createMany({
    data:[
         {
          name:"chicken",
          type:"Poultry",
          imagesrc:"https://utfs.io/f/bfc978f5-8fc6-41fc-9d08-80553ca84985-cc5jg5.jpg"
         },
         {
          name:"chicken breast",
          type:"Poultry",
          imagesrc:"https://utfs.io/f/a3805c1b-1335-47ec-b1fe-8b58b3300708-dkldgl.jpg"
         },
         {
          name:"chicken thigh",
          type:"Poultry",
          imagesrc:"https://utfs.io/f/37164af1-9380-47a4-8996-734bfc245b46-65z94y.jpg"
         },
        {
          name:"Rachta (Algerian noodles)",
          type:"Pastries",
          imagesrc:"https://utfs.io/f/78747724-cfe6-4ec6-9db0-ba397648363e-uo9kf3.jpg"
        }
    ]
  })
  }

 
  return (

    <>
    <form action={deletData}>
      <button type="submit" className="bg-blue-600">delete</button>
    </form>
    </>
  )
}
