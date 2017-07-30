import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

const BookList = function(props) {
	return (
		<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
        	{props.shelves.map((shelf) =>(
        		<Bookshelf 
	        		title={shelf.name}
	        		key={shelf.name}
	        		books={props.books.filter((book) => (book.shelf === shelf.id))}
	        		shelfOptions={props.shelves}
	        		onChangeShelf={(b,c)=>props.onChangeShelf(b,c)}
        		/>
        		))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a Book</Link>
      </div>
    </div>
	)
}

BookList.propTypes = {
	title: PropTypes.string.isRequired,
	shelves: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired
		})).isRequired,
	books: PropTypes.array.isRequired,
	onChangeShelf: PropTypes.func.isRequired
}

export default BookList