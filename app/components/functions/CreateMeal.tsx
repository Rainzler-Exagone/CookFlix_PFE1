export async function createMeal(name:string,difficulty:any,saisone:string[],image:string,ingredients:string[],category:string,nutritionalFacts:object) {
    
    const response = await fetch('http://localhost:3000/api/creatMeal', {
      method: 'POST',
      body:JSON.stringify({
      name:name,
      difficulty:difficulty,
      image:image,
      saisone:saisone,
      ingredients:ingredients,
      category:category,
      nutritionalFacts:nutritionalFacts
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
