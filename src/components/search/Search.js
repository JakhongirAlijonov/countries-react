import {useState} from 'react'
import './Search.css'
function Search() {
  const [search , setSearch] = useState()
  
  return (
    <div className='search '>
        <form action="">
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search for a country ... '  className='search_input' />
        </form>
    </div>
  )
}

export default Search