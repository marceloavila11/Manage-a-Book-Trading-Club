const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const booksFile = path.join(__dirname, '../data/books.json');

// Obtener todos los libros
router.get('/', (req, res) => {
  const books = JSON.parse(fs.readFileSync(booksFile, 'utf-8'));
  res.json(books);
});

// Agregar un libro nuevo
router.post('/', (req, res) => {
  const books = JSON.parse(fs.readFileSync(booksFile, 'utf-8'));
  const newBook = req.body;
  books.push(newBook);
  fs.writeFileSync(booksFile, JSON.stringify(books, null, 2));
  res.status(201).json(newBook);
});

module.exports = router;
