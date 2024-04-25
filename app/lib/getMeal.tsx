export default async function getMeal(id: any) {
    const response = await fetch(`http://localhost:3000/api/meals/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data;
}