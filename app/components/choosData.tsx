"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm , useFormContext } from "react-hook-form"
import { z } from "zod"
import {useEffect, useState} from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { ListItemSecondaryAction, Skeleton } from "@mui/material"




const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

export function CheckboxReactHookFormMultiple() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false)
  
  async function fetchSidebarItemsFromDatabase() {
    setLoading(true)
    const response = await fetch('http://localhost:3000/api/items',{
      method: 'GET',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch sidebar items');
    }
    setLoading(false)
    const data = await response.json();
    console.log(data)
    //
    var lata = data;

var result = lata.reduce( (acc:any, obj) => {
    acc[obj.type] = acc[obj.type] || [];
    acc[obj.type].push(obj);
    return acc;
}, {});

    return data;
  }
 
  

   useEffect(() => {
     const  data = fetchSidebarItemsFromDatabase()
     .then((data) => {setItems(data);})
     .catch((error : any) => {console.log(error) });
   },[]);

   

   const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [],
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
    const res  = JSON.stringify(data,null,2)
    console.log(res)
  }

  


  return (
    
    
    
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       <FormField
          control={form.control}
          name="items"
          render={(item) => (
            <FormItem>
              {items.map((item:any) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
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
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
      
        <Button type="submit" >Submit</Button>
       </form>
    </Form>
    
    // <>
    // <Button onClick={fetchSidebarItemsFromDatabase}>click</Button>
    // </>
  )
}
