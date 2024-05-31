"use client"
import { Button } from "@/components/ui/button";
import { IngredientLists } from "@/app/components/Input"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { fetchSidebarItemsFromDatabase } from "@/app/components/Input"
import {MealForm} from "@/app/components/admin/mealForm"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"
import { Autocomplete, FormControlLabel, Radio, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";
import { Form, FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {RadioGroupForm} from "@/app/components/admin/formC"
import {ToastDemo} from "@/app/components/toast"
import { ScrollArea } from "@/components/ui/scroll-area";
import {createMeal} from "@/app/components/functions/CreateMeal"


export default function AdminePage() {
    const [selectedIngredients, setSelectedIngredients] = useState<any>([]);
    const [ingredientInputValue, setIngredientInputValue] = useState("");
    const [newoptions, setNewOptions] = useState([])
    const [selectedValue, setSelectedValue] = useState('');


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
            .then((data) => {
                setNewOptions(data); console.log(data);
            })
            .catch((error: any) => { console.log(error) });
    }, []);

    return (
        <>
            <section className="h-[83vh]  flex flex-col space-y-5 items-center justify-center  space-x-7 md:flex-row md:space-y-0 ">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button>Add Recipe</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add Recipe</DialogTitle>
                            <DialogDescription>
                                Add a new recipe. Click save when you're done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input placeholder="name" id="name" className="col-span-3" />
                            </div>
                            {/* <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input id="username" className="col-span-3" />
                            </div> */}
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="description" className="text-right">
                                    description
                                </Label>
                                <Textarea placeholder="description " className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="description" className="text-right">
                                    Difficulty
                                </Label>
                                {/* <RadioGroup defaultValue="easy">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="easy" id="r1" />
                                        <Label htmlFor="r1">Easy</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="medium" id="r2" />
                                        <Label htmlFor="r2">Medium</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="hard" id="r3" />
                                        <Label htmlFor="r3">Hard</Label>
                                    </div>
                                </RadioGroup> */}
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="description" className="text-right">
                                    description
                                </Label>
                                <Textarea placeholder="description " className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="description" className="text-right">
                                    Compositions
                                </Label>
                                <Textarea placeholder="description " className="col-span-3" />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
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
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Name
                                    </Label>
                                    <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="col-span-3" />
                                </div>
                                {/* <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input id="username" className="col-span-3" />
                            </div> */}
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="image" className="text-right">
                                        image
                                    </Label>
                                    <Input type="text" id="image" name="image" value={formData.image} onChange={handleChange} placeholder="image-url " className="col-span-3" />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="saison" className="text-right">
                                        Saisone
                                    </Label>
                                      <input type="radio" id="r1" value="a"/> <label htmlFor="r1">a</label>
                                      <input type="radio" id="r2" value="b"/> <label htmlFor="r2">b</label>
                                      <input type="radio" id="r3" value="c" /> <label htmlFor="r3">c        </label>

                                    {/* <RadioGroup name="saisone"  defaultValue="easy"  onValueChange={handleChange} value={formData.saisone} className="">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem  value="winter" id="r1" />
                                        <Label htmlFor="r1">Winter</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="Summer" id="r2" />
                                        <Label htmlFor="r2">Summer</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem  value="Autumn" id="r3" />
                                        <Label htmlFor="r3">Autumn</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem  value="Spring" id="r4" />
                                        <Label htmlFor="r3">Spring</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="All" id="r5" />
                                        <Label htmlFor="r3">All</Label>
                                    </div> 
                                </RadioGroup>
                                    */}

                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="description" className="text-right">
                                    Difficulty
                                </Label>
                                {/* <RadioGroup defaultValue="easy">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="easy" checked={formData.difficulty === 'easy'} id="r1" />
                                        <Label htmlFor="r1">Easy</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="medium" checked={formData.difficulty === 'medium'} id="r2" />
                                        <Label htmlFor="r2">Medium</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="hard" checked={formData.difficulty === 'hard'} id="r3" />
                                        <Label htmlFor="r3">Hard</Label>
                                    </div>
                                </RadioGroup> */}
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="description" className="text-right">
                                    Ingredients
                                </Label>
                                {/* <React.Fragment>
                                    <Autocomplete


                                        options={newoptions}
                                        multiple
                                        style={{ width: "100%" }}

                                        className="bg-white/55 col-span-3"
                                        onChange={(event, newIngredient: any) => {
                                            setSelectedIngredients(newIngredient);
                                        }}
                                        inputValue={ingredientInputValue}
                                        onInputChange={(event, newIngredientInputValue) => {
                                            setIngredientInputValue(newIngredientInputValue);
                                        }}
                                        renderInput={(params) => {

                                            return <TextField value={formData.ingredients} label='Select your ingredients' {...params} />;
                                        }}
                                    ></Autocomplete>
                                </React.Fragment> */}

                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>

{/* ---------------------------------------------------------------------------------------------------- */}

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
                       <ScrollArea className="h-72 w-full p-2 rounded-md border">
                       <RadioGroupForm/>
                       </ScrollArea>
                </DialogContent>
            </Dialog>


    <ToastDemo/>

        </section >
        </>
    )
}