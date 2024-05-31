import prisma from '@/app/utils/db';
import * as bcrypt from 'bcrypt'
import { redirect } from 'next/navigation';

interface RequestBody {
    name: string;
    email: string;
    password: string;
}

export async function POST(request:Request){
    try {
        const body: RequestBody = await request.json();
    const user = await prisma.user.create({
        data:{
            name:body.name,
            email:body.email,
            password:await bcrypt.hash(body.password, 10),
        }
    })
     
    if (user) {
        await prisma.profile.create({
            data:{
                userId: user.id
            }
        })
    }
    const {password,...result} = user
    
    return new Response(JSON.stringify(result))
    
    } catch (error) {
        return new Response(JSON.stringify(error))
    }
}

