let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return [title, author, pages, read];
  };
}

function addBookToLibrary() {
  let title = prompt("Title");
  let author = prompt("Author");
  let pages = prompt("Pages");
  let read = prompt("Read?");
  if (title != null && read != null) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
  }
}
