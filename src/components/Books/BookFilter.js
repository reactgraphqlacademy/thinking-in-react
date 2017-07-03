import React from 'react'

const BookFilter = ({ filters, selectTab }) => (
  <ul className="nav nav-pills text-center">
    {filters.map(filter => (
      <li className={ filter.selected? 'active': '' } key={ filter.category } onClick={ () => { selectTab(filter.category) } }>
        <a href="#0">{ filter.category }</a>
      </li>
    ))}
  </ul>
)

export default BookFilter
