import React from 'react'
import './Filter.css'
function Filter() {
  return (
    <div>
        <form className="select-region">
            <select name="regions" id="regions" className="selectors">
                <option value="0" >Sort by regions</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
               <option value="Oceania">Oceania</option>
            </select>
        </form>
    </div>
  )
}

export default Filter