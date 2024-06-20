'use client'
import { Heart } from "lucide-react";
import { getfavorit,setfavorit } from "../actions/meal";
import { startTransition, useOptimistic, useTransition } from "react";

export default function HeartIcon(recipeId : string , userId:string){
    // const [optimisticLikes, addOptimisticLike] = useOptimistic(
    //     { favoritState, sending: false },
    //     (state, newfavoritState) => ({
    //     ... state,
    //     favoritState: newfavoritState,
    //     sending: true,}))
    
    return (<>
    <div  onClick={()=>(startTransition(()=>setfavorit(recipeId as string, userId as string)))}><Heart className="text-red-500"/></div>
    </>)
}