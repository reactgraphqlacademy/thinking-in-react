import React from 'react'
import books from '../../mocks/books'
import BookList from './BookList'
import BookFilter from './BookFilter'

class Books extends React.Component {
  constructor () {
    super()
    this.state = {
      books,
      selectedFilter: 'All',
    }
  }

  selectFilter = ( filter ) => {
    this.setState({
      selectedFilter: filter,
      books: filter === 'All'? books : books.filter( book => (book.category === filter) )
    })
  }

  render () {
    const { books, selectedFilter } = this.state

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
                <BookFilter selectedFilter={selectedFilter} selectFilter={this.selectFilter}/>
            </div>
          </div>
          <BookList books={books}/>
        </div>
      </section>
    )
  }
}



export default Books
