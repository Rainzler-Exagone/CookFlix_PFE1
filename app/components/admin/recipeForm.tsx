"use client"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { getAllMeals } from "../functions/getAllMeals"
import { useEffect, useState, useTransition } from "react"
import {getMeal,createRecipe} from "../../actions/meal"
import { useFormStatus } from "react-dom"




const comp =  z.object({
  name: z.string(),
  quantity:z.preprocess((a) => parseFloat(z.string().parse(a)),z.number().gte(0, 'Must be positive')),
  unit:z.string()}).array()

export const FormSchema = z.object({
   category: z.enum(["Entrance", "Main_dish", "Dessert", "Juice"], {
    required_error: "You need to select a category .",
  }),
   image: z.string().url(),
  description: z.string().min(1, "description shouldn't be empty"),
  //   saisone: z.array(z.string()),
  preparation_time: z.preprocess((a) => parseFloat(z.string().parse(a)),
  z.number().gte(0, 'Must be positive')),
  cooking_time: z.preprocess((a) => parseFloat(z.string().parse(a)),
  z.number().gte(0, 'Must be positive')),
  rest_time: z.preprocess((a) => parseFloat(z.string().parse(a)),
  z.number().gte(0, 'Must be positive')),
  difficulty: z.enum(["hard", "medium", "easy"], {
    required_error: "You need to select a difficulty level.",
  }),
  events: z.enum(["Achoura", "Marriage", "Circumcision", "Mouloud", "Eid", "Ramadhan"], {
    required_error: "You need to select at least one occassion .",
  }),
  videoEmbed: z.string().min(1, "videoEmbed shouldn't be empty"),
  steps:z.array(z.object({
      stepNo:z.preprocess((a) => parseFloat(z.string().parse(a)),
      z.number().gte(0, 'Must be positive')),
      step:z.string().min(0)
    })),  
  composition:z.array(z.object({
      name:z.string().min(0),
      quantity:z.preprocess((a) => parseFloat(z.string().parse(a)),
      z.number().gte(0, 'Must be positive')),
      unit:z.string().min(0)
    })),

  

})

export const mealSchema = z.object({
  name: z.string().min(0)
})



