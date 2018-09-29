import React from 'react'

const BookFilter = (props) => {
  const filters = [
    'All',
    'Web',
    'Mobile',
    'DevOps',
    'Essentials',
  ]

  return (
    <ul className="nav nav-pills text-center">
      {filters.map(filter => (
        <li className={filter === props.selectedFilter ? 'active' : ''} key={filter} onClick={() => { props.selectFilter(filter) }}>
          <a href="#0">{filter}</a>
        </li>
      ))}
    </ul>
  )
}

export default BookFilter
