import './App.css'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '' })
  const [users, setUsers] = useState([])

  const submitForm = (e) => {
    e.preventDefault()
    if (user.firstName && user.lastName && user.email) {
      const newUser = { ...user, id: new Date().getTime().toString() }
      setUsers(() => {
        return [...users, newUser]
      })
      setUser({ firstName: '', lastName: '', email: '' })
    } else alert('Enter all values')
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser(() => {
      return { ...user, [name]: value }
    })
  }
  return (
    <section>
      <h1>Registration Form</h1>
      <form>
        <div className='form'>
          <label htmlFor='firstName'>First Name: </label>
          <input
            type='text'
            placeholder=''
            name='firstName'
            id='firstName'
            value={user.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='form'>
          <label htmlFor='lastName'>Last Name: </label>
          <input
            type='text'
            placeholder=''
            name='lastName'
            id='lastName'
            value={user.lastName}
            onChange={handleChange}
          />
        </div>
        <div className='form'>
          <label htmlFor='email'>Email: </label>
          <input
            type='email'
            placeholder=''
            name='email'
            id='email'
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <button onClick={submitForm}>Submit</button>
      </form>
      {users.map((user, index) => {
        const { id, firstName, lastName, email } = user
        return <p key={id}>{`${firstName} ${lastName} ${email}`}</p>
      })}
    </section>
  )
}

export default App
