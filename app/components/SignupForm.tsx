"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock } from "lucide-react"
import { signIn } from "next-auth/react"
import { redirect } from "next/navigation"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import Spinner from "./Spinner"
import {toast} from 'sonner'

export default function Form() {

      

    const [email,setEamil] = useState<null | string>(null)
    const [loading, setLoading] = useState(false);
    const router  = useRouter()




   
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        setLoading(true)
        const response = await fetch('/api/user', {
            method: "POST",
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                password: formData.get('password')
            })
        });
       if (response.ok) {
        toast.success('account created successfully')
         router.push('/login')
       }
       console.log(response);
       setLoading(false)
       
        
    }


    return (
        <>
            <h1 className="text-3xl font-semibold text-white flex justify-center items-center self-center">Sign up</h1>
            <div >
                <form onSubmit={handleSubmit} className="space-y-4 mt-5">

                <Input type="name" name="name" placeholder="Name" className="bg-[#333] text-white placeholder:text-xs placeholder:text-gray-400 w-full inline-block" />
                <Input type="email" name="email" placeholder="Email" onChange={(e)=>setEamil(e.target.value)} className="bg-[#333] text-white placeholder:text-xs placeholder:text-gray-400 w-full inline-block" />
                <Input type="password" name="password" placeholder="Password" className="bg-[#333] text-white placeholder:text-xs placeholder:text-gray-400 w-full  inline-block" />
                <Button type="submit" variant="secondary" className="w-full bg-yellow-300 py-2"  >{loading ? (<Spinner/>):( "Sign up")}</Button>
                </form>
            </div>
        </>
    )
}