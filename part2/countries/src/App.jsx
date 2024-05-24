import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter'
import ListOfCountries from './Components/ListOfCountries'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filterCountries = e => {
    setFilter(e.target.value);
  }

  return (
    <div>
      < Filter newSearch={filter} filterCountries={filterCountries} />
      <ListOfCountries countries={countries} filter={filter} filterCountries={filterCountries} />
    </div>
  )
}

export default App
