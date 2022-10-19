import './Home.css'
import React from 'react'
import Search from '../../components/search/Search'
import Filter from '../../components/filter/Filter'
import Countries from '../../components/Countries'


function Home() {
  return (
    <div className='container'>
      <div className="search_filter">
      <Search/>
      <Filter />
      </div>
      <Countries/>
    </div>
  )
}

export default Home