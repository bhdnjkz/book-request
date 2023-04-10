module.exports = class Book {

    constructor(title, author) {
      this._title = title;
      this._author = author;
    }
  
    get title() {
      return this._title;
    }
  
    set title(newTitle) {
      this._title = newTitle;
    }
  
    get author() {
      return this._author;
    }
  
    set author(newAuthor) {
      this._author = newAuthor;
    }
  
    fullBookInfo() {
      return `"${this.title}" by ${this.author}`;
    }
  }