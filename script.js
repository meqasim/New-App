const API_KEY = 'c24fad1fc29047f88d199045c3fe272b';
const url = 'https://newsapi.org/v2/everything?q=';

window.addEventListener('load', () => fetchNews('tesla'));

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`)
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardContainer = document.getElementById('cards-container');
    const newsCardTemplate = document, getElementById('newsCardTemplate');

    cardContainer.innerHTML = '';
}