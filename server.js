const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000
const routes = require('./routes/routes')
const createTable = require('./config/db-create-table')
require('dotenv').config()

//middleware
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.set('views', path.join(__dirname, '/public/views'))
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.static((path.join(__dirname, 'public'))));
createTable()

//routes
app.use('/', routes)

app.listen(PORT)