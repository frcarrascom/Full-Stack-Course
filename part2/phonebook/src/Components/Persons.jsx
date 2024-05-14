
const Persons = ({ showPersons, deleteEntry }) => {

    return (

        <ul>
            {showPersons.map(p => {
                return (
                    <li key={p.name}>
                        {p.name} {p.number}
                        <button key={p.id} onClick={() => deleteEntry(p)}>Delete</button>
                    </li>
                )
            })}
        </ul>
    )
}

export default Persons