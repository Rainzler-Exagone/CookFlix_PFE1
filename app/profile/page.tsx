"use client"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSession } from 'next-auth/react';
import Avatar from '@mui/material/Avatar';
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function MediaCard() {
    const {data: session} = useSession()
    const avatar = session?.user?.image as string
    const username = session?.user?.name as string
  return (
    <>
    <Card  className=' m-5'>
          <div className='w-full flex justify-center bg-gray-500 p-2'>
              <Avatar
              alt='avatar'
              src={avatar}
              sx={{ width: 190, height: 190 }}
              >
              </Avatar>
          </div>

      <CardContent className='flex flex-col justify-center items-center'>
        <Typography gutterBottom variant="h5" component="div">
         {username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions className='w-full flex justify-center '>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </>
  );
}
