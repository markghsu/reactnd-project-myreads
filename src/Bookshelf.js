import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const Bookshelf = function(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ props.title }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => (<li key={book.id}>
              <Book {...book} />
            </li>)
            )}
        </ol>
      </div>
    </div>
)}

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })).isRequired
}

export default Bookshelf