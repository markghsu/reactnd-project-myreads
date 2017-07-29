import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

const BookList = function() {
	return (
		<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
        	<Bookshelf title="Currently Reading" books={[
        		{
        			title:"BOoop",
        			authors:['Emily Gray','Simon Green'],
        			imageLinks:{thumbnail:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"},
        			id:"zYPVuhFDahEC"
        		},
        		{
        			title:"Hello",
        			authors:['Fellow Marge','Aron Red'],
        			imageLinks:{thumbnail:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"},
        			id:"ssss"
        		}
        		]} />
        	<Bookshelf title="Want to Read" books={[]} />
        	<Bookshelf title="Read" books={[]} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a Book</Link>
      </div>
    </div>
	)
}
export default BookList