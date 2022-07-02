import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }
  return (
    <section className='container'>
      <h2>Counter App</h2>
      <h1 className={`${counter > 0 ? 'positive' : 'negative'}`}>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </section>
  )
}

export default App
