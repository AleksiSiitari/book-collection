import React, { useState, useEffect } from 'react'
import './App.css'
import Bookshelf from './components/Bookshelf'
import BookCover from './components/BookCover'
import { getBooks } from './utils/api'

function App () {
  const [selectedBook, setSelectedBook] = useState(undefined)
  const [books, setBooks] = useState([])

  const refreshBooks = () => {
    getBooks().then(res => {
      setBooks(res)
    })
  }

  useEffect(() => {
    refreshBooks()
  }, [])

  return (
    <div className="App">
      <h1>Book Collection</h1>
      <div className='content'>
        <Bookshelf books={books} onSelectBook={setSelectedBook} selectedBook={selectedBook}/>
        <BookCover book={selectedBook} selectedBook={selectedBook} setSelectedBook={setSelectedBook} refreshBooks={refreshBooks} />
      </div>
    </div>
  )
}

export default App
