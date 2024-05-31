export async function handlefavorit (userID:string,recipeID:string) {
   
    const response = await fetch('/api/favoritt', {
      method: "POST",
      body: JSON.stringify({
        userId: userID,
        recipeId : recipeID
      })
      
  })
  console.log(response);
        
  if (!response.ok) {
    throw new Error('Failed ');
  }
  const data = await response.json();
  console.log(data);
  
  return data;

  

  
}
  