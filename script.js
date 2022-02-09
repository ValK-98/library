let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.returnArr = function () {
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
    createLibrary();
  }
}

function createLibrary() {
  myLibrary.forEach((element) =>
    createLibraryCard(
        element.title,
        element.author,
        element.pages,
        element.read
    )
  );
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
  bookCard.classList.add("library-card");
  bookTitle.classList.add("book-title", "card-content");
  bookAuthor.classList.add("book-author", "card-content");
  bookPages.classList.add("book-pages", "card-content");
  bookRead.classList.add("book-read", "card-content");
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRead);
  document.getElementById("library").appendChild(bookCard);
}

function placeHolderBook() {
  const placeholderBook = new Book(
    "Life and Times of Bob",
    "Big Man Tod",
    250,
    "true"
  );
  myLibrary.push(placeholderBook);
}

placeHolderBook();

const container = document.getElementById("container");
container.addEventListener("load", createLibrary());
