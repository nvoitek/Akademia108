class Book {  
  constructor(title, author, hasBeenRead) {
      this.title = title;
      this.author = author;
      this.hasBeenRead = hasBeenRead;
  }
  describeBook() {
      let hasBeenReadMsg = this.hasBeenRead ? 'has been read' : 'has not been read';
      console.log( `Book has title: ${this.title}, author is ${this.author} and it ${hasBeenReadMsg}`);
  }
}

function countBooksThatHaveBeenRead(books) {
let booksThatHaveBeenRead = 0;
for (let book of books) {
  if (book.hasBeenRead) {
    booksThatHaveBeenRead++;
  }

  book.describeBook()
}
}

var books = [
new Book('Wiedzmin', 'Sapkowski', false),
new Book('Wladca Pierscieni', 'Tolkien', false),
new Book('Pozytonowy Detektyw', 'Asimov', true),
]

countBooksThatHaveBeenRead(books);