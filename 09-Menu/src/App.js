import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]
console.log(allCategories)
function App() {
  const [menu, setMenu] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenu(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenu(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <h2 className='title'>Menu</h2>
        <div className='underline'></div>

        <Categories categories={categories} filterItems={filterItems} />
        {/* {category.map((cat, index) => {
            return <Categories key={index} />
          })} */}

        <Menu items={menu} />
      </section>
    </main>
  )
}

export default App
