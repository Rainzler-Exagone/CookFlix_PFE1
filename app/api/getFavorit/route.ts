import prisma from "@/app/utils/db";

interface RequestBody{
    userId: string,
}

export async function POST(request : Request) {
    const body : RequestBody = await request.json()
    const data = await prisma.favorit.findMany({
        where:{
            userId: body.userId
        },
        select:{
            Recipe:true
        }
    })
}