const Filter = ({ newSearch, handleSearch }) => {
    return (
        <div>
            filter shown with: <input value={newSearch} onChange={handleSearch} /><br />
        </div>
    )
}

export default Filter