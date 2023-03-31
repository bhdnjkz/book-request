const Book = require('../models/bookClass')
const pool = require('../config/dbConnect')

module.exports = {
  get: (req, res) => {

    let myBook = new Book('Some Book', 'Random Person',
    );
    myBook.title = 'The Cathcer in the Rye'
    myBook.author = 'J.D. Salinger'

    res.render("index.ejs", {books: myBook.fullBookInfo()});
  }
}