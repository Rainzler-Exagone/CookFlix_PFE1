"use client"
import { FormEvent, useEffect, useOptimistic, useState, useTransition } from "react";
import "./style.css"
import { getRecipeById } from "@/app/components/functions/Recipe_Meal"
import { getNutritionalFacts } from "@/app/components/functions/getNutritionalFacts"
import { checkFavorit } from "@/app/components/functions/checkFavorit"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
import { Heart, BellIcon, FileX } from "lucide-react";
import { Box, Divider, Rating, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';
import { CardActionArea, CardActions } from '@mui/material';
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import Spinner from "@/app/components/Spinner";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import NutritionLabel from "@/app/components/nutritional_label";
import { deletefavorit, getfavorit, setfavorit } from "@/app/actions/meal";
import { getUserId } from "@/app/components/functions/getUser";
import { handlefavorit } from "@/app/components/functions/doneFavorit";


export default function Product({ params }: any) {
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const [recipe, setRecipe] = useState<any>([])
  const [nutritional_facts, setNutritional_facts] = useState<any>([])
  const [factsId, setFactsId] = useState<any>();
  const [userId, setUserId] = useState('');
  const [id, setId] = useState();
  const [value, setValue] = useState<null | number>();
  const [Index, setIndex] = useState<any>()
  const [loading, setLoading] = useState(true);
  const [recipeID, setRecipeID] = useState('');
  const [favorit, setFavorit] = useState(false);
  const [loadingFact, setloadingFact] = useState(true);
  let [isPending, startTransition] = useTransition()
  const [isFavorit, setisFavorit] = useState(false);
  
  let isFAVORIT: boolean



  const { data: session } = useSession()
  const userName = session?.user?.name


  


  useEffect(() => {
    setLoading(true)
    getRecipeById(params.id)
      .then((data) => {
        setRecipe(data);
       

        if (data) {
          setLoading(false)
          setRecipeID(data.id)
          console.log(data.id);
          
          
        }
        
        console.log(recipeID);
        
      })
      .catch((error: any) => {
        console.log(error)

        setLoading(false)
      });
  }, [recipeID,params.id]);


  useEffect(() => {
    getNutritionalFacts(params.id)
      .then((data) => {
        setNutritional_facts(data);
        console.log(data);
        console.log(data);
      })
      .catch((error: any) => { console.log(error) });
  }, [params.id]);

  
  useEffect(() => {
    getUserId(userName as string)
      .then((data) => {
        setUserId(data.id)
        console.log(data);
        
        
        
      })
      .catch((error: any) => { console.log(error) });
  }, [userName]);

 






  // const handlefavorit = async () => {

  //   const response = await fetch('/api/favoritt', {
  //     method: "POST",
  //     body: JSON.stringify({
  //       userId: userID,
  //       recipeId: recipeID
  //     })

  //   })
  //   console.log(response);

  //   if (!response.ok) {
  //     throw new Error('Failed ');
  //   }
  //   const data = await response.json();
  //   console.log(data);

  //   return data;




  // }

  //server Action 
  async function fetchData(recipeID:any,userId:any) {
    const data = await getfavorit(recipeID,userId as string) 
    console.log(data);

    if (data) {
      setisFavorit(true)
    }
    else{
      setisFavorit(false)
      }
    console.log(isFavorit);
    
    
    
  }

  // useEffect(() => {
  //   handlefavorit(userID,recipeID)

  // }, []);

  // useEffect( () => {



  //   checkFavorit(userID,recipeID)

  //     .then((data) => {
  //       console.log(data);
  //       console.log(data);

  //       {data >  0 ? setFavorit(true) : setFavorit(false)}


  //     })
  //     .catch((error: any) => { console.log(error) });



  // }, []);




  const v: any = JSON.stringify(recipe)
  return (

    <>
      <section className="flex  m-4">


        <Card sx={{ maxWidth: 1326 }} className="w-full flex items-center  ">

          {
            loading ? (<CardContent className="h-screen w-screen flex justify-center items-center"><Spinner /></CardContent>)
              : (
                <CardContent sx={{ display: 'flex' }} className="grid md:flex justify-around  w-screen ">
                  <div className="   p-5 flex flex-col justify-around ">
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                          m: 1,
                          width: 375,
                          height: 253,
                        },
                      }}
                    >

                      <Paper elevation={3} >
                        {/* {recipe.map((el: any, index: any) => ( */}
                        <Image

                          alt="recipe-image"
                          src={recipe.Meal.image}
                          height={375}
                          width={400}

                          priority
                        />
                        {/* ))} */}
                      </Paper>
                    </Box>
                    {/* {recipe.map((el: any, index: any) => ( */}


                    <div className="md:flex mt-10  mb-8 justify-center items-center   overflow-hidden rounded-md hidden " >

                      <iframe

                        width='100%'
                        height="227"
                        src={`https://www.youtube.com/embed/${recipe.videoEmbedId}`}
                        frameBorder="0"

                        title="YouTube video player"
                        allow="accelerometer; 
      autoplay; 
      clipboard-write; 
      encrypted-media; 
      gyroscope; 
      picture-in-picture; 
      web-share"
                        allowFullScreen
                      ></iframe>

                    </div>
                    {/* ))} */}

                  </div>
                  {/* {
                  recipe.map((el: any, index: any) => ( */}
                  <div className="w-1/2 my-3 h-full ml-10">
                    <div className="flex justify-between items-center">
                      {/* {setse(el.Meal.)} */}
                      <Typography gutterBottom variant="h5" component="div" className="font-bold">
                        {recipe.Meal.name}
                      </Typography>
                        <Button  variant={'outline'} onClick={() => (startTransition(() => {isFavorit ? setfavorit(recipeID, userId as string ) : deletefavorit(recipeID, userId as string )}))}><Heart className={favorit ? "text-red-500" : "text-gray-500"} /></Button>

                      {/* <form onSubmit={handlefavorit}>
                        <Button type="submit" variant="outline" size="icon">
                          
                        </Button>
                      </form> */}
                    </div>
                    <div>

                      <Typography variant="body2" color="text.secondary">
                        {recipe.Description}
                      </Typography>
                    </div>
                    <div className="flex justify-center items-center h-1/4 w-full mt-10">
                      <div className=" w-1/4 h-1/2 m-2 ">
                        <div className="h-5/6 flex justify-center items-center text-center text-4xl md:text-5xl ">{recipe.composition.length}</div>
                        <div className=" text-center w-full ">Ingredients</div>
                      </div>
                      <Divider orientation="vertical" variant="middle" flexItem />
                      <div className=" w-1/4 h-1/2 m-2 ">
                        <div className="h-5/6 flex justify-center items-center text-center text-4xl md:text-5xl">{recipe.Cooking_t}</div>
                        <div className=" w-full text-center">hour</div>
                      </div>
                      <Divider orientation="vertical" variant="middle" flexItem />
                      {nutritional_facts.map((elem: any, index: any) => (
                        <div key={index} className=" w-1/4 h-1/2 m-2 ">
                          <div key={index} className="h-5/6 flex justify-center items-center text-center text-4xl md:text-5xl">{elem.calorie}</div>
                          <div className=" h-1/6 w-full text-center ">calorie</div>
                        </div>
                      ))}
                    </div>
                    <div className="w-full m-4 ">
                      <Badge className={recipe.Difficulty == "easy" ? "bg-green-500" : "bg-yellow-400"}>{recipe.Difficulty}</Badge>
                    </div>


                    <div className="w-full  py-5 mt-5">
                      <h2 className="text-lg font-bold ">Ingredients</h2>
                      <Divider variant="middle" />
                      <div className="m-4">
                        <ul className="list-disc" >
                          {recipe.composition.map((e: any, index: any) => (

                            <li key={index}>{e.quantity}{e.unit}  {e.ingredientsName}</li>
                          ))
                          }
                        </ul>

                      </div>

                    </div>
                    <div className="mb-5 ">
                      <h2 className="text-lg font-bold ">Instructions</h2>
                      <Divider variant="middle" />
                      <div className="m-4">
                        <ul className="space-y-3">
                          {recipe.instruction.map((e: any, index: any) => (

                            <li key={index} className="flex"><h2 className="font-semibold">{e.StepNo} </h2> / {e.description}</li>
                          ))
                          }
                        </ul>

                      </div>
                    </div>
                    <Divider orientation="horizontal" variant="middle" flexItem />
                    {nutritional_facts.map((elem: any, index: any) => (
                      <div key={index} className=" w-full flex justify-center items-center h-1/2 m-2 ">

                        <NutritionLabel
                          protein={elem.protein}
                          calories={elem.calorie}
                          carbs={elem.carbs}
                          Fat={elem.Fat}
                          cholesterol={elem.cholesterol}
                          iron={elem.iron}
                          fibre={elem.fibre}
                          sodium={elem.sodium}
                          sugars={elem.Sugars}
                          servingSize={"4"}
                          servingsPerContainer={"3"}
                        />
                      </div>
                    ))}
                  </div>

                  {/* //   ))
                // } */}



                </CardContent>)
          }

          <CardActions>

          </CardActions>
        </Card>

        {/* 
            
        <Card className="w-1/3 h-1/5">
          <CardHeader>
            <CardTitle>Title</CardTitle>
            <CardDescription>Discrption</CardDescription>
          </CardHeader>
          <CardContent  className="grid gap-4  ">
            <div className="flex justify-start">
            <div className=" flex items-center justify-start h-64  w-1/2 space-x-4 rounded-md border p-4">
                
                <div className="flex w-full space-y-1">
                 
                   
              </div>
            </div>
           

            </div>
            <div>
              <div>
             
              
              
              </div>
              <div className="mb-4 mt-7 pb-4 last:mb-0 last:pb-0">
                <div className="space-y-1 w-full">
                    <h2 className="text-lg font-bold">Instructions :</h2>
                  <p className="text-sm font-medium leading-none">
                   
                  </p>

                </div>
                <div className=" w-full bg-red-500 flex ">
                  <YoutubeEmbed embedId="3wofbmwLNUw"/>
                </div>

              </div>
            </div>
          </CardContent>
          <CardFooter>
           
          </CardFooter>
        </Card>

              {recipe.map((el:any,index:any)=>(





        <Card key={index} className="w-full">
          <CardHeader>
            <CardTitle>{el.Meal.name}</CardTitle>
            <CardDescription>{el.Description}</CardDescription>
          </CardHeader>
          <CardContent  className="grid gap-4  ">
            <div className="flex justify-start">
            <div className=" flex items-center justify-start h-64   space-x-4 rounded-md border p-4">
                
                <div className="flex  space-y-1">
                   <Image src={el.Meal.image} height={250} width={350} alt="image" priority className="rounded-md" />
                   
              </div>
            </div>
           

            </div>
            <div>
              <div>
               { el.Difficulty == "easy" ?
               (<Badge className="bg-green-500">{el.Difficulty}</Badge>):
               (<div>hola</div>)
                 
                    
                    }
              
              
              </div>
              <div className="mb-4 mt-7 pb-4 last:mb-0 last:pb-0">
                <div className="space-y-1 w-full">
                    <h2 className="text-lg font-bold">Instructions :</h2>
                  <p className="text-sm font-medium leading-none">
                    {el.instruction.map((e:any,index:any)=>(
                        <p key={index} className="flex mt-4 text-md">{e.StepNo}. {e.description}</p>
                       
                    ))}
                  </p>

                </div>
               

              </div>
            </div>
          </CardContent>
          <CardFooter>
           
          </CardFooter>
        </Card> */}


        {/* ))} */}





      </section>
    </>
    // <div className="bg-red-800">
    //     {v}
    //     {meal.map((recipe: any, index: any) => (
    //         <div key={index}>
    //             <h1>Youtube Embed</h1>
    //             <div className="w-full">
    //             <YoutubeEmbed embedId={recipe.videoEmbedId} />
    //             </div>
    //         </div>
    //     ))}

    // </div>
  )
}






