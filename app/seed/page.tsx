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

  async function Delete() {
      await prisma.favorit.deleteMany({
        where:{
          userId:"clvo97snb0000irk6ml5qajpc"
        }
      })
  }
  return (

    <>
    <form onSubmit={Delete}>
      <button type="submit">delete</button>
    </form>
    </>
  )
}
