import Weather from "./Weather"

const Country = ({ country }) => {

    const values = Object.values(country.languages)
console.log(country)

    return (
        <div>
            <h3>{country.name.common}</h3>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <p>Languages</p>
            <ul>
                {values.map(each => {
                    return (
                        <li key={each}>
                            {each}
                        </li>
                    )
                }
                )}
            </ul>
            <img src={country.flags.png} alt="flag" />
            <Weather capital={country.name.common} lat={country.latlng[0]} lon={country.latlng[1]}/>
        </div>
    )
}

export default Country