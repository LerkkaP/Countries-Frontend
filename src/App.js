import { useState, useEffect } from "react"
import axios from 'axios'

import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  const fetchedNames = countries
    .map(country => country.name)
    .filter(name => name.toLowerCase().indexOf(filter.toLowerCase()) >= 0)

  useEffect(() => {
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response => {
      const mappedData = response.data.map(country => {
        return {
          name: country.name.common,
          capital: country.capital && country.capital[0],
          languages: country.languages ? Object.values(country.languages) : [],
          flags: {
            flag: country.flags.png,
            alt: country.flags.alt
          },
          area: country["area"]
        }
      })
      setCountries(mappedData)
    })
  }, [])

  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className="container">
      <h1>Find countries</h1>
      <input value={filter} onChange={handleChange} placeholder={"Search..."} />
      <Countries fetchedNames={fetchedNames} countries={countries} filter={filter} />
    </div>
  )
}

export default App
