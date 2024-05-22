class Book {
    constructor(title, author, year) {
      this._title = title;
      this._author = author;
      this._year = year;
    }
  
    get title() {
      return this._title;
    }
  
    set title(newTitle) {
      if (typeof newTitle === 'string' && newTitle.trim() !== '') {
        this._title = newTitle;
      } else {
        throw new Error('Title must be a non-empty string.');
      }
    }
  
    get author() {
      return this._author;
    }
  
    set author(newAuthor) {
      if (typeof newAuthor === 'string' && newAuthor.trim() !== '') {
        this._author = newAuthor;
      } else {
        throw new Error('Author must be a non-empty string.');
      }
    }
  
    get year() {
      return this._year;
    }
  
    set year(newYear) {
      if (typeof newYear === 'number' && !isNaN(newYear) && newYear > 0) {
        this._year = newYear;
      } else {
        throw new Error('Year must be a positive number.');
      }
    }
  
    printInfo() {
      console.log(`${this.title} by ${this.author}, published in ${this.year}.`);
    }
  
    static findOldestBook(bookArray) {
      if (!bookArray.length) return null;
      return bookArray.reduce((oldest, book) => oldest.year < book.year ? oldest : book);
    }
  }
  
  module.exports = Book;