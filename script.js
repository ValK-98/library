let myLibrary = [];
let errorMessage = `Required value!`;

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.exists = -0;
  this.returnArr = function () {
    return [title, author, pages, read];
  };
}

function addBookToLibrary() {
  const author = document.querySelector("#author-name").value;
  const title = document.querySelector("#title").value;
  const pages = document.querySelector("#pages").value;
  const read = toggleCheckbox();
  if (
    author != "" &&
    title != "" &&
    pages != "" &&
    author != `${errorMessage}` &&
    title != `${errorMessage}` &&
    pages != `${errorMessage}`
  ) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    createLibrary();
  } else {
    errorLibrary();
  }
}

function createLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].exists == false) {
      let index = i;
      createLibraryCard(
        myLibrary[i].title,
        myLibrary[i].author,
        myLibrary[i].pages,
        myLibrary[i].read,
        index
      ),
        (myLibrary[i].exists = 1);
    }
  }
}

function errorLibrary() {
  const parentElement = document.querySelector(".input-fields");
  const inputElements = parentElement.querySelectorAll("input");
  inputElements.forEach((element) => {
    element.value = `${errorMessage}`;
  });
}

function createLibraryCard(title, author, pages, read, index) {
  const bookCard = document.createElement("div");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("h4");
  const bookPages = document.createElement("p");
  const bookRead = document.createElement("p");
  const bookDelete = document.createElement("button");
  const bookReadToggle = document.createElement("button");
  //
  bookTitle.innerText = `Title: ${title}`;
  bookAuthor.innerText = `Author: ${author}`;
  bookPages.innerText = `Pages: ${pages}`;
  bookRead.innerText = `Has it been read? - ${read}`;
  bookDelete.innerText = `Remove`;
  bookReadToggle.innerText = `Read`;
  //
  bookCard.classList.add("library-card", "user-card");
  bookTitle.classList.add("book-title", "card-content");
  bookAuthor.classList.add("book-author", "card-content");
  bookPages.classList.add("book-pages", "card-content");
  bookRead.classList.add("book-read", "card-content");
  bookDelete.classList.add("user-book-button", "card-content");
  bookReadToggle.classList.add("user-book-button", "card-content");
  //
  bookCard.setAttribute("data-index", `${index}`);
  bookDelete.setAttribute("id", "book-delete");
  bookDelete.setAttribute("data-index", `${index}`);
  bookReadToggle.setAttribute("id", "book-mark-read");
  // bookDelete.addEventListener("click", bookRemove);
  bookDelete.addEventListener("click", addSelector);
  bookReadToggle.addEventListener("click", toggleRead);
  // bookCard.addEventListener("click", addSelector);
  //
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRead);
  bookCard.appendChild(bookDelete);
  bookCard.appendChild(bookReadToggle);
  //
  document.getElementById("library").appendChild(bookCard);
  closeForm();
}


function addSelector(event) {
  let bookNum = event.target.getAttribute("data-index");
  bookRemove(bookNum);
}


function bookRemove(bookNum) {
  const parentElement = document.querySelector(`[data-index="${bookNum}"]`);
  myLibrary.splice(bookNum, 1);
  parentElement.remove();
}

function clearInput() {
  document.getElementById("author-name").value = "";
  document.getElementById("title").value = "";
  document.getElementById("pages").value = "";
}

// function bookRemove() {
//   const parentElement = document.getElementById("book-delete").parentElement;
//   let index = parentElement.getAttribute("id");
//   myLibrary.splice(index, 1);
//   parentElement.remove();
// }

function openForm() {
  document.getElementById("entry-form").style.display = "flex";
  document.getElementById("open-form-button").style.display = "none";
}

function closeForm() {
  document.getElementById("entry-form").style.display = "none";
  document.getElementById("open-form-button").style.display = "initial";
  clearInput();
}

function toggleCheckbox() {
  return checkbox.checked ? "Yes" : "No";
}

function toggleRead() {
  const parentElement = document.getElementById("book-mark-read").parentElement;
  let index = parentElement.getAttribute("id");
  if (myLibrary[index].read == "Yes") {
    markRead("No"), (myLibrary[index].read = "No");
  } else markRead("Yes"), (myLibrary[index].read = "Yes");
}

function markRead(readStatus) {
  document.querySelector(
    ".book-read"
  ).innerText = `Has it been read? - ${readStatus}`;
}

const container = document.getElementById("container");
const openFormButton = document.getElementById("open-form-button");
const closeFormButton = document.getElementById("go-back");
const submitBook = document.getElementById("submit-book");
const checkbox = document.getElementById("read");

openFormButton.addEventListener("click", openForm);
closeFormButton.addEventListener("click", closeForm);
submitBook.addEventListener("click", addBookToLibrary);
checkbox.addEventListener("onClick", toggleCheckbox);

function bookTester(author, title, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  createLibrary();
}

// function readTarget(event) {
//   toggleRead(event.target.id);
// }

// function deleteTarget(event) {
//   bookRemove(event.target.id);
// }

bookTester("Boi 0", "Boi 0", "123", "Yes");
bookTester("Boi 1", "Boi 1", "555", "No");
bookTester("Boi 2", "Boi 2", "166", "No");
bookTester("Boi 3", "Boi 3", "183", "Yes");
bookTester("Boi 4", "Boi 4", "723", "No");
bookTester("Boi 5", "Boi 5", "523", "Yes");

// to do - currently read/remove only affects first element.
// need to figure out a way to select correct element
// use .target or .closest
// need to optimise some functions by rewriting.
// need to organize code better for future readability.
