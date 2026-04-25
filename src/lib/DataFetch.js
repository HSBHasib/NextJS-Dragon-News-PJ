export const categoriesData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    return data.data;
}

export const newsTitle = async () => {
    const res = await fetch('http://localhost:3000/news.json');
    const data = await res.json();
    return data;
}

export const categoryWiseData = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/0${id}`);
    const data = await res.json();
    return data;
}
