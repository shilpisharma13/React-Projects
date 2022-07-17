import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(10))

  const generateColor = (e) => {
    e.preventDefault()
    try {
      let newColor = new Values(color).all(10)
      setError(false)
      setList(newColor)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <div className='container'>
        <h3>color generator</h3>
        <form onSubmit={generateColor}>
          <input
            className={`${error ? 'error' : null}`}
            type='text'
            placeholder='#f15025'
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
          />
          <button className='btn'>submit</button>
        </form>
      </div>
      <div className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} color={color} index={index} />
        })}
      </div>
    </>
  )
}

export default App
