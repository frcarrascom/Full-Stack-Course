const Total = (props) => {

    const total = props.parts.reduce((accumulator, item) => {
        return accumulator += item.exercises
    }, 0)

    return (
        <p><b>Total of {total} exercises</b></p>
    )
}

export default Total