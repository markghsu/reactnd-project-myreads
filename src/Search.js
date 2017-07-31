import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Bookshelf from './Bookshelf'

class SearchBooks extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    results: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    shelves: PropTypes.array.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    });
    this.props.onSearch(query);
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
              books={this.props.results}
              shelfOptions={this.props.shelves}
              onChangeShelf={(b,c)=>this.props.onChange(b,c)}
            />
          <ol className="books-grid">

          </ol>
        </div>
      </div>
    );}
}
export default SearchBooks