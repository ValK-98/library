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
  // const read = document.querySelector("#read").value; RETURN ON BY DEFAULT
  // let title = prompt("Title");
  // let author = prompt("Author");
  // let pages = prompt("Pages");
  // let read = prompt("Read?");
  if (title != null && read != null) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    createLibrary();
  }
}

// function clearInput() {
//   let author = document.querySelector("#author-name").value;
//   let title = document.querySelector("#title").value;
//   let pages = document.querySelector("#pages").value;
//   return (author = ""), (title = ""), (pages = "");
// }

function createLibrary() {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].exists == false) {
      createLibraryCard(
        myLibrary[i].title,
        myLibrary[i].author,
        myLibrary[i].pages,
        myLibrary[i].read
      ),
        (myLibrary[i].exists = 1);
    }
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

function openForm() {
  document.getElementById("entry-form").style.display = "flex";
  document.getElementById("open-form-button").style.display = "none";
}

function closeForm() {
  document.getElementById("entry-form").style.display = "none";
  document.getElementById("open-form-button").style.display = "initial";
}

function toggleCheckbox() {
  return (checkbox.checked) ? "Yes" : "No";
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
// Need to implement erase function. 
// Need to implement form validation. Return if empty. 




