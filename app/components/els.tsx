import { Key, useEffect, useState } from "react";
// import { fetchItemsFromDatabase } from "./fetch/vegetables";
import {fetchPantryfromdatabase} from "./fetch/fetchPentry"
import {ChevronLeft,ChevronRight} from "lucide-react"
import { Button } from "@/components/ui/button";
import {male} from "./fetch/func"
import { fetchSidebarItemsFromDatabase } from "./functions/now";
import Ingredients from "./Ingredients";
import { Checkbox } from "@/components/ui/checkbox";


export async function DatabaseFill() {
    let chunkSize = 9
    let chunks = []
    const arr: any[] = []
    const response = await fetch('http://localhost:3000/api/items',{
      method: 'POST',
    });
    
    if (!response.ok) {
      throw new Error('Failed to create sidebar items');
    }
    const data = await response.json();
    
   
  }




export default function Els(){
    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState<any>([]);

  
      function checkboxhandler(e:any) {
         let isSelected = e.target.checked;
         let value= e.target.value;

         if (isSelected) {
          setSelectedItems([...selectedItems, value]);
         }else{
          return setSelectedItems((prevData:any)=>{
            return prevData.filter( (id:any)=>{
              return id !== value})
          })
         }
          

         console.log(selectedItems)
      }
        
    
    
       
    
      
         useEffect(() => {
          // fetchItemsFromDatabase()
          // fetchPantryfromdatabase()
          fetchSidebarItemsFromDatabase()
          .then((data : any) => {            
            setItems(data);          })
           .catch((error : any) => {console.log(error) });
         
         },[]);



         return (
            <>
            <div className="flex justify-center min-w-screen space-x-2 overflow-x-scroll">
              <ChevronLeft className="w-1/12"/>
              {items.map((item: any , index:any)=>(
                 <div key={index}>
                  
              { item.map((ingredients:any)=>(
                <div key={ingredients.id} className="h-32 w-32 bg-red-500">
                  {ingredients.map((e : any)=>(
                      <div key={e.id}>
                        <input type="checkbox" name="vh" id="vh" />
                      {/* <input type="checkbox"  id="vh"   value={e.name} onChange={checkboxhandler} className=" cursor-pointer"/> */}
                      <Checkbox id="vh" value={e.name} onChange={checkboxhandler}/>
                      <label htmlFor="vh">{e.type}</label>
                      
                      </div>
                  ))}
                </div>
              ))
                
              }
                 </div>
              ))}
             <Button className="bg-black" onClick={DatabaseFill}>click</Button>
              <ChevronRight className="w-1/12"/>
              <Button onClick={checkboxhandler}>click</Button>
               {selectedItems} 
            </div>
           </>
         )

}