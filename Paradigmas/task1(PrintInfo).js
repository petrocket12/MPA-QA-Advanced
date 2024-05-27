const Book = require('./Book');
const EBook = require('./EBook');

const book1 = new Book('Messer', 'Till Lindemann', 2017);
const book2 = new Book('Kobzar', 'Taras Shevchenko', 1840);
const book3 = new Book('Eneida', 'Ivan Kotliarevsky', 1844);

const ebook1 = EBook.fromBook(book1, 'PDF');
const ebook2 = EBook.fromBook(book3, 'EPUB');

book1.printInfo();
book2.printInfo();
book3.printInfo();
ebook1.printInfo();
ebook2.printInfo();


const books = [book1, book2,book3, ebook1, ebook2];
const oldestBook = Book.findOldestBook(books);
console.log(`The oldest book is ${oldestBook.title}, published in ${oldestBook.year}.`);