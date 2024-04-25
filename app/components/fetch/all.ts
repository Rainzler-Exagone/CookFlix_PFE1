
async function fetchSidebarItemsFromDatabase() {
    const response = await fetch('http://localhost:3000/api/items',{
      method: 'GET',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch sidebar items');
    }
    const data = await response.json();
    console.log(data)
    //
    var lata = data

var result = lata.reduce( (acc:any, obj) => {
    acc[obj.another_id] = acc[obj.another_id] || [];
    acc[obj.another_id].push(obj);
    return acc;
}, {});

console.log(result);
    return lata;
    
    
  }