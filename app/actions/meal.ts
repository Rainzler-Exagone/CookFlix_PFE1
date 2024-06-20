"use server"
import { NextResponse } from "next/server"
import prisma from "../utils/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"
import {  mealSchema } from "../components/admin/recipeForm"
import {  FormSchema } from "../components/admin/recipeForm"
import { signJwtAccessToken } from "@/lib/jwt";
import * as bcrypt from "bcrypt"





type response = z.infer<typeof mealSchema>
type answer = z.infer<typeof FormSchema>

export async function getMeal(Name : response){

   try {

    const data =await prisma.meal.findFirst({
        where:{
            name:Name.name
        },
        select:{
            category:true,
            difficulty:true,
            image:true,
            Ingredients:true,
        }
       })
        console.log(data);
        
       revalidatePath('/admin')
       return {data}
   } catch (error) {
     return {message : 'Failed'+ error}
   }



}

export async function Delete(id:string){
 try {
    const data = await prisma.meal.delete({
        where:{
            id:id
        }
      })
      revalidatePath('/admin')
      return {data}
 } catch (error) {
      return {message:'error' + error}
 }
}

export async function createRecipe(information:answer,Name:response ){
   try {
    const data = await prisma.recipe.create({
        data:{
            category: information.category,
            Cooking_t: information.cooking_time,
            Preparation_t:information.preparation_time,
            Rest_t:information.rest_time,
            Difficulty:information.difficulty,
            Description:information.description,
            Events:information.events,
            image:information.image,
            videoEmbedId:information.videoEmbed,
            composition:{
                create:information.composition.map(el => ({
                    ingredientsName:el.name,quantity:el.quantity,unit:el.unit
                }))
            },
            Meal:{
                connect:{name:Name.name}
            },
            instruction:{
                create:information.steps.map(el => ({
                    StepNo:el.stepNo,description:el.step
                    
                }))
            }
         }
    })
    return {message:'done' + data}
   } catch (error) {
       return {message:error}
   }
}

export async function getRecipe(MealId: string){
try {
    const data = await prisma.recipe.findFirst({
        where:{
            mealId:MealId
        },
        select:{
            id:true,
            category:true,
            composition:true,
            Description:true,
            Cooking_t:true,
            Rest_t:true,
            Preparation_t:true,
            mealId:true,
            instruction:true,
            Difficulty:true,
            Events:true,
            favorit:true,
            image:true,
            videoEmbedId:true
        }
    })
    return {data}
} catch (error) {
    return {error}
}
}
export async function getNutri(MealId: string){
try {
    const data = await prisma.nutrition_facts.findFirst({
        where:{
           meal:{
            id:MealId
           }
        }
    })
    return {data}
} catch (error) {
    return {error}
}
}
export async function getAllRecipes() {
    const data = await prisma.recipe.findMany({})
    return {data}
}
export async function getfavorit(recipeid:string,userid:string) {
   try {
    const data  = await prisma.favorit.findFirst({
        where:{
            userId:userid,
            recipeId:recipeid
        }
    })
   revalidatePath(`/recipe/${recipeid}`)
    return data
   } catch (error) {
    return{error}
   }
}
export async function setfavorit(recipeid:any,userid:any) {
 
    const data  = await prisma.favorit.create({
        data:{
            recipeId:recipeid,
           userId:userid,

        }
    })
    revalidatePath(`/recipe/${recipeid}`)
    console.log('added');
    
}
export async function deletefavorit(recipeid:any,userid:string) {
 
    const data  = await prisma.favorit.delete({
       where:{
         userId_recipeId:{
            userId: userid,
            recipeId:recipeid
         }
    }
    })
    revalidatePath(`/recipe/${recipeid}`)
    console.log('deleted !');
    
}
export async function updateUser(email:string,userName:any,userEmail:any) {
    const data  = await prisma.user.updateMany({
         where:{
           email: email
         },
         data:{
            name:userName,
            email:userEmail
         }
    })
    
    return {data}
}
export async function getUser(email:string) {
    const data  = await prisma.user.findFirst({
         where:{
           email:email
         },
         select:{
            email:true,
            name:true
         }
    })
      
      
    return {data}
}
export async function getUserCredentials(email:string,password:any){
    try {

    const user = await prisma.user.findFirst({
        where: {

            email: email,
        }
    })
    
    if (user && (await bcrypt.compare(password,user.password as string))){
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