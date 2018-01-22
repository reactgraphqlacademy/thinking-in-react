import React from 'react'

const BookFilter = ({ selectedFilter, selectFilter }) => {
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
        <li className={ filter === selectedFilter ? 'active': '' } key={ filter } onClick={ () => { selectFilter(filter) } }>
          <a href="#0">{ filter }</a>
        </li>
      ))}
    </ul>
  )
}

export default BookFilter
