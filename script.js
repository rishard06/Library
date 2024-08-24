class Library {
	constructor() {
		this.myLibrary = [];
	}

	addBook(book) {
		this.myLibrary.push(book);
	}

	getBooks() {
		return this.myLibrary;
	}
	removeBook(index) {
		this.myLibrary.splice(index, 1);
	}
}

class Book{
	constructor(title, author, page, read) {
		this.title = title;
		this.author = author;
		this.page = page;
		this.read = read;
	}
	
	//Get the input details
	static getDisplayInput(library	) {
		const button = document.querySelector('.btn');
		button.addEventListener('click', (e) => {
			e.preventDefault();
			let title = document.querySelector('#title');
			let author = document.querySelector('#author');
			let pages = document.querySelector('#pages');
			let read = document.querySelector('#read');
			
			const myBook = new Book(title.value, author.value, pages.value, read.value);
			library.addBook(myBook);
			
			// document.querySelector('#input-form')
			title.value = "";
			author.value = "";
			pages.value = "";
			read.checked = false;

			console.log(library.getBooks());
			Book.showBooksInPage(library);
		})
	}
	
	//Print the input on the page
	static showBooksInPage(library) {
		const mainContainer = document.querySelector('.main-section');
		mainContainer.innerHTML = '';

		library.getBooks().forEach((latestBook, index, array) => {
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
					library.removeBook(index);
					bookCardDiv.remove();
					// Book.showBooksInPage(library);
			});
		});
	}
}
const myLibrary = new Library();
Book.getDisplayInput(myLibrary);