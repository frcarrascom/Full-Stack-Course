
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <h1>{course.name}</h1>
      <h2>{course.parts[0].name}</h2>
      <p>Exercises: {course.parts[0].exercises}</p>
      <h2>{course.parts[1].name}</h2>
      <p>Exercises: {course.parts[1].exercises}</p>
      <h2>{course.parts[2].name}</h2>
      <p>Exercises: {course.parts[1].exercises}</p>
    </div>
  )
}

export default App
