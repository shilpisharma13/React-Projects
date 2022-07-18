import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [list, setList] = useState(getLocalStorage())
  const [name, setName] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true, 'please enter item', 'danger')
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'item edited', 'success')
    } else {
      showAlert(true, 'item added to the list', 'success')
      const newItems = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItems])
      setName('')
    }
  }
  const showAlert = (show = 'false', msg = '', type = '') => {
    setAlert({ show, msg, type })
  }

  const clearList = () => {
    showAlert(true, 'List deleted', 'danger')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'item deleted', 'danger')
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])
  return (
    <section className='section-center'>
      <form className='grocery-form'>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            placeholder='e.g. eggs'
            className='grocery'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button className='submit-btn' onClick={handleSubmit}>
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            Clear List
          </button>
        </div>
      )}
    </section>
  )
}

export default App
