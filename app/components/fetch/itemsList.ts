
export async function fetchSidebarItemsFromDatabase() {
    let chunkSize = 9
    let chunks = []
    const arr: any[] = []
    const response = await fetch('http://localhost:3000/api/items',{
      method: 'GET',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch sidebar items');
    }
    const data = await response.json();
    console.log(data)
    {
      data.map((item:any) => {
  
        console.log(item.name)
        const count = arr.push(item.name)
      })
    }
    // console.log(data)
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(data.slice(i, i + chunkSize));
  }
  console.log(chunks)
  return data;  
  }