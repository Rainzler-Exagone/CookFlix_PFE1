import AvatarIcon from "../components/Avatar"
import Navbar from "../components/Navbar"
import { IngredientLists } from "../components/Input"
import Poster from "../components/CookPoster"
import Ingredients from "../components/Ingredients"
import "./style.css"


export default function HomePage(){
    return (
       <main>
        <section id="min"  className="min-h-screen">
        <div className="absolute overflow-hidden  h-[100vh] ">
            <Poster/>
             </div>
             <div className="flex  justify-center items-center relative md:h-[100vh] sm:h-[40vh] ">
               <IngredientLists/>
             </div>
        </section>
        <section id="info" className="scrollbar-hide bg-cover bg-no-repeat  overflow-hidden overflow-y-auto pt-20  justify-center  h-screen bg-transparent">
      
        <Ingredients/>
        
        </section>

       </main>
    )
}