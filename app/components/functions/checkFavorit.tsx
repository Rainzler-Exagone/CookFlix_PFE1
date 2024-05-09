export async function checkFavorit(userId:string,recipeId:string) {
    
    const response = await fetch('http://localhost:3000/api/checkFavorit', {
      method: 'POST',
      body:JSON.stringify({
      userId:userId,
      recipeId:recipeId
      })
    }
    );
      
    if (!response.ok) {
      throw new Error('Failed to check favorits ');
    }
    const data = await response.json();
    console.log(data);
    
    return data;
  }
