const books = [
    {
        name: "Book 1",
        author: "Author 1",
        published: "2020",
        pages: 300,
        cover: "https://m.media-amazon.com/images/I/81AEtzeQ-cL._SL1500_.jpg",
        description: "This is a description of Book 1."
    },
    {
        name: "Book 2",
        author: "Author 2",
        published: "2018",
        pages: 250,
        cover: "https://www.gutenberg.org/cache/epub/73671/images/cover_small.jpg",
        description: "This is a description of Book 2."
    },
    {
        name: "Book 3",
        author: "Author 3",
        published: "2019",
        pages: 400,
        cover: "https://www.gutenberg.org/cache/epub/25420/images/cover.jpg",
        description: "This is a description of Book 3."
    },
    {
        name: "Book 4",
        author: "Author 4",
        published: "2021",
        pages: 350,
        cover: "https://www.gutenberg.org/cache/epub/34701/images/illo005.jpg",
        description: "This is a description of Book 4."
    },
    {
        name: "Book 5",
        author: "Author 5",
        published: "2019",
        pages: 400,
        cover: "https://www.gutenberg.org/cache/epub/37660/images/img01_cover.jpg",
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