import React from 'react'

function BookList(props) {
  return (
    <div className="row book-list">
      {props.books.map((book) => (
        <div className="col-xs-6 col-sm-3" key={book.id}>
          <div className="thumbnail">
            <img alt="" className="img-responsive" src={book.cover} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookList
