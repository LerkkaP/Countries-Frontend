import axios from "axios"
import { useEffect, useState } from "react"

const Weather = ({country}) => {
  const [data, setData] = useState({})
  const backendUrl = 'http://localhost:3001' 

  useEffect(() => {
    const fetchData = async () => {
      if (country.name) {
        try {
          const response = await axios.get(`${backendUrl}/weather?city=${country.name}`)
          setData(response.data)
        } catch (error) {
          setData({})
        }
      }
    }

    fetchData()
  }, [country.name, backendUrl])

  return (
    <div>
      {data.main && (
        <div>
          <h2>Weather in {country.capital}</h2>
          <div className="weather-info">
            <p>Temperature {Math.ceil(data.main.temp - 273.15)} &deg;C</p>
            {data.weather &&
              data.weather.map((i) => (
                <img
                  key={i.id}
                  src={`http://openweathermap.org/img/w/${i.icon}.png`}
                  alt={i.main}
                />
              ))}
            <p>Wind {Math.ceil(data.wind.speed)} m/s</p>
          </div>
        </div>
      )}
      {!data.main && <h2>Weather information not available</h2>}
    </div>
  )
}

export default Weather


