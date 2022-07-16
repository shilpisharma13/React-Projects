import React, { useState } from 'react'
import data from './data'

function App() {
  const [count, setCount] = useState(0)
  const [paragraph, setParagraph] = useState([])

  const generatePara = (e) => {
    e.preventDefault()
    if (count <= 0) {
      setParagraph(data.slice(0, 1))
    } else {
      setParagraph(data.slice(0, +count))
    }
  }
  return (
    <>
      <div className='section-center'>
        <h3>tired of boring lorem ipsum?</h3>
        <form className='lorem-form' onSubmit={generatePara}>
          <label htmlFor='amount'>Paragraphs:</label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className='btn' type='submit'>
            Generate
          </button>
        </form>
        <article className='lorem-text'>
          {paragraph.map((para, index) => {
            return <p key={index}>{para}</p>
          })}
        </article>
      </div>
    </>
  )
}

export default App
