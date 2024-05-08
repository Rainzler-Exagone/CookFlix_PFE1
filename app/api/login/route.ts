import prisma from "@/app/utils/db";
import { signJwtAccessToken } from "@/lib/jwt";
import * as bcrypt from "bcrypt"


interface RequestBody {

    email: string;

    password: string;
}
export async function POST(request: Request) {
    try {
        const body: RequestBody = await request.json();

    const user = await prisma.user.findFirst({
        where: {

            email: body.email,
        }
    })
    
    if (user && (await bcrypt.compare(body.password,user.password as string))){
        const { password , ...userWithoutPass } = user;
        const accessToken = signJwtAccessToken(userWithoutPass)
        const result = {
            ...userWithoutPass,
            accessToken,

        }
        return new Response(JSON.stringify(result))
    }
    else return new Response(JSON.stringify(null))
    } catch (error) {
        return new Response(JSON.stringify(error))
    }
}