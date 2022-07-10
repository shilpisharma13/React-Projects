import React, { useState } from 'react'
import data from './data'
import List from './List'

//This birthday reminder App wiill display list of people (from data.js), who have their birthdays today, with their name, age and photo

function App() {
  const [people, setPeople] = useState(data)
  return (
    <>
      {' '}
      <main>
        <section className='container'>
          <h2>{data.length} birthdays today</h2>
          <List people={people} />
          {/* <List people={people} /> */}
          <button
            className='btn'
            onClick={() => {
              setPeople([])
            }}
          >
            Clear All
          </button>
        </section>
      </main>
    </>
  )
}

export default App
