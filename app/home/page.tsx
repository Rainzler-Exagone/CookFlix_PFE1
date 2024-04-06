import AvatarIcon from "../components/Avatar"
import Navbar from "../components/Navbar"
import { IngredientLists } from "../components/Input"


export default function HomePage(){
    return (
       <main>
         <div className="flex justify-center h-screen ">
            
            <IngredientLists />
             </div>
             
       </main>
    )
}