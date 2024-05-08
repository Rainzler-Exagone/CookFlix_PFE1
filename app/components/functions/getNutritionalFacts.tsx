export async function getNutritionalFacts(nutritionalFactsId:string) {
    
      const response = await fetch('http://localhost:3000/api/nutritionalFacts', {
        method: 'POST',
        body:JSON.stringify({
         id:nutritionalFactsId
        })
      }
      );
        
      if (!response.ok) {
        throw new Error('Failed to fetch nutritional_facts ');
      }
      const data = await response.json();
      console.log(data);
      
      return data;
    }
  