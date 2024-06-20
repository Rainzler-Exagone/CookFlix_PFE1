export async function getRecipeById(meal_id:string) {
    //  const name = [ 'Eggs', 'Sugar', 'Milk', 'Flour', 'Baking powder' ]
    //   const queryParams = name.toString()
      const response = await fetch('http://localhost:3000/api/recipe_meal', {
        method: 'POST',
        body:JSON.stringify({
          mealId:meal_id
          })
      }
      );
    
      if (!response.ok) {
        throw new Error('Failed to fetch sidebar items');
      }
      const data = await response.json();
      console.log(data);
      
      return data;
    }
  