import '../index.css'

const Countries = ({ countries, filterCountries }) => {

    return (
        <div className="together"> 
            <p>{countries.name.common}</p>
            <button value={countries.name.common} onClick={filterCountries}>{countries.name.common}</button>
        </div>
    )
}

export default Countries