const API_KEY = 'c24fad1fc29047f88d199045c3fe272b';
const url = 'https://newsapi.org/v2/everything?q=';

window.addEventListener('load', () => fetchNews('Pakistan'));

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`)
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardContainer = document.getElementById('cards-container');
    const newsCardTemplate = document.getElementById('news-card-template');

    cardContainer.innerHTML = '';

    articles.forEach((article) => {
        if (!article.urlToImage) return;

        const cardClone = newsCardTemplate.content.cloneNode(true);

        fillDataInCard(cardClone, article)
        cardContainer.appendChild(cardClone);
        console.log(article);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#card-desc');

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    const date = new Date(article.publishedAt).toLocaleTimeString("en-US", {
        timeZone: "Asia/Karachi",
    });

    newsSource.innerHTML = '${article.source.name} . ${date}';

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    })
}