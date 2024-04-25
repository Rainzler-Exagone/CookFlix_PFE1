"use client"
import { Autocomplete, createTheme, TextField, ThemeProvider } from "@mui/material";
import { orange, red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import prisma from "../utils/db";
import { Button } from "@/components/ui/button";






  


 



export async function fetchSidebarItemsFromDatabase() {
  let chunkSize = 9
  let chunks = []
  const arr: any[] = []
  const response = await fetch('http://localhost:3000/api/items',{
    method: 'GET',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch sidebar items');
  }
  const data = await response.json();
  console.log(data)
  {
    data.map((item:any) => {

      console.log(item.name)
      const count = arr.push(item.name)
    })
  }
  // console.log(data)
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
}
console.log(chunks)
//return chunks;
  return arr;

  
  
}

  
export const IngredientLists = () => {
  const ingredients = fetchSidebarItemsFromDatabase
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [ingredientInputValue, setIngredientInputValue] = useState("");
  const [newoptions, setNewOptions] = useState([])
 
  console.log(selectedIngredients);


  
  

  
  

  useEffect(() => {
    const  data = fetchSidebarItemsFromDatabase()
    .then((data) => {setNewOptions(data);})
    .catch((error : any) => {console.log(error) });
  },[]);

  return (

     
   
    <React.Fragment>
      
      <Autocomplete

        options={newoptions}
        multiple
        style={{ width: "80%"}}
        
        className="bg-white/55"
        onChange={(event, newIngredient:any) => {
          setSelectedIngredients(newIngredient);
        }}
        inputValue={ingredientInputValue}
        onInputChange={(event, newIngredientInputValue) => {
          setIngredientInputValue(newIngredientInputValue);
        }}
        renderInput={(params) => {
         
          return <TextField  label='Select your ingredients' {...params}  />;
        }}
      ></Autocomplete>
    </React.Fragment>
  );
};

