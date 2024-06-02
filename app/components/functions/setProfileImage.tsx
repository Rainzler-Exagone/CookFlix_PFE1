export async function setImage(email:string,image:string) {
    
    const response = await fetch('http://localhost:3000/api/setImage', {
      method: 'POST',
      body:JSON.stringify({
      email:email,
      image:image
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
