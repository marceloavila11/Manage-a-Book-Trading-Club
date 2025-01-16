fetch('http://localhost:5000/books')
  .then((response) => response.json())
  .then((books) => {
    const booksList = document.getElementById('books-list');
    books.forEach((book) => {
      const bookItem = document.createElement('div');
      bookItem.classList.add('book-item');
      bookItem.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Owner:</strong> ${book.owner}</p>
      `;
      booksList.appendChild(bookItem);
    });
  });
