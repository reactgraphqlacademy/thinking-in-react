import React, { useState } from 'react'
import books from '../../mocks/books'
import BookList from './BookList'
import BookFilter from './BookFilter'

function Books() {
  
  const [state, setState] = useState({
    books,
    selectedFilter: 'All',
  })

  const mergeState = partialState =>
    setState(prevState => ({
        ...prevState,
        ...partialState
    }))

  const selectFilter = ( filter ) => {
    mergeState({
      selectedFilter: filter,
      books: filter === 'All' ? books : books.filter(book => (book.category === filter))
    })
  }

    

    return (
      <section id="books">
        <div className="container">
          <div className="row">
              <div className="col-lg-12 text-center">
                  <h2>Books</h2>
                  <hr className="star-primary" />
              </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
                <BookFilter selectedFilter={state.selectedFilter} selectFilter={selectFilter}/>
            </div>
          </div>
          <BookList books={state.books}/>
        </div>
      </section>
    )

}



export default Books
