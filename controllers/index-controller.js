const Book = require('../models/book-class')
const { pool } = require('../config/db-connect')

let myBook = new Book();

module.exports = {
  get: async (req, res) => {
    try {
      res.render("index.ejs", { books: myBook.fullBookInfo() });
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  },

  post: async (req, res) => {
    try {
      let { title: bookTitle, author: bookAuthor } = req.body;
      let myNewBook = new Book(bookTitle, bookAuthor);
      let errors = [];

      if (!bookTitle || !bookAuthor) {
        errors.push('Please fill out all the forms.');
      } 

      const query = {
        text: 'SELECT * FROM books WHERE title = $1 AND author = $2',
        values: [bookTitle, bookAuthor]
      }
      const { rows } = await pool.query(query);
      if (rows.length > 0) {
        errors.push('Book already exists in the database');
      }

      const insertQuery = {
        text: 'INSERT INTO books(title, author) VALUES ($1, $2)',
        values: [bookTitle, bookAuthor]
      }
      await pool.query(insertQuery);

      res.render("index.ejs", { books: myNewBook.fullBookInfo(), errors: errors });
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  }
};
