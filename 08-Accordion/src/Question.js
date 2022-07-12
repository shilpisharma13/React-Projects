import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [displayInfo, setDisplayInfo] = useState(false)

  return (
    <article className='question'>
      <header>
        <h3>{title}</h3>
        <button className='btn' onClick={() => setDisplayInfo(!displayInfo)}>
          {displayInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {displayInfo && <p>{info}</p>}
    </article>
  )
}

export default Question
