import React from 'react'

const BookList = ({ books }) => (
  <div className="row book-list">
    { books.map( book => (
      <div className="col-xs-6 col-sm-3" key={ book.title }>
        <div className="thumbnail">
          <img alt="" className="img-responsive" src={ book.cover }/>
        </div>
      </div>
    )) }
  </div>
)

export default BookList
