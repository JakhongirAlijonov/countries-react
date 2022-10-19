import React from 'react'
import './Loader.css'
import './Countries.css'
import {useFetch} from '../hooks/useFetch'
function Countries() {
    const url = 'https://restcountries.com/v3.1/all'
    const {data, isPending ,error} = useFetch(url)
  return (
    <div className='cards '>
    {isPending && <span className="loader"></span>}
{error && <p>{error}</p>}
    {data &&  data.map((country)=>{
        return (
            <div className="card" key={country.flag}>
                <img src={country.flags.png} alt="" />
                <h3 className="name">
                    {country.name.common}
                </h3>
                <span className="population">
                    <b>Population: </b>{country.population}
                </span> <br />
                <span className="region">
                    <b>Region:</b> {country.region}
                </span> <br />
                <span className="capital">
                    <b>Capital:</b>{country.capital}
                </span> <br />
                <br />
                <button className="button-6" >More...</button>
            </div>
        )
    })}
    </div>
  )
}

export default Countries