import React, { useState } from 'react'
import booksMockData from '../../mocks/books'
import BookList from './BookList'
import BookFilter from './BookFilter'

function Books() {
  // It's probably better to combine these two states into a useReducer. For simplicity at this point, we keep into two different useState
  const [books, setBooks] = useState(booksMockData)
  const [selectedFilter, setSelectedFilter] = useState('All')

  const selectFilter = (filter) => {
    setSelectedFilter(filter)
    setBooks(
      filter === 'All'
        ? booksMockData
        : booksMockData.filter((book) => book.category === filter)
    )
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
            <BookFilter
              selectFilter={selectFilter}
              selectedFilter={selectedFilter}
            />
          </div>
        </div>
        <BookList books={books} />
      </div>
    </section>
  )
}

export default Books
