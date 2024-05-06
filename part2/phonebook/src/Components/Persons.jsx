const Persons = (props) => {

    return (
        <ul>{props.showPersons.map(p => {
            return <li key={p.id}>{p.name} {p.number}</li>
        })}</ul>
    )
}

export default Persons