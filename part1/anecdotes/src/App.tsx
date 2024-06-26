import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [selected, setSelected] = useState(0)

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const vote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const ShowAnecdote = () => {
    if (Math.max(...points) == 0) {

      return (
        <div>
          <p> No anecdote</p>
        </div>
      )
    }

    return (
      <div>
        <p> {anecdotes[points.indexOf(Math.max(... points))]}</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>
        has {points[selected]} points
      </p>
      <div>
        <button onClick={vote}>Vote</button>
        <button onClick={nextAnecdote}>next anecdote</button>
        <h2>Anecdote with most votes</h2>
        <ShowAnecdote />
      </div>
    </div>
  )
}

export default App