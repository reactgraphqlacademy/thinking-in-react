import React from 'react'
import filters from '../../mocks/filters'
import books from '../../mocks/books'
import BookList from './BookList'
import BookFilter from './BookFilter'

class Books extends React.Component {
  constructor () {
    super()
    this.selectTab = this.selectTab.bind(this)
    this.state = {
      books,
      filters
    }
  }

  selectTab ( category ) {
    this.setState({
      filters: filters.map(filter => ({
        ...filter, selected: filter.category === category
      })),
      books: category === 'All' ? books : books.filter(book => (book.category === category)),
    })
  }

  render () {
    const { books, filters } = this.state

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
                <BookFilter filters={this.state.filters} selectTab={this.selectTab}/>
            </div>
          </div>
          <BookList books={this.state.books}/>
        </div>
      </section>
    )
  }
}



export default Books
