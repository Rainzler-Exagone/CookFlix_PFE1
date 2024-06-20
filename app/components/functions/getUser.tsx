export async function getUserId(userName:string) {
    
    const response = await fetch('http://localhost:3000/api/getUser', {
      method: 'POST',
      body:JSON.stringify({
      name:userName,
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
