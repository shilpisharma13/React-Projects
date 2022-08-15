import React, { useState, useRef, useEffect } from 'react'
import { FaColumns } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen, location, page } = useGlobalContext()
  const submenuContainer = useRef(null)
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    setColumns('col-2')
    const submenu = submenuContainer.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    if (page.links.length === 3) setColumns('col-3')
    if (page.links.length > 3) setColumns('col-4')
  }, [location])
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={submenuContainer}
    >
      <h4>{page.page}</h4>
      <div className={`submenu-center ${columns}`}>
        {page.links.map((sublink, index) => {
          const { label, icon, url } = sublink
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </aside>
  )
}

export default Submenu
