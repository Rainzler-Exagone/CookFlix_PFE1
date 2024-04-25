export async function fetchVegetablesFromDatabase() {
    let chunkSize = 16;
    let chunks = []
    const type = "Vegetables___Greens";
    const response = await fetch('http://localhost:3000/api/ingredients', {
      method: 'GET',
    },
    );
  
    if (!response.ok) {
      throw new Error('Failed to fetch sidebar items');
    }
    const data = await response.json();
    for (let i = 0; i < data.length; i += chunkSize) {
        chunks.push(data.slice(i, i + chunkSize));
    }
    console.log(chunks)
    return chunks; 

  }