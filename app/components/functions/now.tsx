import sharp from "sharp"

export async function fetchSidebarItemsFromDatabase() {
  let chunkSize = 20
    let chunks = []
    let allm = []
    
    const response = await fetch('http://localhost:3000/api/items',{
      method: 'GET',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch sidebar items');
    }
    const data = await response.json();
    //
    var lata = data;

var result:any = Object.values(lata.reduce( (acc:any, obj:any) => {
    acc[obj.type] = acc[obj.type] || [];
    acc[obj.type].push(obj);

    return acc;
}, {}));


for (let i = 0; i < result.length; i++) {
 
   chunks = []
for (let d = 0; d < result[i].length; d += chunkSize) {
        
        chunks.push(result[i].slice(d, d + chunkSize));
    }
   allm.push(chunks)

}  
console.log(allm);
    return allm;
    
    
  }


  