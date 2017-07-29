import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

const Bookshelf = function(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{ props.title }</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <Book title="Blah" authors={['Emily Gray, Simon Green']} />
          </li>
        </ol>
      </div>
    </div>
)}

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired
}

export default Bookshelf