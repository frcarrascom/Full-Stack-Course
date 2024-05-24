import axios from 'axios'
import { useState, useEffect } from 'react'

const Weather = ({ capital, lat, lon }) => {

    const [weather, setWeather] = useState("")
    const [wind, setWind] = useState("")
    const [icon, setIcon] = useState("")

    const apiKey = import.meta.env.VITE_SOME_KEY

    useEffect(() => {
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
            .then(response => {
                setWeather(response.data.main.temp)
                setWind(response.data.wind.speed)
                setIcon(response.data.weather[0].icon)
            })
    }, [])

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

    return (
        <div>
            <h3>Weather in {capital}</h3>
            <p>temperature {weather} Celsius</p>
            <img src={iconUrl} alt="Weather Icon" />
            <p>Wind {wind} m/s</p>
        </div>
    )
}

export default Weather