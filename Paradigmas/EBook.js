const Book = require('./Book');

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(newFormat) {
    if (typeof newFormat === 'string' && newFormat.trim() !== '') {
      this._fileFormat = newFormat;
    } else {
      throw new Error('File format must be a non-empty string.');
    }
  }

  printInfo() {
    super.printInfo();
    console.log(`Format: ${this.fileFormat}`);
  }

  static fromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

module.exports = EBook;