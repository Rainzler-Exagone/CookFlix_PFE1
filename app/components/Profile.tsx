'use client'
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import ImageUpload from "./imageUploader"
import { Avatar } from "@mui/material"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import {  getUser, updateUser } from "../actions/meal"
import { toast } from "@/components/ui/use-toast"

export const FormSchema = z.object({
    
   Username: z.string().min(1, "username shouldn't be empty"),
   
   email: z.string().min(1, "email shouldn't be empty")
 
 })

export default function Profile(){
    const {data: session} = useSession()
    
    
   const username = session?.user?.name 
    const email = session?.user?.email 
    
    const [compo, setCompo]  = useState<any>({
       name:"username",
       email:"email"
      });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
         console.log('this is session email',session?.user?.email);
         
        //   console.log(data);
        //    console.log(email);
          
          const answer = await updateUser(session?.user?.email as string,data.Username,data.email)
          
         if (answer) {
           let res = await getUser(email as string)
          console.log(res);
          
         }


        // {answer?
        //     (
        //      toast({
        //        title: "Recipe created successfuly !", 
        //      })
        //     ):(
     
        //      toast({
        //        title: "Recipe was not created!",  
        //      })
        //     )
        //  }
    }
  
    return(<>

    <Form {...form} >
      <FormLabel className="text-4xl w-full font-montserrat">Profile</FormLabel>
    <div className="flex ">
    <div className="flex flex-col h-3/3 w-1/3 items-center ">
    
    <div className="w-2/3 h-3/4 flex items-center">
    <Avatar
            alt='avatar'
            src={session?.user?.image as string}
            sx={{ width: 100, height: 100 }}
            className=''
            >
             </Avatar>
    </div>
             <ImageUpload /> 
               
    </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3  h-auto  space-y-6" >
         <FormField 
         control={form.control}
         name="Username"
         render={({field}) => (
            <FormItem className="space-y-3">
              <FormLabel className="font-semibold">Username</FormLabel>
              <FormControl>
                <Input {...field} placeholder={compo.name}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
         />
         <FormField 
         control={form.control}
         name="email"
         render={({field}) => (
            <FormItem className="space-y-3">
              <FormLabel className="font-semibold">Email</FormLabel>
              <FormControl>
                <Input {...field}  placeholder={compo.email}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
         />
         <Button type="submit" >Update</Button>
        </form>
    </div>
    </Form>
      {/* <Card  className=' m-5 h-[79vh]'>
          
          <div className='flex justify-center p-4  items-end '>
               
          <Avatar
            alt='avatar'
            src={session?.user.image as string}
            sx={{ width: 120, height: 120 }}
            className=''
            >
             </Avatar>
            
 
 
            
            <Button className='bg-red-700 m-4 ' variant="destructive">Delete</Button>
          
          </div>
 
       <CardContent className='flex flex-col justify-center  items-center'>
        <div className='w-1/2 h-1/2 mt-10 '>
 
        <div className='flex justify-between space-x-5 m-2'><h1 className='font-bold'>Name</h1><h1>{username}</h1><h1>Edit</h1></div>
         <Separator/>
         <div className='flex justify-between space-x-5 m-2'><h1 className='font-bold'>Email</h1><h1>{email}</h1><h1>Edit</h1></div>
         <Separator/>
         
        </div>
        
       </CardContent>
     </Card> */}
    </>)
}