import CountryDetails from "./CountryDetails"
import CountryList from "./CountryList"

const Countries = ({ filter, fetchedNames, countries }) => {
  if (filter !== "") {
    if (fetchedNames.length === 1) {
      const country = countries.find(country => country.name === fetchedNames[0])
      return <CountryDetails country={country} />
    } else if (1 < fetchedNames.length && fetchedNames.length <= 10) {
      return <CountryList fetchedNames={fetchedNames} countries={countries}/>
    } else {
      return <p>Too many matches, specify another filter</p>
    }
  }
}

export default Countries
