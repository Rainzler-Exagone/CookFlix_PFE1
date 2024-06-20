import AvatarIcon from "../components/Avatar"
import Navbar from "../components/Navbar"
import { IngredientLists } from "../components/Input"
import Poster from "../components/CookPoster"
import Ingredients from "../components/Ingredients"
import Shape from "../components/shape"
import "./style.css"
import Anti from "../components/antiShape"
import Footer from "../components/Footer"


export default function HomePage(){
    return (
       <>
       <main>
        <section id="min"  className="min-h-screen relative">
        <div className="absolute overflow-hidden  h-[100vh] ">
            <Poster/>
             </div>
             <div className="flex  justify-center items-center relative md:h-[100vh] sm:h-[40vh] ">
               <IngredientLists/>
             </div>
             <Shape/>
        </section>
        
        <section id="info" className="scrollbar-hide bg-cover bg-no-repeat   pt-20  justify-center  bg-transparent relative pb-4">
         <Anti/>
        <Ingredients/>
        
        </section>
       
       </main>
       <Footer/>
       </>
       
    )
}