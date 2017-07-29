import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import SearchBooks from './Search.js'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: true
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks />
        ) : (
          <BookList />
        )}
      </div>
    )
  }
}

export default BooksApp
