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
    BooksAPI.update(book,newShelf).then((resp)=>{console.log(resp)}); //WHAT SHOULD WE DO WITH THE RESPONSE?
    this.setState((prev) =>
      {
        const myBook = prev.books.find((b)=>(b.id === book.id));
        if(myBook) {
          myBook.shelf=newShelf;
        }
        else {
          book.shelf = newShelf;
          prev.books.push(book);
        }
        return prev;
      }
    );
  }
  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks myBooks={this.state.books} onChange={this.changeShelf} shelves={this.state.shelves}/>
        )} />
        <Route exact path="/" render={() => (
          <BookList title="MyReads" shelves={this.state.shelves} books={this.state.books} onChangeShelf={this.changeShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
