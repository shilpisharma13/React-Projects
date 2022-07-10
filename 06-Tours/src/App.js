import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

//URL to fetch data
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <>
        <Loading />
      </>
    )
  }

  if (tours.length === 0) {
    return (
      <div className='title'>
        <h2>No tours Left</h2>
        <button className='btn' onClick={fetchTours}>
          Refresh
        </button>
      </div>
    )
  } else {
    return <Tours tours={tours} deleteTour={deleteTour} />
  }
}

export default App
