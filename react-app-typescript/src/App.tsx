import {Component, useEffect, useState} from 'react';
import './App.css';
import List from './components/List'

interface sub {
  nick : string
  avatar : string
  subMonths : number
  description? : string
}

interface STATE{
  subs : Array<sub>
}

const INITIAL_STATE = [
  {
    nick:'DrLazarus',
    subMonths: 4,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description : 'He is the creator'
    
  },
  {
    nick:'Pedro',
    subMonths: 2,
    avatar: 'https://i.pravatar.cc/150?img=4'
  }
]

function App() {

  const [subs, setSubs] = useState<STATE["subs"]>([])

  useEffect(() => {
    setSubs(INITIAL_STATE)
  })

  return (
    <div className="App">
      <h1>Mi pagina</h1>
      <List subs= {subs}/>

    </div>
  );
}

export default App;
