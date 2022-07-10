import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  let newIndex
  const prevReview = () => {
    newIndex = index - 1
    if (newIndex < 0) {
      newIndex = people.length - 1
    }
    return setIndex(newIndex)
  }

  const nextReview = () => {
    newIndex = index + 1
    if (newIndex >= people.length) {
      newIndex = 0
    }
    return setIndex(newIndex)
  }
  const randomReview = () => {
    const randomNum = Math.floor(Math.random() * people.length)
    // console.log(randomNum)
    return setIndex(randomNum)
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn'>
          <FaChevronLeft onClick={prevReview} />
        </button>
        <button className='next-btn'>
          <FaChevronRight onClick={nextReview} />
        </button>
      </div>
      <button className='random-btn' onClick={randomReview}>
        surprise me
      </button>
    </article>
  )
}

export default Review
