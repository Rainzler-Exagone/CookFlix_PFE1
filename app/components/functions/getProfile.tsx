export async function getProfile(userId:StringConstructor) {
    
    const response = await fetch('http://localhost:3000/api/profile', {
      method: 'POST',
      body:JSON.stringify({
      userId:userId,
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
