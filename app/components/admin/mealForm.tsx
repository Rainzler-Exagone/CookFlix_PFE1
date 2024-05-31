"use client"
import { createMeal } from "../functions/CreateMeal"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Checkbox } from "@/components/ui/checkbox"
import { Autocomplete, TextField } from "@mui/material"
import React, { useEffect, useState } from "react"
import { fetchSidebarItemsFromDatabase } from "../Input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { image } from "@nextui-org/react"
import { category } from "@prisma/client"




const items = [
  {
    id: "summer",
    label: "Summer",
  },
  {
    id: "winter",
    label: "Winter",
  },
  {
    id: "Autumn",
    label: "Autumn",
  },
  {
    id: "spring",
    label: "Spring",
  }
] as const

const nutrition = [
  {
    id: "calorie",
    label: "Calorie",
  },
  
  {
    id: "protein",
    label: "Protein",
  },
  {
    id: "fibre",
    label: "Fibre",
  },
  {
    id: "sodium",
    label: "Sodium",
  },
  {
    id: "Fat",
    label: "Fat",
  },
  {
    id: "cholesterol",
    label: "Cholesterol",
  },
  {
    id: "iron",
    label: "Iron",
  },
  {
    id:"carbs",
    label:"Carbs",
  },
  {
    id:"Sugar",
    label:"Sugar"
  }
] as const



// const nutritionalFactsSchema = nutrition.reduce((acc:any, name:any) => {
//   acc[name] = z.number().min(0, `${name} must be a positive number.`);
//   return acc;
// }, {});

const nutritionalFactsSchema = z.object({
  calorie: z.preprocess((a) => parseFloat(z.string().parse(a)),
  z.number().gte(0, 'Must be positive')),
  protein: z.preprocess((a) => parseFloat(z.string().parse(a)),
  z.number().gte(0, 'Must be positive')),
  fibre: z.preprocess((a) => parseFloat(z.string().parse(a)),
  z.number().gte(0, 'Must be positive')),
  sodium: z.preprocess((a) => parseFloat(z.string().parse(a)),
  z.number().gte(0, 'Must be positive')),
  Fat: z.preprocess((a) => parseFloat(z.string().parse(a)),
  z.number().gte(0, 'Must be positive')),
  cholesterol: z.preprocess((a) => parseFloat(z.string().parse(a)),
  z.number().gte(0, 'Must be positive')),
  iron: z.preprocess((a) => parseFloat(z.string().parse(a)),
  z.number().gte(0, 'Must be positive')),
  carbs: z.preprocess((a) => parseFloat(z.string().parse(a)),
  z.number().gte(0, 'Must be positive')),
  sugar: z.preprocess((a) => parseFloat(z.string().parse(a)),
  z.number().gte(0, 'Must be positive')),
})


const FormSchema = z.object({
  name: z.string().min(1, "name is required."),
  image: z.string().url(),
  //   saisone: z.array(z.string()),
  saisone: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  difficulty: z.enum(["hard", "medium", "easy"], {
    required_error: "You need to select a difficulty level.",
  }),
  category: z.enum(["Entrance", "Main_dish", "Dessert", "Juice"], {
    required_error: "You need to select a category .",
  }),
  nutritionalFacts: nutritionalFactsSchema
})


