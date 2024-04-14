import AvatarIcon from "../components/Avatar"
import Navbar from "../components/Navbar"
import { IngredientLists } from "../components/Input"
import Poster from "../components/CookPoster"
import Ingredients from "../components/Ingredients"


export default function HomePage(){
    return (
       <main>
        <section>
        <div className="overflow-hidden absolute  h-full">
            <Poster/>
             </div>
             <div className="flex justify-center relative items-end h-[60vh]">
               <IngredientLists/>
             </div>
        </section>
        <section className="flex pt-20 justify-center h-screen bg-slate-500">
        <div className="w-5/6 h-5/6  relative bg-white ">
        <Ingredients/>
        </div>
        </section>
        <section className="flex justify-center h-screen bg-slate-500">
        <div className="w-5/6 h-5/6  bg-white "></div>
        </section>
       </main>
    )
}