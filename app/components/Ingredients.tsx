import Image from "next/image";
import prisma from "../utils/db";
import AvatarIcon from "./Avatar";
import { Button } from "@/components/ui/button";

export async function getData() {

    const data = await prisma.ingredients.findMany({

        where: {
            type: "Pantry_Essentials"
        },
        select: {
            name: true,
            id: true,
            imagesrc: true,
            type: true,

        }

    })
    return data
}



export default async function Ingredients() {

    const data = await getData();

    
    

    return (
        <div className="grid grid-cols-5 sm:grid-cols-2 md:grid-cols-11 mt-4 gap-6">
            {data.map((ingredient) => (
                <div key={ingredient.id} className=" h-20 hover:cursor-pointer">
                   <Image  alt="ing" width={20} height={20} src={ingredient.imagesrc}/>                   
                    </div>
            ))}

        </div>
    )

}