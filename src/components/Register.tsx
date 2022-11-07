import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/user'

function Register() {
  const [user, setUser] = useState({})
  const dispatch = useDispatch()
  const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const key = event.currentTarget.name
    const value = event.currentTarget.value
    setUser({
      ...user,
      [key]: value
    })
  }

  const handleSubmit = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(login(user))
  }

  return (
    <section className="register">
      <h1>Sign Up</h1>
      <div className="register-form">
        <form className="register-user">
          <div className="form-field">
            <label htmlFor="input1">
              Name:
              <input type="text" name="name" id="input1" placeholder="input1" onChange={handleChange}/>
            </label>
          </div>
          <div className="form-field">
            <label htmlFor="input2">
              Username:
              <input type="text" name="username" id="input2" placeholder="input2" onChange={handleChange} />
            </label>
          </div>
          <div className="form-field">
            <label htmlFor="input3">
              Email:
              <input type="text" name="email" id="input3" placeholder="input3" onChange={handleChange} />
            </label>
          </div>
          <div className="form-field">
            <label htmlFor="input4">
              Age:
              <input type='number' name="age" id="input4" placeholder="input4" onChange={handleChange} />
            </label>
          </div>
          <button type="submit" onClick={handleSubmit}>Register</button>
        </form>
      </div>
    </section>
  )
}

export default Register