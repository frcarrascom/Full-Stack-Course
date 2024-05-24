import './index.css'

const Filter = ({ newSearch, filterCountries }) => {

    return (
        <div className="together">
            <p>find countries:</p><input value={newSearch} onChange={filterCountries} placeholder="Enter a country name" />
        </div>
    )
}

export default Filter