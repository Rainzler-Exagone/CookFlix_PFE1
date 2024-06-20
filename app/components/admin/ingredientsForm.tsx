"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { toast} from "@/components/ui/use-toast"


const FormSchema = z.object({
  name: z.string().min(1, "name is required."),
  image : z.string().url(),
  type: z.enum(["Baking","Berries","Beverages","Bread___Salty_Snacks","Cheeses","Dairy___Eggs","Desserts___Sweet_Snacks","Dressings___Vinegars","Fish___Seefood","Fruits","Herbs___Spices","Meats","Mushrooms","Nuts___Seeds","Oils___Fats","Pastries","Poultry","Pre_Made_Doughs___Wrappers","Sauces","Seasonings___Spice_BlendsCanned_Food","Sugar___Sweetener","Vegetables___Greens"], {
    required_error: "You need to select the ingredient type.",
  }),
 
})

export function IngredientsForm() {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })


 const typeArr = ["Baking","Berries","Beverages","Bread___Salty_Snacks","Cheeses","Dairy___Eggs","Desserts___Sweet_Snacks","Dressings___Vinegars","Fish___Seefood","Fruits","Herbs___Spices","Meats","Mushrooms","Nuts___Seeds","Oils___Fats","Pastries","Poultry","Pre_Made_Doughs___Wrappers","Sauces","Seasonings___Spice_BlendsCanned_Food","Sugar___Sweetener","Vegetables___Greens"]

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Ingredient created successfuly !",
      // description: (
      //   <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //     <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      //   </pre>
      // ),
    })
    console.log(data);
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
      
      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel className="font-semibold">Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your name" />
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
              <FormLabel className="font-semibold">image</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Enter your image link" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          
          <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold">Type </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a meal to link the recipe with" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                {typeArr.map((typeArr:any,index:any)=>(
                  <SelectItem key={index} value={typeArr}>{typeArr}</SelectItem>
                ))}
                </SelectContent>
              </Select>
              
              <FormMessage />
            </FormItem>
          )}
        />


        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
