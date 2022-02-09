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

function createLibraryCard(title, author, pages, read) {
  const bookCard = document.createElement("div");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("h4");
  const bookPages = document.createElement("p");
  const bookRead = document.createElement("p");
  bookTitle.innerText = `Title: ${title}`;
  bookAuthor.innerText = `Author: ${author}`;
  bookPages.innerText = `Pages: ${pages}`;
  bookRead.innerText = `Has it been read? - ${read}`;
  bookCard.classList.add("bookCard", "card-contend");
  bookTitle.classList.add("bookTitle", "card-contend");
  bookAuthor.classList.add("bookAuthor", "card-contend");
  bookPages.classList.add("bookPages", "card-contend");
  bookRead.classList.add("bookRead", "card-contend");
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRead);
  document.getElementById("library").appendChild(bookCard);
}

//make function to loop through array and create each book;
