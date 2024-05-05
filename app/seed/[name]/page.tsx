"use client"
import { useEffect, useState } from "react";
import { getRecipeById } from "../../components/functions/getRecipe"
import { getByIngredients } from "../../components/functions/call"
import YoutubeEmbed from "../../components/VideoEmbed"
import "./style.css"
import Navbar from "@/app/components/Navbar";

// export async function getRecipeById(id:any) {
//     //  const name = [ 'Eggs', 'Sugar', 'Milk', 'Flour', 'Baking powder' ]
//     //   const queryParams = name.toString()
//       const response = await fetch(`http://localhost:3000/api/recipe/${id}`, {
//         method: 'GET',
//       }
//       );

//       if (!response.ok) {
//         throw new Error('Failed to fetch sidebar items');
//       }
//       const data = await response.json();
//       console.log(data);

//       return data;
//     }


export default function Product({ params }: any) {
    const [selectedItems, setSelectedItems] = useState<any>([]);
    const [meal, setMeal] = useState<any>([])
    const [id, setId] = useState();




    useEffect(() => {
        getRecipeById(params)
            .then((data) => {
                setMeal(data);
            })
            .then((data) => {
                console.log(meal)
            })
            .catch((error: any) => { console.log(error) });



    }, []);

    //   const handleSearch = async () => {

    //     if (selectedItems != "") {
    //       const search = await getRecipeById(params);
    //       setMeal(search);
    //       setId(search.id)




    //     }
    //     else {
    //       console.log("empty")

    //     }
    //   console.log(params)
    //   }

    const v: any = JSON.stringify(meal)
    return (
    <>
    <main>

    </main>
    </>
    )
}
