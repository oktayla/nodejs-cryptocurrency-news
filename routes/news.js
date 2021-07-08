require('dotenv').config()
const express = require('express')
const axios = require('axios')

const getNews = require('../services/getNews')

const router = express.Router()

router.get('/', async(req, res) => {
    const articles = await getNews('bitcoin')
    res.render('index', {
        articles
    })
})

router.get('/:term([a-zA-Z]+)', async(req, res) => {
    const term = req.params.term
    const articles = await getNews(term)

    res.render('index', {
        term,
        articles
    })
})

router.get('*', (req, res) => {
    res.status(404).render('index', {
        articles: []
    })
})

module.exports = router