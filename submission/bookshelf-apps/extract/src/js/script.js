const bookshelf = [];
const render_event = "render_book";
const saved_event = "saved_book";
const storage_key = "books";

const completeBookshelfList = document.getElementById("completeBookshelfList");
const incompleteBookshelfList = document.getElementById(
  "incompleteBookshelfList"
);

let isCompleted = document.getElementById("inputBookIsComplete").checked;

document.addEventListener(render_event, () => {
  completeBookshelfList.innerHTML = "";
  incompleteBookshelfList.innerHTML = "";

  for (const bookItem of bookshelf) {
    const bookElement = makeBook(bookItem);

    if (bookItem.isCompleted == true) {
      completeBookshelfList.append(bookElement);
    } else {
      incompleteBookshelfList.append(bookElement);
    }
  }
});

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(storage_key);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const book of data) {
      bookshelf.push(book);
    }
  }

  document.dispatchEvent(new Event(render_event));
}

function generateId() {
  return +new Date();
}

function addBook() {
  const bookTitle = document.getElementById("inputBookTitle").value;
  const year = document.getElementById("inputBookYear").value;
  const author = document.getElementById("inputBookAuthor").value;
  const genre = document.getElementById("inputBookGenre").value;

  let isCompleted = document.getElementById("inputBookIsComplete").checked;
  let bookStatus;

  if (isCompleted == true) {
    bookStatus = true;
  } else {
    bookStatus = false;
  }

  const id = generateId();
  const bookObject = generateBookObject(
    id,
    bookTitle,
    author,
    year,
    genre,
    (isCompleted = bookStatus)
  );

  function modal(status) {
    if (status == true) {
      let selesaiDibaca = confirm("Udah yakin mau nambahin ke selesai dibaca?");

      if (selesaiDibaca == true) {
        alert("Kamu menambahkan buku ke selesai dibaca!");
        bookshelf.push(bookObject);
      } else {
        alert("Kamu membatalkan penambahan!");
      }
    } else {
      let belumDibaca = confirm("Udah yakin mau nambahin ke belum dibaca?");

      if (belumDibaca == true) {
        alert("Kamu menambahkan buku ke belum dibaca!");
        bookshelf.push(bookObject);
      } else {
        alert("Kamu membatalkan penambahan!");
      }
    }
  }

  modal(bookStatus);
  document.dispatchEvent(new Event(render_event));
  saveData();
}

function generateBookObject(id, bookTitle, author, year, genre, isCompleted) {
  return {
    id,
    bookTitle,
    author,
    year,
    genre,
    isCompleted,
  };
}

function makeBook(bookObject) {
  const { id, bookTitle, author, year, genre, isCompleted } = bookObject;

  const textId = document.createElement("p");
  textId.classList.add("data");
  textId.innerText = `Id: ${id}`;

  const textTitle = document.createElement("p");
  textTitle.classList.add("data");
  textTitle.innerText = `Judul: ${bookTitle}`;

  const textYear = document.createElement("div");
  textYear.classList.add("data");
  textYear.innerText = `Tahun: ${year}`;

  const textAuthor = document.createElement("p");
  textAuthor.classList.add("data");
  textAuthor.innerText = `Penulis: ${author}`;

  const textGenre = document.createElement("p");
  textGenre.classList.add("data");
  textGenre.innerText = `Genre: ${genre}`;

  const textStatus = document.createElement("p");
  textStatus.classList.add("data");
  textStatus.innerText = `Status: ${
    isCompleted == true ? "Udah dibaca" : "Belum dibaca"
  }`;

  const textContainer = document.createElement("div");
  textContainer.classList.add("inner");
  textContainer.append(
    textId,
    textTitle,
    textAuthor,
    textYear,
    textGenre,
    textStatus
  );

  const container = document.createElement("div");
  container.classList.add("items");
  container.append(textContainer);
  container.setAttribute("id", `book-${bookObject.id}`);

  if (isCompleted) {
    const undoButton = document.createElement("button");
    undoButton.classList.add("undo-book");
    undoButton.innerText = "Undo";

    undoButton.addEventListener("click", () => {
      undoBookFromCompleted(id);
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-book");
    deleteButton.innerText = "Delete";

    deleteButton.addEventListener("click", () => {
      removeBookFromCompleted(id);
    });

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.append(undoButton, deleteButton);
    container.append(buttonContainer);
  } else {
    const checkButton = document.createElement("button");
    checkButton.classList.add("check-book");
    checkButton.innerText = "Selesai baca";

    checkButton.addEventListener("click", () => {
      addBookToCompleted(id);
    });

    container.append(checkButton);
  }

  return container;
}

function addBookToCompleted(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isCompleted = true;
  document.dispatchEvent(new Event(render_event));
  saveData();
}

function findBook(bookId) {
  for (const bookItem of bookshelf) {
    if (bookItem.id === bookId) {
      return bookItem;
    }
  }

  return null;
}

function removeBookFromCompleted(bookId) {
  const bookTarget = findBookIndex(bookId);

  if (bookTarget === -1) return;

  bookshelf.splice(bookTarget, 1);
  document.dispatchEvent(new Event(render_event));
  saveData();
}

function undoBookFromCompleted(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isCompleted = false;
  document.dispatchEvent(new Event(render_event));
  saveData();
}

function findBookIndex(bookId) {
  for (const index in bookshelf) {
    if (bookshelf[index].id === bookId) {
      return index;
    }
  }

  return -1;
}

function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(bookshelf);
    localStorage.setItem(storage_key, parsed);
    document.dispatchEvent(new Event(saved_event));
  }
}

function isStorageExist() {
  if (typeof Storage === undefined) {
    alert("Browsermu ora mendukung local storage bro!");
    return false;
  }

  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  const isCompleted = document.getElementById("inputBookIsComplete");
  const submitForm = document.getElementById("inputBook");

  submitForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBook();
  });

  let submitBookButton = document.getElementById("bookSubmit");
  isCompleted.addEventListener("change", () => {
    if (isCompleted.checked) {
      submitBookButton.innerHTML = `Masukkan Buku ke rak <span>Selesai dibaca</span>`;
    } else {
      submitBookButton.innerHTML = `Masukkan Buku ke rak <span>Belum Selesai dibaca</span>`;
    }
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});
