const books = [
    {
        name: "Book 1",
        author: "Author 1",
        published: "2020",
        pages: 300,
        cover: "/img/harryPotter.jpg",
        description: "This is a description of Book 1."
    },
    {
        name: "Book 2",
        author: "Author 2",
        published: "2018",
        pages: 250,
        cover: "/img/Designer1.jpeg",
        description: "This is a description of Book 2."
    },
    {
        name: "Book 3",
        author: "Author 3",
        published: "2019",
        pages: 400,
        cover: "/img/harryPotter.jpg",
        description: "This is a description of Book 3."
    },
    {
        name: "Book 4",
        author: "Author 4",
        published: "2021",
        pages: 350,
        cover: "/img/harryPotter.jpg",
        description: "This is a description of Book 4."
    },
    {
        name: "Book 3",
        author: "Author 3",
        published: "2019",
        pages: 400,
        cover: "/img/harryPotter.jpg",
        description: "This is a description of Book 3."
    },
    {
        name: "Book 3",
        author: "Author 3",
        published: "2019",
        pages: 400,
        cover: "/img/harryPotter.jpg",
        description: "This is a description of Book 3."
    },
    {
        name: "Book 3",
        author: "Author 3",
        published: "2019",
        pages: 400,
        cover: "/img/harryPotter.jpg",
        description: "This is a description of Book 3."
    },
];

function loadBookList() {
    const bookList = document.getElementById('bookList');
    books.forEach((book, index) => {
        const bookItem = document.createElement('div');
        bookItem.className = 'book-list-item';
        bookItem.onclick = () => showBookDetails(index);
        bookItem.innerHTML = `
            <img src="${book.cover}" alt="${book.name} Thumbnail" class="book-thumbnail">
            <p>${book.name}</p>
        `;
        bookList.appendChild(bookItem);
    });

    // Show details of the first book by default
    showBookDetails(0);
}

function showBookDetails(index) {
    const book = books[index];
    const bookDisplay = document.getElementById('bookDisplay');
    bookDisplay.innerHTML = `
        <h2>${book.name}</h2>
        <img src="${book.cover}" alt="${book.name}" class="book-image">
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Published:</strong> ${book.published}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Description:</strong> ${book.description}</p>
    `;
}

window.onload = loadBookList;