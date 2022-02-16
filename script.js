let myLibrary = [];

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
  if (title != null && read != null) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    createLibrary();
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

function createLibraryCard(title, author, pages, read, index) {
  const bookCard = document.createElement("div");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("h4");
  const bookPages = document.createElement("p");
  const bookRead = document.createElement("p");
  const bookDelete = document.createElement("button");
  bookCard.setAttribute("data-index", `${index}`);
  bookTitle.innerText = `Title: ${title}`;
  bookAuthor.innerText = `Author: ${author}`;
  bookPages.innerText = `Pages: ${pages}`;
  bookRead.innerText = `Has it been read? - ${read}`;
  bookDelete.innerText = `Remove`;
  bookCard.classList.add("library-card");
  bookTitle.classList.add("book-title", "card-content");
  bookAuthor.classList.add("book-author", "card-content");
  bookPages.classList.add("book-pages", "card-content");
  bookRead.classList.add("book-read", "card-content");
  bookDelete.classList.add("book-delete", "card-content");
  bookDelete.setAttribute("id", "book-delete");
  bookDelete.addEventListener("click", bookRemove);
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(bookRead);
  bookCard.appendChild(bookDelete);
  document.getElementById("library").appendChild(bookCard);
  closeForm();
}

function clearInput() {
  document.getElementById("author-name").value = "";
  document.getElementById("title").value = "";
  document.getElementById("pages").value = "";
}

function bookRemove() {
  const parentElement = document.getElementById("book-delete").parentElement;
  parentElement.remove();
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

const container = document.getElementById("container");
const openFormButton = document.getElementById("open-form-button");
const closeFormButton = document.getElementById("go-back");
const submitBook = document.getElementById("submit-book");
const checkbox = document.getElementById("read");

openFormButton.addEventListener("click", openForm);
closeFormButton.addEventListener("click", closeForm);
submitBook.addEventListener("click", addBookToLibrary);
checkbox.addEventListener("onClick", toggleCheckbox);

// left on TOP step 5.
// Need to implement form validation. Return if empty.





