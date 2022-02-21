let myLibrary = [];
let errorMessage = `Required value!`;

const container = document.getElementById("container");
const openFormButton = document.getElementById("open-form-button");
const closeFormButton = document.getElementById("go-back");
const submitBook = document.getElementById("submit-book");
const checkbox = document.getElementById("read");

openFormButton.addEventListener("click", openForm);
closeFormButton.addEventListener("click", closeForm);
submitBook.addEventListener("click", addBookToLibrary);
checkbox.addEventListener("onClick", toggleCheckbox);

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
  bookReadToggle.setAttribute("data-index", `${index}`);
  bookReadToggle.setAttribute("id", "book-mark-read");
  bookDelete.addEventListener("click", removeSelector);
  bookReadToggle.addEventListener("click", readSelector);
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

function removeSelector(event) {
  let bookNum = event.target.getAttribute("data-index");
  bookRemove(bookNum);
}

function readSelector(event) {
  let bookNum = event.target.getAttribute("data-index");
  toggleRead(bookNum);
}

function toggleRead(bookNum) {
  if (myLibrary[bookNum].read == "Yes") {
    markRead("No", bookNum), (myLibrary[bookNum].read = "No");
  } else markRead("Yes", bookNum), (myLibrary[bookNum].read = "Yes");
}

function markRead(readStatus, bookNum) {
  const parentElement = document.querySelector(`[data-index="${bookNum}"]`);
  const readCheck = parentElement.querySelector(`.book-read`);
  readCheck.innerText = `Has it been read? - ${readStatus}`;
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

function bookTester(author, title, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  createLibrary();
}

bookTester("Boi 0", "Boi 0", "123", "Yes");
bookTester("Boi 1", "Boi 1", "555", "No");
bookTester("Boi 2", "Boi 2", "166", "No");
bookTester("Boi 3", "Boi 3", "183", "Yes");
bookTester("Boi 4", "Boi 4", "723", "No");
bookTester("Boi 5", "Boi 5", "523", "Yes");

// outstanding issues:
// remove button removes correct books from list,
//  however doesn't remove all of them from array.
// Looks like this is due to fact that array position moves
// however function takes static position from DOM
// possible solutions may include either dynamically updating DOM index
// or creating a seperate function that checks if DOM element exist, if not remove from array

// bookRead() currently still marks the first book, ignores the rest.
// may need to refer to previous commit
// current issue seems to occur from the fact that the
// markRead() doesn't use location of book
// possible solutions may include removing markRead() and
// having everything in bookRead()
// or figuring out how to make querySelector specifically include
// [data-] OR first define parent element and then use `.book-read`
