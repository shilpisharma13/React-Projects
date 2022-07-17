import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ color, index }) => {
  const [alert, setAlert] = useState(false)
  const { hex, weight } = color
  const copyColor = () => {
    setAlert(true)
    navigator.clipboard.writeText(`#${hex}`)
  }

  useEffect(() => {
    const clearCopyText = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(clearCopyText)
  }, [alert])
  return (
    <article
      onClick={copyColor}
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className='color-value'>#{hex}</p>
      <p className='percent-value'>{weight}%</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
