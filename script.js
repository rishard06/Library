const myLibrary = [];

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 230, false);
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 300, true);
const book3 = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 400, false);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);


function Book(title, author, page, read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}


// const removeBtn = document.querySelector('.remove-btn');

Book.prototype.displayCard = function () {
	const mainContainer = document.querySelector('.main-section');
	
	const bookCardDiv = document.createElement('div');
	bookCardDiv.classList.add('book-card');
	
	const bookTitle = document.createElement('h5');
	bookTitle.textContent = `title: ${this.title}`;
	
	const bookAuthor = document.createElement('h5');
	bookAuthor.textContent = `author: ${this.author}`;
	
	const bookPages = document.createElement('h5');
	bookPages.textContent = `pages: ${this.page}`;
	
	const bookRead = document.createElement('h5');
	bookRead.textContent = `read: ${this.read}`;
	
	mainContainer.appendChild(bookCardDiv);
	bookCardDiv.appendChild(bookTitle);
	bookCardDiv.appendChild(bookAuthor);
	bookCardDiv.appendChild(bookPages);
	bookCardDiv.appendChild(bookRead);
	
	const removeBtn = document.createElement('button');
	removeBtn.textContent = "remove book";
	removeBtn.classList.add('remove-btn');
	
	bookCardDiv.appendChild(removeBtn);
	
	const latestBook = myLibrary.findIndex((x) => x.title === this.title)
	
	removeBtn.addEventListener('click', () => {
		if(latestBook) {
			myLibrary.splice(latestBook, 1);
			bookCardDiv.remove();
			console.log(latestBook);
		}
	});
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

const latestBook = myLibrary.forEach((latestBook, index, array) => {
	const mainContainer = document.querySelector('.main-section');
	
	const bookCardDiv = document.createElement('div');
	bookCardDiv.classList.add('book-card');
	
	const bookTitle = document.createElement('h5');
	bookTitle.textContent = `title: ${latestBook.title}`;
	
	const bookAuthor = document.createElement('h5');
	bookAuthor.textContent = `author: ${latestBook.author}`;
	
	const bookPages = document.createElement('h5');
	bookPages.textContent = `pages: ${latestBook.page}`;
	
	const bookRead = document.createElement('h5');
	bookRead.textContent = `read: ${latestBook.read?"read allready":"not yet"}`;
	
	mainContainer.appendChild(bookCardDiv);
	bookCardDiv.appendChild(bookTitle);
	bookCardDiv.appendChild(bookAuthor);
	bookCardDiv.appendChild(bookPages);
	bookCardDiv.appendChild(bookRead);
	
	const removeBtn = document.createElement('button');
	removeBtn.textContent = "remove book";
	removeBtn.classList.add('remove-btn');
	
	bookCardDiv.appendChild(removeBtn);
	removeBtn.addEventListener('click', () => {
		if(latestBook) {
			console.log(latestBook.title, index)
			myLibrary.splice(index, 1);
			bookCardDiv.remove();
		}
	});
});

const button = document.querySelector('.btn');
button.addEventListener('click', addBookToLibrary);
console.log(myLibrary)