const express = require('express');
const app = express()
const urlRoute = require('./routes/router')
app.use(express.urlencoded({ extended: false }))

const path = require('path')

app.use('/url', urlRoute)
app.use('/url/analytics', urlRoute)
app.set('view engine', 'ejs')
app.set("views",path.resolve("./views"))

app.listen(9100, () => {
    console.log('server is running on port 9100')
})