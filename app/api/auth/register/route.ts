import { NextResponse } from "next/server"
import {hash} from 'bcrypt'
import prisma from "@/app/utils/db"


export  async function POST (request : Request){
    try {
        const {name , email, password} = await request.json()
        //validate email and password
        console.log({name ,email, password})

        

        // const user = await prisma.user.findUnique({
        //     where : {
        //         email : email,
        //     }
        // })
        // console.log({user})
        // if (user) {
        //     return NextResponse.json({message : "User already exists"})
        // }

        const hashedPassword = await hash(password, 10)
        const result = await prisma.user.create({
            data : {
                name,
                email,
                password : hashedPassword,
            }
        })
        console.log({result})

    } catch (e) {
        console.log({e})
    }
    return NextResponse.json({message : "success"})
}