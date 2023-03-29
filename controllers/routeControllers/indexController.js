const Book = require('../bookController')

module.exports = {
  get: (req, res) => {

    let myBook = new Book('Random Book', 'Random Person');

    res.render("index.ejs", {books: myBook.fullBookInfo()});
  }
}