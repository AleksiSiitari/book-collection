const express = require('express');
const app = express();
const cors = require('cors')
const Book = require('./models/book');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/books', (req, res) => {
    Book.find({}).then(books => {
        res.json(books);
    }).catch(error => res.status(400).json({ error: error.message }));
})

app.get('/books/:bookid', (req, res) => {
    const bookId = req.params.bookid;
    Book.findById(BookId).then(book => {
      if (book) {
        res.json(book)
      } else {
        res.status(404).end()
      }
    }).catch(error => res.status(400).json({ error: error.message }))
})

app.post('/books', function (req, res) {
    const bookData = req.body;
    const newBook = new Book({
        title: bookData.title,
        author: bookData.author,
        description: bookData.description,
    });
    
    newBook.save().then(savedBook => {
        res.json(savedBook);
    }).catch(error => res.status(400).json({ error: error.message }));
})

app.post('/books/:bookId', function (req, res) {
    const bookId = req.params.bookId;
    const bookData = req.body;
    const editedBook = {
        title: bookData.title,
        author: bookData.author,
        description: bookData.description,
    };
    Book.findByIdAndUpdate(bookId, editedBook, { new: true })
    .then(updatedBook => {
      res.json(updatedBook)
    })
    .catch(error => res.status(400).json({ error: error.message }))
})

app.delete('/books/:bookid', function (req, res) {
    const bookId = req.params.bookid;
    Book.findByIdAndRemove(bookId).then(() => {
      res.status(204).end();
    }).catch(error => res.status(400).json({ error: error.message }));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})