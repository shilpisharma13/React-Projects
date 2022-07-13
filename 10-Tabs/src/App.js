import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight, FaCentercode } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const getData = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setIsLoading(false)
      setJobs(data)
    } catch (error) {
      console.log(error)
      setIsLoading(true)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (isLoading) {
    return <h2 className='section loading'>Loading......</h2>
  }

  const { company, dates, duties, title } = jobs[value]
  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {jobs.map((job, index) => {
            return (
              <button
                className={`${
                  value === index ? 'job-btn active-btn' : 'job-btn'
                }`}
                key={job.index}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div className='job-desc' key={index}>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App
