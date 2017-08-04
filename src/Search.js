import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  static propTypes = {
    myBooks: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired
  }

  state = {
    query: '',
    searchResults:[]
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    });
    this.searchQuery(query);
  }

  searchQuery = (query) => {
    if(query){
      BooksAPI.search(query).then((books)=>{
        if (books.error) {
          this.setState(()=>{searchResults:[]});
        }
        else {
          //Set shelf of each book to "none", unless it matches an existing book
          this.setBookshelves(books);
        }
      });
    }
  }

  setBookshelves = (books) => {
    for (const book of books){
      const foundBook = this.props.myBooks.find((el)=>(book.id===el.id));
      book.shelf = foundBook?foundBook.shelf:'none';
    }
    this.setState(()=>({searchResults: books}));
  }

  changeShelf = (book,newShelf)=> {
    // this.setState((prev) => {
    //   //Needed to keep search results in sync with actual shelf
    //   const myBook = prev.searchResults.find((b)=>(b.id === book.id));
    //   myBook.shelf=newShelf;
    //   return prev;
    // });
    this.props.onChange(book,newShelf);
    this.setBookshelves(this.state.searchResults);
  }

  render() {
    const { query } = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="search"
              placeholder="Search by title or author"
              value={query}
              onChange={(evt)=>this.updateQuery(evt.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <Bookshelf
              title="Search Results"
              books={this.state.searchResults}
              shelfOptions={this.props.shelves}
              onChangeShelf={this.changeShelf}
            />
          <ol className="books-grid">

          </ol>
        </div>
      </div>
    );}
}
export default SearchBooks