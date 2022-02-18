import React from 'react'
import PropTypes from 'prop-types'
import './Bookshelf.scss'
import { isKeyboardSelectionEvent } from '../utils/browser-utils'

export default function Bookshelf (props) {
  const { books, onSelectBook, selectedBook } = props

  return (
    <table className='bookshelf'>
      <tbody>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Description</th>
        </tr>
        {(!books || books.length === 0) && (
        <tr>
          <td>The bookshelf is empty.</td>
        </tr>
        )}
        {books.map(book => (
          <tr tabIndex={0} onClick={() => {
            return onSelectBook(book)
          }} onKeyDown={e => isKeyboardSelectionEvent(e) && onSelectBook(book)} key={book.id} className={book.id === selectedBook?.id ? 'selected' : ''}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td className="description">{book.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

Bookshelf.propTypes = {
  books: PropTypes.array,
  onSelectBook: PropTypes.func,
  selectedBook: PropTypes.object
}
