// app/page.tsx
export default async function Home() {
    const data = await getData();
    return <div>Home Page - {data.title}</div>;
}

// Fetching data directly inside the component
async function getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return res.json();
}
