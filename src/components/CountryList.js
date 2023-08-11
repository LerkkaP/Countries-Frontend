import { useState } from "react"
import CountryDetails from "./CountryDetails"

const CountryList = ({ fetchedNames, countries }) => {
  const [showDetails, setShowDetails] = useState({})
  const [buttonState, setButtonState] = useState('show')

  const handleClick = (name) => {

    setShowDetails((prevDetails) => ({
      ...prevDetails,
      [name]: !prevDetails[name], 
    }))
    
    setButtonState((prevStates) => ({
      ...prevStates,
      [name]: !prevStates[name],
    }))

  }

  return (
    <div>
      {fetchedNames.map((name) => (
        <div key={name}>
          <p>
            {name}
            <button type="button" onClick={() => handleClick(name)}>
                {buttonState[name] ? "hide" : "show"}
            </button>
          </p>
          {showDetails[name] && (
            <CountryDetails
              country={countries.find((country) => country.name === name)}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default CountryList
