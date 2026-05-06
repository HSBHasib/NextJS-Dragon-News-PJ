export const categoriesData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    return data.data;
}

export const newsTitle = async () => {
    // const res = await fetch('http://localhost:3000/news.json', {cache:"no-store"});
    const res = await fetch('https://04-dragon-news-pj.vercel.app/news.json', {cache:"no-store"});
    const data = await res.json();
    return data;
}

export const categoryWiseData = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
    const data = await res.json();
    return data;
}

export const indivisualNewData = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
    const data = await res.json();
    return data.data[0];
}

