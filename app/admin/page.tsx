"use client"
import { getAllMeals } from "../components/functions/getAllMeals";
import { Button } from "@/components/ui/button";
import { IngredientLists } from "@/app/components/Input"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { fetchSidebarItemsFromDatabase } from "@/app/components/Input"
import {MealForm} from "@/app/components/admin/mealForm"
import {IngredientsForm} from "@/app/components/admin/ingredientsForm"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import { Autocomplete, FormControlLabel, Radio, TextField } from "@mui/material";
import React, { useEffect, useState, useTransition } from "react";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {RadioGroupForm} from "@/app/components/admin/formC"
import {ToastDemo} from "@/app/components/toast"
import { ScrollArea } from "@/components/ui/scroll-area";
import {createMeal} from "@/app/components/functions/CreateMeal"
import { Pencil, Trash2 } from "lucide-react";
import RecipeForm from "../components/admin/recipeForm";
import { Delete } from "../actions/meal";
import Spinner from "../components/Spinner";


export default function AdminePage() {
    const [selectedIngredients, setSelectedIngredients] = useState<any>([]);
    const [ingredientInputValue, setIngredientInputValue] = useState("");
    const [newoptions, setNewOptions] = useState([])
    const [selectedValue, setSelectedValue] = useState('');
    const [meals,setMeals] = useState<any>([])
    let [isPending, startTransition] = useTransition();
    const [loading, setloading] = useState(false);



    const [formData, setFormData] = useState({
        name: '',
        image: '',
        saisone: '',
        difficulty: '',
        ingredients: ''
    });


    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };











    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('Form Data:', formData);
        alert(`name: ${formData.name}, image: ${formData.image}, saisone: ${formData.saisone} , difficulty : ${formData.difficulty}, Ingredients: ${formData.ingredients}`);
    };

    //   const handleCreat = async () => {

    //     if (selectedIngredients != "") {
    //       const search = await getByIngredients(selectedIngredients);
    //       setMeal(search);
    //       setId(search.id)




    //     }
    //     else {
    //       console.log("empty")

    //     }





    //   };

    useEffect(() => {
        const data = fetchSidebarItemsFromDatabase()
            .then((data:any) => {
                setNewOptions(data); console.log(data);
            })
            .catch((error: any) => { console.log(error) });
    }, []);

    useEffect(() => {
        setloading(true)
       getAllMeals() 
       .then((data:any) => {
        setMeals(data)
        setloading(false)
         console.log(data);
    })
    .catch((error: any) => { console.log(error) });
    }, []);

    return (
        <>
            <section className="h-[20vh]  flex flex-col space-y-5 items-center justify-center  space-x-7 md:flex-row md:space-y-0 ">
                {/* ------------------------------------------------------------------------------------------------------------ */}


                <Dialog >
                    <DialogTrigger asChild>
                        <Button>Add Meal</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add Meal</DialogTitle>
                            <DialogDescription>
                                Add a new Meal. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="h-72 w-full  rounded-md ">
                        <div className="ml-4">
                        <MealForm />
                        </div>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>


                {/* ----------------------------------------------------------------------------------------------------------- */}


                <Dialog >
                    <DialogTrigger asChild>
                        <Button>Add Ingredient</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add Meal</DialogTitle>
                            <DialogDescription>
                                Add a new ingredient. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>

                        <div>

                        <IngredientsForm/>
                        </div>
                    
                </DialogContent>
            </Dialog>
{/* ---------------------------------------------------------------------------------------------------------------------- */}

    
<Dialog >
                    <DialogTrigger asChild>
                        <Button>Add Recipe</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add Recipe</DialogTitle>
                            <DialogDescription>
                                Add a new Recipe. Click save when you&apos;re done.
                            </DialogDescription>
                        </DialogHeader>
                        <ScrollArea className="h-72 w-full  rounded-md ">
                        <div className="ml-4">
                        <RecipeForm />
                        </div>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>



{/* -------------------------------------------------------------------------------------------------------------------------- */}
        </section >
        <section className="h-2/3">
           {loading ? (<div className="h-screen w-full flex justify-center items-center"><Spinner/></div>):( <Card className="mx-4">

                <CardHeader className="text-4xl">Meals</CardHeader>
                <CardContent>
                    <div className=" flex justify-around m-4 items-center gap-4 p-2 bg-slate-200">
                        <div className="w-1/6 flex justify-center "><h1>name</h1></div>
                        <div className="w-1/6 flex justify-center"><h1>saisone</h1></div>
                        <div className="w-1/6 flex justify-center"><h1>difficulty</h1></div>
                        <div className="w-1/6 flex justify-center"><h1>category</h1></div>
                        <div className="w-1/6 flex justify-around">
                        <div ><h1>delete</h1></div>
                        <div className="w-1/7" ><h1>update</h1></div>
                        </div>
                        
                    </div>
            {meals.map((e:any,index:any)=>(

            <Card key={index} className="flex justify-center m-4 items-center gap-4 p-2">
                <CardContent className="flex w-full space-x-4 mx-4 justify-around">
                    <div className="w-full items-center flex justify-around">
                    <div className="w-1/6 font-semibold  flex justify-center"><h1>{e.name}</h1></div>
                    <div className="w-1/6 flex justify-center " ><h1>{e.saisone[index] == null ? 'empty' : e.saisone[index] }</h1></div>
                    <div className="w-1/6 flex justify-center"><h1>{e.difficulty}</h1></div>
                    <div className="w-1/6 flex justify-center"><h1>{e.category == null ? 'empty' : e.category }</h1></div>
                    <div  className="cursor-pointer"  ><Trash2 /></div>
                    <Button className="cursor-pointer"><Pencil /></Button>
                    </div>
                </CardContent>
            </Card>
            ))}
            </CardContent>
            </Card>)}
        </section>
        <section className="h-2/3">
           {loading ? (<div className="h-screen w-full flex justify-center items-center"><Spinner/></div>):( <Card className="mx-4">

                <CardHeader className="text-4xl">Ingredient</CardHeader>
                <CardContent>
                    <div className=" flex justify-around m-4 items-center gap-4 p-2 bg-slate-200">
                        <div className="w-1/6 flex justify-center "><h1>name</h1></div>
                        <div className="w-1/6 flex justify-center"><h1>type</h1></div>
                        <div className="w-1/6 flex justify-around">
                        <div ><h1>delete</h1></div>
                        <div className="w-1/7" ><h1>update</h1></div>
                        </div>
                        
                    </div>
            {newoptions.map((e:any,index:any)=>(

            <Card key={index} className="flex justify-center m-4 items-center gap-4 p-2">
                <CardContent className="flex w-full space-x-4 mx-4 justify-around">
                    <div className="w-full items-center flex justify-around">
                    <div className="w-1/6 font-semibold  flex justify-center"><h1>{e.Name}</h1></div>
                    <div className="w-1/6 flex justify-center"><h1>{e.type}</h1></div>
                    <div  className="cursor-pointer"  ><Trash2 /></div>
                    <Button className="cursor-pointer"><Pencil /></Button>
                    </div>
                </CardContent>
            </Card>
            ))}
            </CardContent>
            </Card>)}
        </section>
        </>
    )
}