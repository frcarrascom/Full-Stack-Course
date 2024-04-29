import { useState } from 'react'

let currentValue = 0
let points: Array<number> = [0, 0, 0 , 0 , 0 , 0 , 0 , 0]

let random = 0

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

  const [selected, setSelected] = useState(0)
  const [voted, selectVoted] = useState(0)
  const [most, setMost] = useState(0)

  const setRandom = () => {
    return(Math.floor(Math.random()* anecdotes.length))
  }
  
  const nextAnecdote = () => {
    random = setRandom()
    setSelected(random)
    currentValue = random
    selectVoted(points[currentValue])
  }
  
  const vote = () => 
  {
      points[currentValue] += 1
      selectVoted(points[currentValue])
      setMost (points.indexOf(Math.max.apply(Math, points)))
  }
  
  const ShowAnecdote = () => 
  {
    if (most == 0){
  
      return (
        <div>
        <p> No anecdote</p>
      </div>
      )
    }

    return (
      <div>
      <p> {anecdotes[most]}</p>
    </div>
    )
  }

  return (
    <div>
      {anecdotes[selected]}
      <p>
        has {voted} points
      </p>
      <div>
        <button onClick={nextAnecdote}>next anecdote</button>
        <button onClick={vote}>Vote</button>
        <ShowAnecdote/>
      </div>
    </div>
  )
}

export default App