export async function getNutritionalFacts(id:any) {
    //  const name = [ 'Eggs', 'Sugar', 'Milk', 'Flour', 'Baking powder' ]
    //   const queryParams = name.toString()
      const response = await fetch(`http://localhost:3000/api/nutritionalFacts/${id}`, {
        method: 'GET',
      }
      );
    
      if (!response.ok) {
        throw new Error('Failed to fetch nutritional_facts ');
      }
      const data = await response.json();
      console.log(data);
      
      return data;
    }
  