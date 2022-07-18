import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ index, weight, hexColor }) => {
  const [alert, setAlert] = useState(false)

  const copy = () => {
    setAlert(true)
    navigator.clipboard.writeText(hexColor)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 2000)
    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <>
      <div
        onClick={copy}
        className={`color ${index > 10 && 'color-light'}`}
        style={{ backgroundColor: `${hexColor}` }}
      >
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>{hexColor}</p>
        {alert && <p className='alert'>copied to clipboard</p>}
      </div>
    </>
  )
}

export default SingleColor
