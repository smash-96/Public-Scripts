// pages/index.js
export default function Home({ data }) {
    return <div>Home Page - {data.message}</div>;
}

// Fetch data using getServerSideProps
export async function getServerSideProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();

    return { props: { data } };
}
