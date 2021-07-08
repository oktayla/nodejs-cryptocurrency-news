const axios = require('axios')

async function getNews(term) {
    let articles
    try {
        const response = await axios.get(`${process.env.NEWSAPI_URL}`, {
            params: {
                q: term ?? 'bitcoin',
                sortBy: 'popularity',
                apiKey: process.env.NEWSAPI_KEY
            }
        })

        articles = response.data.articles
    } catch (error) {
        articles = []
    }

    return articles
}

module.exports = getNews