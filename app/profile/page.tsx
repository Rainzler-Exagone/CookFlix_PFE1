"use client"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useSession } from 'next-auth/react';
import Avatar from '@mui/material/Avatar';
import {getProfile} from "@/app/components/functions/getProfile"
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Divider from '@mui/material/Divider';
import { Separator } from "@/components/ui/separator"
 import ImageUpload from "@/app/components/imageUploader"
 import {setImage} from "@/app/components/functions/setProfileImage"
import Image from 'next/image';

// import {
//   Avatar,
//   AvatarFallback,
//   AvatarImage,
// } from "@/components/ui/avatar"






export default function MediaCard() {
    const {data: session} = useSession()
    const avatar = session?.user?.image! 
    const username = session?.user?.name 
    const userId:any = session?.user?.id
    const email = session?.user?.email 
  

    console.log(session);
    

    // useEffect(() => {
    //   getProfile(userId)
    //  .then((data)=>{console.log(data);
    //   console.log(session);
      
    //  })
    //  .catch((error)=>{console.log(error);
    //  })
    // }, []);
  return (
    <>
    <Card  className=' m-5 h-[79vh]'>
          
         <div className='flex justify-center p-4  items-end '>
         <ImageUpload />           
         <Avatar
           alt='avatar'
           src={session?.user.image as string}
           sx={{ width: 120, height: 120 }}
           className=''
           >
            </Avatar>
           

{/* <Avatar>
      <AvatarImage src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=757989949620595&height=50&width=50&ext=1717174625&hash=AbaOEIXESbCRbWRs0CUVicAN"
 alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar> */}
           
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
    </Card>
    </>
  );
}