export function MealForm() {


  const [selectedIngredients, setSelectedIngredients] = useState<any>([]);
  const [saisone, setSaisone] = useState<any>([]);
  const [ingredientInputValue, setIngredientInputValue] = useState("");
  const [newoptions, setNewOptions] = useState([])
  const [selectedValue, setSelectedValue] = useState('');
  const array: string[] = []



  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      saisone: [], // Setting default value
      nutritionalFacts: {
        calorie: 0,
        protein: 0,
        fibre: 0,
        sodium: 0,
        Fat: 0,
        cholesterol: 0,
        iron: 0,
        carbs: 0,
        sugar: 0,
      }
    },
  })


  useEffect(() => {
    const data = fetchSidebarItemsFromDatabase()
      .then((data) => {
        setNewOptions(data); console.log(data);
      })
      .catch((error: any) => { console.log(error) });
  }, []);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
      //   const selected = {
      //     ingredients: {selectedIngredients}
      // } 
      // console.log(selected);



      console.log(data);

      console.log(selectedIngredients);
      console.log(data.saisone);
      data.saisone.forEach((item)=>{
         array.push(`${item}`)
      })

      console.log(array);




      const result = await createMeal(data.name,data.difficulty,data.saisone,data.image,selectedIngredients,data.category,data.nutritionalFacts)  

     console.log(result);

    


  }


  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6 ">

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="meal's name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input {...field} placeholder="image-url" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="saisone"
          render={() => (


            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">Sidebar</FormLabel>
                <FormDescription>
                  Select the items you want to display in the sidebar.
                </FormDescription>
              </div>
              {items.map((item: any) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="saisone"
                  render={({ field }) => {
                    return (
                      <FormItem
                        
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                  field.value?.filter(
                                    (value) => value !== item.id
                                  )
                                )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="difficulty"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Difficulty</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="easy" />
                    </FormControl>
                    <FormLabel className="font-normal">Easy</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="medium" />
                    </FormControl>
                    <FormLabel className="font-normal">Medium</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="hard" />
                    </FormControl>
                    <FormLabel className="font-normal">Hard</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Category</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Entrance" />
                    </FormControl>
                    <FormLabel className="font-normal">entrance</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Main_dish" />
                    </FormControl>
                    <FormLabel className="font-normal">main dish</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Dessert" />
                    </FormControl>
                    <FormLabel className="font-normal">dessert</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Juice" />
                    </FormControl>
                    <FormLabel className="font-normal">juice</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />





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

            return <TextField label='Select your ingredients'   {...params} />;
          }}
        ></Autocomplete>


        <Popover >

          <PopoverTrigger asChild>
            <Button variant="outline">Add Nutritional facts</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 h-1/2">
            <FormField
              control={form.control}
              name="nutritionalFacts"
              render={() => (

                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base">Nutritional facts</FormLabel>

                  </div>
                  
                    <FormField
                     
                      control={form.control}
                      name="nutritionalFacts.calorie"

                      render={({ field }) => {
                        return (

                          <FormItem className="space-y-3">
                            <FormLabel>Calorie</FormLabel>
                            <FormControl>
                              <Input id="calorie" type="number" inputMode="decimal" {...field} placeholder="enter a number" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>

                        )
                      }}
                    />
                  
                    <FormField
                      
                      control={form.control}
                      name="nutritionalFacts.protein"

                      render={({ field }) => {
                        return (

                          <FormItem className="space-y-3">
                            <FormLabel>Protein</FormLabel>
                            <FormControl>
                              <Input id="protein" type="number" inputMode="decimal" {...field} placeholder="enter a number" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>

                        )
                      }}
                    />
                  
                    <FormField
                      
                      control={form.control}
                      name="nutritionalFacts.fibre"

                      render={({ field }) => {
                        return (

                          <FormItem className="space-y-3">
                            <FormLabel>Fibre</FormLabel>
                            <FormControl>
                              <Input id="fibre" type="number" inputMode="decimal" {...field} placeholder="enter a number" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>

                        )
                      }}
                    />
                  
                    <FormField
                      
                      control={form.control}
                      name="nutritionalFacts.sodium"

                      render={({ field }) => {
                        return (

                          <FormItem className="space-y-3">
                            <FormLabel>Sodium</FormLabel>
                            <FormControl>
                              <Input id="sodium" type="number" inputMode="decimal" {...field} placeholder="enter a number" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>

                        )
                      }}
                    />
                  
                    <FormField
                      
                      control={form.control}
                      name="nutritionalFacts.Fat"

                      render={({ field }) => {
                        return (

                          <FormItem className="space-y-3">
                            <FormLabel>Fat</FormLabel>
                            <FormControl>
                              <Input id="Fat" type="number" inputMode="decimal" {...field} placeholder="enter a number" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>

                        )
                      }}
                    />
                  
                    <FormField
                      
                      control={form.control}
                      name="nutritionalFacts.cholesterol"

                      render={({ field }) => {
                        return (

                          <FormItem className="space-y-3">
                            <FormLabel>Cholesterol</FormLabel>
                            <FormControl>
                              <Input id="cholesterol" type="number" inputMode="decimal" {...field} placeholder="enter a number" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>

                        )
                      }}
                    />
                  
                    <FormField
                      
                      control={form.control}
                      name="nutritionalFacts.iron"

                      render={({ field }) => {
                        return (

                          <FormItem className="space-y-3">
                            <FormLabel>Iron</FormLabel>
                            <FormControl>
                              <Input id="iron" type="number" inputMode="decimal" {...field} placeholder="enter a number" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>

                        )
                      }}
                    />
                  
                    <FormField
                      
                      control={form.control}
                      name="nutritionalFacts.carbs"

                      render={({ field }) => {
                        return (

                          <FormItem className="space-y-3">
                            <FormLabel>Carbs</FormLabel>
                            <FormControl>
                              <Input id="carbs" type="number"  inputMode="decimal" {...field} placeholder="enter a number" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>

                        )
                      }}
                    />
                  
                    <FormField
                      
                      control={form.control}
                      name="nutritionalFacts.sugar"

                      render={({ field }) => {
                        return (

                          <FormItem className="space-y-3">
                            <FormLabel>Sugar</FormLabel>
                            <FormControl>
                              <Input id="sugar" type="number" inputMode="decimal" {...field} placeholder="enter a number" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>

                        )
                      }}
                    />
                  
                  <FormMessage />
                </FormItem>
              )}
            />

            

          </PopoverContent>
        </Popover>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}


