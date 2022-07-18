import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f150ff').all(10))

  const generateColor = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      console.log(colors)
      setList(colors)
      setError(false)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }
  return (
    <>
      <div className='container'>
        <h3>color generator</h3>
        <form onSubmit={generateColor}>
          <input
            type='text'
            id='color'
            name='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f150ff'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' onClick={generateColor}>
            Submit
          </button>
        </form>
        <div className='colors'>
          <SingleColor value={color} />
        </div>
      </div>
      <section className='colors'>
        {list.map((element, index) => {
          return (
            <SingleColor
              {...element}
              key={index}
              index={index}
              hexColor={`#${element.hex}`}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
