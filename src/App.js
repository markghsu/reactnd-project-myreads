import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import SearchBooks from './Search.js'
import './App.css'

class BooksApp extends React.Component {
  state = {
    shelves:[
      {
        shelfName:"Currently Reading",
        books:[{
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
            }]
      },
      {
        shelfName:"Want to Read",
        books:[]
      },
      {
        shelfName:"Read",
        books:[]
      }
    ]
  }
  
  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchBooks} />
        <Route exact path="/" render={() => (
          <BookList title="MyReads" shelves={this.state.shelves} />
        )} />
      </div>
    )
  }
}

export default BooksApp
