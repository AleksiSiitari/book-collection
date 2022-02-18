import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { saveBook, deleteBook } from './../utils/api'
import './BookCover.scss'

export default function BookCover (props) {
  const { book, selectedBook, setSelectedBook, refreshBooks } = props

  const [bookTitle, setBookTitle] = useState(selectedBook ? book.title : '')
  const [bookAuthor, setBookAuthor] = useState(selectedBook ? book.bookAuthor : '')
  const [bookDescription, setBookDescription] = useState(selectedBook ? book.description : '')

  const clearFields = () => {
    setBookTitle('')
    setBookAuthor('')
    setBookDescription('')
  }

  useEffect(() => {
    if (book) {
      setBookTitle(book.title)
      setBookAuthor(book.author)
      setBookDescription(book.description)
    }
  }, [book])

  const isValidNewBook = () => bookTitle?.length >= 3 && bookAuthor?.length >= 3
  const refresh = () => {
    refreshBooks()
    setSelectedBook(undefined)
    clearFields()
  }

  return (
    <form onSubmit={event => event.preventDefault()} action="" className='bookCover'>
      <fieldset>
        <h3>{!selectedBook ? `Add ${bookTitle} to your collection` : `Edit '${book.title}'`}</h3>
        <label>Title*
          <input required type="text" name="title" value={bookTitle} id="name" onChange={(e) => setBookTitle(e.target.value)} />
        </label>
        <label>Author*
          <input required type="text" name="author" value={bookAuthor} id="author" onChange={(e) => setBookAuthor(e.target.value)} />
        </label>
        <label>Description
          <textarea rows="4" cols="20" type="textarea" name="description" value={bookDescription} id="description" onChange={(e) => setBookDescription(e.target.value)} />
        </label>
      </fieldset>
      <div className='buttonRow'>
        <Button label="Clear selection" onClick={() => {
          setSelectedBook(undefined)
          clearFields()
        }} disabled={!selectedBook}/>
        <Button label="Save New" onClick={() => saveBook({ id: book?.id, title: bookTitle, author: bookAuthor, description: bookDescription }, refresh)} disabled={!!selectedBook || !isValidNewBook()}/>
        <Button label="Save" onClick={() => saveBook({ id: book?.id, title: bookTitle, author: bookAuthor, description: bookDescription }, refresh)} disabled={!selectedBook}/>
        <Button label="Delete" onClick={() => deleteBook(book.id, refresh)} disabled={!selectedBook}/>
      </div>
    </form>
  )
};

BookCover.propTypes = {
  book: PropTypes.object,
  selectedBook: PropTypes.object,
  setSelectedBook: PropTypes.func,
  refreshBooks: PropTypes.func
}
