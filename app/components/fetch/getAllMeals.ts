export async function getAllMeals() {
   const response = await fetch('http://localhost:3000/api/getAllMeals',{
    method:"GET",
    headers:{
        'Content':'application/json'
    }
   })
   if (!response.ok) {
    throw new Error('Failed to fetch sidebar items');
   }
   const result = await response.json()
   return result
}