const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000
const indexRoute = require('./routes/indexRoute')
const errorRoute = require('./routes/errorRoute')
require('dotenv').config()


//middleware
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.set('views', path.join(__dirname, '/public/views'))
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.static((path.join(__dirname, 'public'))));

app.use('/', indexRoute, errorRoute)

app.listen(PORT, () => {
  console.log(`Listening to app on port ${PORT}!`)
})