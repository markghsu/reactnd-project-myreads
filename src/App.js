import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'
import SearchBooks from './Search.js'
import './App.css'

class BooksApp extends React.Component {
  state = {
    "Currently Reading": {
        shelfName: "Currently Reading",
        books: [{
              title:"BOoop",
              authors:['Emily Gray','Simon Green'],
              imageLinks:{thumbnail:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"},
              id:"zYPVuhFDahEC",
              shelf:"Currently Reading"
            },
            {
              title:"Hello",
              authors:['Fellow Marge','Aron Red'],
              imageLinks:{thumbnail:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"},
              id:"ssss",
              shelf:"Currently Reading"
            }]
      },
      "Want to Read": {
        shelfName: "Want to Read",
        books: [{
              title:"Somethig Bul",
              authors:['Sam Smith','Simon Green','Taylor Swift'],
              imageLinks:{thumbnail:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"},
              id:"sdadfa",
              shelf:"Want to Read"
            },
            {
              title:"Smig",
              authors:['Mark Mark','Jacqueline Onion'],
              imageLinks:{thumbnail:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"},
              id:"xmmrwk",
              shelf:"Want to Read"
            }]
      },
      "Read": {
        shelfName: "Read",
        books: []
      }
  }

  changeShelf = (book,newShelf) => {
    this.setState((prev) =>
      {        
        prev[book.shelf].books = prev[book.shelf].books.filter((b) => (b.id !== book.id)); //Remove from old shelf
        book.shelf = newShelf;
        prev[newShelf].books.push(book);
        return prev;
      }
    );
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchBooks} />
        <Route exact path="/" render={() => (
          <BookList title="MyReads" shelves={[this.state["Currently Reading"],this.state["Want to Read"],this.state["Read"]]} onChangeShelf={this.changeShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
