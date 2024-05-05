import prisma from "@/app/utils/db";
import * as bcrypt from "bcrypt"


interface RequestBody {

    UserId: string;
    stars: number;
    recipeId: string;
}
export async function POST(request: Request) {
    const body: RequestBody = await request.json();

    const user = await prisma.rating.create({
        data: {

          userId:body.UserId,
          recipeId:body.recipeId,
          stars : body.stars
        }
    })
    
   return new Response(JSON.stringify(null))
}