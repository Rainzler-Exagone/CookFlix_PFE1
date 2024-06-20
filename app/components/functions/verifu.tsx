export async function getUserId(email:string,password:string) {
    
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      body:JSON.stringify({
        email:email,
        password:password
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
