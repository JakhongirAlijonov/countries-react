import './Navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import  {BiMoon} from 'react-icons/bi'
function Navbar() {
  return (
    <div className='navbar '>
    <nav>
          <Link  to='/'  className='brand'>
            <h1 className='logo'>Where in the world ?</h1>
        </Link>
        
        <>
          <p className='dark_mode'> <BiMoon className='bimoon' size={24}/> Dark mode</p>
        </>
    </nav>

    </div>
  )
}

export default Navbar