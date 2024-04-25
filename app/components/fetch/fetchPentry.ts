export async function fetchPantryfromdatabase() {

    let chunkSize = 24
    let chunks = []
    const arr: any[] = []
    const response = await fetch('http://localhost:3000/api/Pantryessentials', {
      method: 'GET',
    },
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch sidebar items');
    }
    const data = await response.json();
    {
      data.map((item:any) => {
        console.log(item.name)
        const count = arr.push(item.name)
      })
    }
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(data.slice(i, i + chunkSize));
  }
  console.log(chunks)
    return chunks;
  }
  