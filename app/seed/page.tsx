import { Button } from "@/components/ui/button"
import prisma from "../utils/db"

export default async function SeedDatabase (){
   async function postData() {
    "use server"
    
    const response = await prisma.ingredients.createMany({
     data :[
        {
            name: "Garlic",
            type: "Pantry_Essentials",
            imagesrc: "https://media.istockphoto.com/id/499147864/photo/garlic.jpg?s=612x612&w=0&k=20&c=-9b483V6UP2UrljEYZDcEBEwzkPqb3u5MIJ3-Maofuc="
        },
        {
            name: "Egg",
            type: "Pantry_Essentials",
            imagesrc: "https://media.istockphoto.com/id/91261622/photo/eggs.jpg?s=612x612&w=0&k=20&c=6Tixf53VmUqsjVMSQz8q_d0oBr72SZ_dSGNlcJLry-g="
        },
        {
            name: "Butter",
            type: "Pantry_Essentials",
            imagesrc: "https://media.istockphoto.com/id/177834117/photo/butter-isolated-on-white.jpg?s=612x612&w=0&k=20&c=wKXNDSvB-tzfT9RPdmKsH2JAGpBv7OISdUmGdegupxg="
        },
        {
            name: "Milk",
            type: "Pantry_Essentials",
            imagesrc: "https://st2.depositphotos.com/1924223/5984/i/450/depositphotos_59849805-stock-photo-glass-of-milk.jpg"
        },
        {
            name: "Flour",
            type: "Pantry_Essentials",
            imagesrc:"https://media.istockphoto.com/id/172876049/photo/whole-wheat-flour.jpg?s=612x612&w=0&k=20&c=bK48VqkF49oReBRhDoGfMORGapX2iWosEeImG_SXA8Q="
        },
        {
            name: "Sugar",
            type: "Pantry_Essentials",
            imagesrc:"https://media.gettyimages.com/id/681197933/photo/sugar-spoon-on-wood.jpg?s=612x612&w=0&k=20&c=QZblQ5PkPLfP3GhgmTAMywXzfBNIXsZXntRoaCt5w8E="
        },
        {
            name: "Olive oil",
            type: "Pantry_Essentials",
            imagesrc:"https://media.gettyimages.com/id/1210564532/photo/olive-oil-and-olives-isolated-on-reflective-white-background.jpg?s=612x612&w=0&k=20&c=f9ztGaRNbXcl-MKELAQg0VtRP5m-4uVN4fvr3TpghDY="
        },
        {
            name: "Rice",
            type: "Pantry_Essentials",
            imagesrc:"https://media.istockphoto.com/id/491090528/photo/cooked-rice.jpg?s=612x612&w=0&k=20&c=WNeDEUEioyyk6FQZQrVMrtFMDVdtbwtK951eZ8q5FNY="
        },
        {
            name: "Soy sauce",
            type: "Pantry_Essentials",
            imagesrc:"https://images.immediate.co.uk/production/volatile/sites/30/2020/02/Soy-sauce-2e1d5da.jpg?quality=90&resize=556,505"
        },
        {
            name:"bread",
            type:"Pantry_Essentials",
            imagesrc:"https://media.istockphoto.com/id/479684838/photo/french-bread.jpg?s=612x612&w=0&k=20&c=sFsou4TgcW9NsV6j0wil4wOmRFHYfOwXuPukT-NMsrw="
        },
        {
            name: "Button Mushroom",
            type:"Mushrooms",
            imagesrc:"https://s3.amazonaws.com/grocery-project/product_images/button_mushrooms.jpg"
        },
        {
            name:"Shiitake Mushroom",
            type:"Mushrooms",
            imagesrc:"https://media.istockphoto.com/id/469901037/photo/shiitake-mushroom.jpg?s=612x612&w=0&k=20&c=xUfeWH019X56EOdaaH7u18TfjA3mThWs65xmuXRjLXE="
        },
        {
            name:"Portobello Mushroom",
            type:"Mushrooms",
            imagesrc:"https://t3.ftcdn.net/jpg/05/68/04/22/360_F_568042226_p6Gtb6lwD5TCJLoSpNGj3W426pU6o1ap.jpg"
        },
        {
            name:"Porcini Mushroom",
            type:"Mushrooms",
            imagesrc:"https://t3.ftcdn.net/jpg/05/68/04/22/360_F_568042226_p6Gtb6lwD5TCJLoSpNGj3W426pU6o1ap.jpg"
        }
     ]
    })
   }
    return(
    <div>
        <form action={postData}>
            <Button type="submit">Generate</Button>
        </form>
    </div>
    )
}