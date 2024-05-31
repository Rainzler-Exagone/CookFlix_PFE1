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
  await prisma.meal.deleteMany({
     where:{
      OR: [
        {
         name:"go"
        },
        {
         name:"blueTark"
        },
        {
         name:"kkk"
        },
        {
         name:"blueTarl"
        },
        {
         name:"blueTaro"
        },
        {
         name:"bluegaro"
        },
        {
         name:"blueharo"
        },
        {
         name:"bluehar"
        },
        {
         name:"blueh"
        },
        {
         name:"blueha"
        },
        {
         name:"blue"
        },
       
      ],
     }
      
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
