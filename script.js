let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title, author, pages, read;
  };
}

// function addBookToLibrary() {
//   // prompts user for book
//   // asks for title, author, pages and read
//   // calls Book() and puts item into myLibrary
// }
