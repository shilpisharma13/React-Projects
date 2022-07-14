import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = React.useState(0)
  let newIndex
  const prevSlide = () => {
    newIndex = index - 1
    if (index < 0) {
      newIndex = data.length - 1
    }
    return setIndex(newIndex)
  }

  const nextSlide = () => {
    newIndex = index + 1
    if (index > data.length - 1) {
      newIndex = 0
    }
    return setIndex(newIndex)
  }

  useEffect(() => {
    let slider = setInterval(() => {
      newIndex = index + 1
      if (newIndex > data.length - 1) newIndex = 0
      return setIndex(newIndex)
    }, 3000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person
          let position = 'nextSlide'

          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
