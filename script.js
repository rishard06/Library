const myLibrary = [];

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 230, false);
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 300, true);
const book3 = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 400, false);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

// const latestBook = myLibrary.forEach();
console.log(myLibrary);

function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

Book.prototype.displayCardSample = function () {
	console.log(myLibrary.map);
};
// displayCardSample();
Book.prototype.displayCard = function () {
	const mainContainer = document.querySelector('.main-section');
	
	const bookCardDiv = document.createElement('div');
	bookCardDiv.classList.add('book-card');
	
	const bookTitle = document.createElement('h5');
	bookTitle.textContent = `title: ${this.title}`;
	
	const bookAuthor = document.createElement('h5');
	bookAuthor.textContent = `author: ${this.author}`;
	
	const bookPages = document.createElement('h5');
	bookPages.textContent = `pages: ${this.pages}`;
	
	const bookRead = document.createElement('h5');
	bookRead.textContent = `read: ${this.read}`;
	
	mainContainer.appendChild(bookCardDiv);
	bookCardDiv.appendChild(bookTitle);
	bookCardDiv.appendChild(bookAuthor);
	bookCardDiv.appendChild(bookPages);
	bookCardDiv.appendChild(bookRead);
};

const addBookToLibrary = function (e) {
	e.preventDefault();
	let title = document.getElementById('title').value;
	let author = document.getElementById('author').value;
	let pages = document.getElementById('pages').value;
	let read = document.getElementById('read').checked ? "read allready" : "not yet";
	
	let newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
	newBook.displayCard();
	document.forms[0].reset();
};

const button = document.querySelector('.btn');
button.addEventListener('click', addBookToLibrary);
