const express = require('express')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', require('./routes/news'))

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running..`)
})