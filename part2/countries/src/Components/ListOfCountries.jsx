import Country from "./Country"
import Countries from "./Countries.jsx"

const ListOfCountries = ({ countries, filter, filterCountries }) => {


    let filtered = countries.filter((c) => c.name.common.toLowerCase().includes(filter.toLowerCase()))
    let filteredSize = filtered.length

    if (filteredSize > 10) {
        return (
            <div>
                <p>too many matches, specify another filter</p>
            </div>
        )
    }
    if (filteredSize < 10 && filteredSize != 1) {
        return filtered.map(each => {
            return (<Countries key={each.name.common} countries={each} filterCountries={filterCountries}/>)
        })
    }
    if (filteredSize === 1) {
        return filtered.map(each => {
            return (<Country key={each.name.common} country={each} />)
        })
    }
    else {
        return (<div></div>)
    }

}

export default ListOfCountries