export default function RecipeForm() {
  
  const [meals, setMeals] = useState<any>([]);
  const [compo, setCompo]  = useState<any>({
    category :"",
    difficulty:"",
    image:"",
    ingredients:[]
  });
  const [meal, setMeal] = useState({
    name: ""
  });
  let [isPending, startTransition] = useTransition();
  const { pending } = useFormStatus();
  var items : any

  let index = 0  
 
  
 



 
  
  const form_meal = useForm<z.infer<typeof mealSchema>>({
    resolver: zodResolver(mealSchema),
  })

  

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    
    defaultValues: {
      cooking_time:0,
     preparation_time:0,
     rest_time:0,
     steps:[{stepNo:0}]
    },
  })

  // const {setValue}  = form

  const {setValue,control} = form

  const { fields:stepFields, append, remove } = useFieldArray({
    control,
    name: "steps", 
  });
 

  useEffect(() => {
    
    getAllMeals()
    .then((data:any)=>(
     console.log(data),
     setMeals(data)
      
    ))
    .catch((error:any)=>(console.log(error)
    ))
  }, []);

  

   async function onSubmit_meal(data: z.infer<typeof mealSchema>) {
    const response = await getMeal(data)
    items = await response.data
  
    
    //you need to creat an array of object that contains response.data [{...,...,...}]


    {
      response.data   ? (
        toast({
          title: "Recipe  found successfuly !",
          
        })
      ):(
        toast({
          title: "Recipe not found !",
          
        })
      )
    }

    console.log(response.data?.category);
    
   console.log( FormSchema.parse({
    category:response.data?.category!,
    image:response.data?.image!,
    description:'ksdkusf djbsd',
    preparation_time:'1.2',
    cooking_time:'1.3',
    rest_time:'0.5',
    difficulty:response.data?.difficulty!,
    events:'Achoura',
    videoEmbed:'ukdksd',
    meal_name:'Babaa',
    steps:[{stepNo:'1',step:'breakingbad'}],
    composition:[{name:'olive',quantity:'12',unit:'g'}]

}))
   
setCompo({
  category:response.data?.category as string,
  difficulty: response.data?.difficulty as string,
  image:response.data?.image as string,
  ingredients:response.data?.Ingredients
})

setMeal({
  name: data.name
})
console.log(response.data?.image!);
console.log(response.data?.Ingredients!);



  setValue('category',response.data?.category!)
setValue('image',response.data?.image!)
setValue('difficulty',response.data?.difficulty!)


console.log(compo);

    
  console.log(response);
  
  console.log(items);
{items.Ingredients.map((el:any,index:any)=>(
    console.log(el.name + index),
    setValue(`composition.${index}.name`,el.name)

))}
console.log(meal);

 console.log(data);
 
 
    
  }

  async function onSubmit(data: z.infer<typeof FormSchema>) {

    const response = await createRecipe(data,meal)
    console.log(response);
    
    {data?
       (
        toast({
          title: "Recipe created successfuly !", 
        })
       ):(

        toast({
          title: "Recipe was not created!",  
        })
       )
    }
    
   
  //  console.log(meals);
  console.log(meal);
  
  console.log(data);
    
  }


  

   
 

  return (
    <>
    
      {/* <Form {...form}>
        <form onSubmit={form_meal.handleSubmit(onSubmit_meal)}>
           
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="font-semibold">Name of meal</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="meal" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />  

          <Button type="submit">Send</Button>
        </form>
     
      </Form> */}
      
     
      <Form {...form} {...form_meal}>
        <form onSubmit={form_meal.handleSubmit(onSubmit_meal)} className="w-2/3 space-y-6 my-7">
        <FormField
            control={form_meal.control}
            name="name"
            render={({field}) => (
              <FormItem className="space-y-3">
                <FormLabel className="font-semibold">Name</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='name'  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" aria-disabled={pending} >Submit</Button>
        </form>

        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 pr-3"> 
         <FormField
          control={form.control}
            name="category"
            render={( ) => (
              <FormItem className="space-y-3 w-1/2">
                <FormLabel className="font-semibold">Category</FormLabel>
                <FormControl>
                  <Input  defaultValue={compo.category} value={compo.category}   placeholder='category'   />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
         />
         <FormField
          control={form.control}
            name="image"
            render={() => (
              <FormItem className="space-y-3">
                <FormLabel className="font-semibold">Image</FormLabel>
                <FormControl>
                  <Input  defaultValue={compo.image} value={compo.image} placeholder='image'    />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
         />
         <FormField
          control={form.control}
            name="description"
            render={({field}) => (
              <FormItem className="space-y-3">
                <FormLabel className="font-semibold">Description</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='description'     />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
         />
 
          



          <FormField
            control={form.control}
            name="difficulty"
            render={() => (
              <FormItem className="space-y-3 w-1/2">
                <FormLabel className="font-semibold">Difficulty</FormLabel>
                <FormControl>
                  <Input  defaultValue={compo.difficulty} value={compo.difficulty}  placeholder='difficulty' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           
           

   
  
  <FormField
            control={form.control}
            name="cooking_time"
            render={({ field }) => (
              <FormItem className="space-y-3 w-1/3">
                <FormLabel className="font-semibold">Cooking Time</FormLabel>
                <FormControl>
                  <Input {...field} placeholder=""  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

            
  <FormField
            control={form.control}
            name="preparation_time"
            render={({ field }) => (
              <FormItem className="space-y-3 w-1/3">
                <FormLabel className="font-semibold">Preparation Time</FormLabel>
                <FormControl>
                  <Input {...field}  placeholder=" "  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

            
  <FormField
            control={form.control}
            name="rest_time"
            render={({ field }) => (
              <FormItem className="space-y-3 w-1/3">
                <FormLabel className="font-semibold">Rest Time</FormLabel>
                <FormControl>
                  <Input {...field} placeholder=" " defaultValue={0}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        
<FormField
            control={form.control}
            name="events"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="font-semibold">Event</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Achoura" />
                      </FormControl>
                      <FormLabel className="font-normal">Achoura</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Marriage" />
                      </FormControl>
                      <FormLabel className="font-normal">Marriage</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Circumcision" />
                      </FormControl>
                      <FormLabel className="font-normal">Circumcision</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Eid" />
                      </FormControl>
                      <FormLabel className="font-normal">Eid</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Ramadhan" />
                      </FormControl>
                      <FormLabel className="font-normal">Ramadhan</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Mouloud" />
                      </FormControl>
                      <FormLabel className="font-normal">Mouloud</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

                      
  <FormField
            control={form.control}
            name="videoEmbed"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel className="font-semibold">Video Embed ID</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Embed id" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> 


<FormLabel>composotion</FormLabel>
          {compo.ingredients.map((el:any,index:any)=>(
              <div key={index} className="flex w-full space-x-2">
                 <FormField
                control={form.control}
                name={`composition.${index}.name`}
                render={() => (
                  <FormItem className="w-1/2">
                    <FormControl>
                      <Input value={el.name}  placeholder={`ingredientName ${index + 1}`} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                 <FormField
                control={form.control}
                name={`composition.${index}.quantity`}
               
                render={({ field }) => (
                  <FormItem className="w-1/4">
                    <FormControl>
                      <Input className="w-full"  {...field} placeholder={'quantity'} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                 <FormField
                control={form.control}
                name={`composition.${index}.unit`}
               
                render={({ field }) => (
                  <FormItem className="w-1/4">
                    <FormControl>
                      <Input className="w-full"  {...field} placeholder={'unit'} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              </div>
          ))}
                 {/* if u find time think about a way to make the stepNo autofilled with index+1 each time added */}
                 <br />
          <FormLabel>Steps</FormLabel>
          <Button type="button" className="ml-8" onClick={() => append({ stepNo: index+1 ,step:"" })}>Add</Button>
          {stepFields.map((el,index)=>(
              <div key={index} className="flex w-full space-x-2">
                 <FormField
                control={form.control}
                name={`steps.${index}.stepNo`}
                render={({field}) => (
                  <FormItem className="w-1/2">
                    <FormControl>
                      <Input {...field} className="w-full" placeholder={`StepNo ${index + 1}`} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                 <FormField
                control={form.control}
                name={`steps.${index}.step`}
               
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input className="w-full"  {...field} placeholder={`Step ${index + 1}`} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
                 <div className="w-20 cursor-pointer rounded-md bg-orange flex justify-center items-center text-white px-4 mr-1" onClick={() => remove(index)}>Remove</div>
              </div>
          ))}
            
        
         <Button type="submit">Submit</Button>

        </form>
      </Form>
    </>
  )
}









