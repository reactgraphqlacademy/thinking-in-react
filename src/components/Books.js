import React from 'react'
import filters from '../mocks/filters'
import books from '../mocks/books'

class Books extends React.Component {
  constructor () {
    super()
    this.state = {
      books,
      filters
    }
  }

  selectTab = ( category ) => {
    this.setState({
      filters: filters.map(filter => {
        filter.selected = filter.category === category
        return filter
      }),
      books: category === 'All' ? books : books.filter(book => (book.category === category)),
    })
  }

  render () {
    const { books, filters } = this.state

    const tabItems = filters.map(filter => (
      <li className={ filter.selected? 'active': '' } key={ filter.category } onClick={ this.selectTab.bind(null, filter.category) }>
        <a href="#0">{ filter.category }</a>
      </li>
    ))

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
              <ul className="nav nav-pills text-center">
                { tabItems }
              </ul>
            </div>
          </div>
          <div className="row book-list">
            { books.map( book => (
              <div className="col-xs-6 col-sm-3" key={ book.title }>
                <div className="thumbnail">
                  <img alt="" className="img-responsive" src={ book.cover }/>
                </div>
              </div>
            )) }
          </div>
        </div>
      </section>
    )
  }
}



export default Books
