import React from 'react'
import PropTypes from 'prop-types'

const Book = function(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.imageLinks.thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select value={props.shelf} onChange={(evt)=>props.onChangeShelf(evt.target.value)}>
            <option value="none" disabled>Move to...</option>
            {props.shelfOptions.map((shelf) => (
                <option value={shelf.id} key={shelf.id}>{shelf.name}</option>
              ))}
          </select>
        </div>
      </div>
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{Array.isArray(props.authors) && props.authors.reduce((list,auth) => (`${list}, ${auth}`))}</div>
    </div>
  )
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array,
  imageLinks: PropTypes.shape({
    thumbnail: PropTypes.string
  }),
  shelf: PropTypes.string.isRequired,
  shelfOptions: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })).isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Book