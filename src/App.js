import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import SearchBooks from './Search.js'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
    {
      this.setState({books});//SAME AS {contacts: contacts}
    });
    this.setState({shelves:[
      {
        id: "currentlyReading",
        name: "Currently Reading"
      },
      {
        id: "wantToRead",
        name: "Want to Read"
      },
      {
        id: "read",
        name: "Read",
      }
    ]});
  }

  changeShelf = (book,newShelf) => {
    this.setState((prev) =>
      {
        //const oldShelf = prev.shelves.find((sh)=>(sh.id === book.shelf));
        //oldShelf.books = oldShelf.books.filter((b) => (b.id !== book.id)); //Remove from old shelf
        prev.books.find((b)=>(b.id === book.id)).shelf = newShelf;
        //prev.shelves.find((sh)=>(sh.id === newShelf)).books.push(book);
        return prev;
      }
    );
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchBooks} />
        <Route exact path="/" render={() => (
          <BookList title="MyReads" shelves={this.state.shelves} books={this.state.books} onChangeShelf={this.changeShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
