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
        prev.books.find((b)=>(b.id === book.id)).shelf = newShelf;
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
