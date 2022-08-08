import React, { useState, useRef, useEffect } from 'react'
import { FaColumns } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Submenu = () => {
  const { isSubmenuOpen } = useGlobalContext()
  const submenuContainer = useRef()
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}></aside>
  )
}

export default Submenu
