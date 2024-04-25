import React from 'react'

const Header = (props) => {
  return (
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
        <h2>{props.part}</h2>
        <p>Number of exercises:{props.exercise}</p>
    </div>
  )
}

const Content = (props) => {
  return (
      <div>
        <Part part={props.part1} exercise={props.exercises1} />
        <Part part={props.part2} exercise={props.exercises2} />
        <Part part={props.part3} exercise={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
        <p>Total of exercises: {props.one + props.two + props.three}</p>
    </div>
  )
}

const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
      <Total one = {exercises1} two = {exercises2} three = {exercises3} />
    </div>
  )
}

export default App