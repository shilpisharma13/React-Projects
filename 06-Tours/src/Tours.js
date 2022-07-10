import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, deleteTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour tour={tour} key={tour.id} deleteTour={deleteTour} />
        })}
      </div>
    </section>
  )
}

export default Tours
