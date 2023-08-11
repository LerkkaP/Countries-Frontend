import Weather from "./Weather"

const CountryDetails = ({ country }) => {
  return (
    <div className="details">
      <h2>{country.name}</h2>
      <p><strong>Capital:</strong> {country.capital || "N/A"} </p>
      <p><strong>Area:</strong> {country.area} km²</p>
      <p><strong>Languages:</strong> {country.languages.join(", ")}</p>
      <img src={country.flags.flag} alt={country.flags.alt} />
      <Weather country={country}/>
    </div>
  )
}

export default CountryDetails