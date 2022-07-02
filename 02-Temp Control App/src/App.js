import './App.css'
import { useState } from 'react'

function App() {
  const [temperatureValue, setTemperatureValue] = useState(16)
  const [temperatureColor, setTemperatureColor] = useState('neutral')

  const increment = () => {
    if (temperatureValue === 30) return
    const newTemperature = temperatureValue + 1
    if (newTemperature > 24) {
      setTemperatureColor('hot')
    }
    setTemperatureValue(newTemperature)
  }
  const decrement = () => {
    if (temperatureValue === 0) return
    const newTemperature = temperatureValue - 1
    if (newTemperature < 15) {
      setTemperatureColor('cold')
    }
    setTemperatureValue(newTemperature)
  }
  return (
    <section className='container'>
      <h2>Temperature Controller</h2>
      <div className='temperature-display-container'>
        <h1 className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}℃
        </h1>
      </div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </section>
  )
}

export default App
