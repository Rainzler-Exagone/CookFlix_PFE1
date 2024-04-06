"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock } from "lucide-react"
import { signIn } from "next-auth/react"
import { FormEvent, useState } from "react"


export default function Form() {

    const [email,setEamil] = useState<null | string>(null)

    async function signInwithEmail() {
        const signInResult = await signIn('email',{
            email:email,
            callbackUrl:`${window.location.origin}`,
            redirect:false,
        })
    }
    // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     const formData = new FormData(e.currentTarget)
    //     const response = await fetch('/api/auth/register', {
    //         method: "POST",
    //         body: JSON.stringify({
    //             name: formData.get('name'),
    //             email: formData.get('email'),
    //             password: formData.get('password')
    //         })
    //     });
        
    //     console.log({ response })
    // }


    return (
        <form method="post"  action="/api/auth/signin">
            <h1 className="text-3xl font-semibold text-white flex justify-center items-center self-center">Sign up</h1>
            <div className="space-y-4 mt-5">
                <Input type="name" name="name" placeholder="Name" className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block" />
                <Input type="email" name="email" placeholder="Email" onChange={(e)=>setEamil(e.target.value)} className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block" />
                {/* <Input type="password" name="password" placeholder="Password" className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full  inline-block" /> */}
                <Button type="submit" variant="secondary" className="w-full bg-yellow-300"  > Sign up</Button>
            </div>
        </form>
    )
}