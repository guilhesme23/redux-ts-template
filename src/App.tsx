import { useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Profile from './components/Profile'
import Register from './components/Register'
import { RootState } from './store'

function App() {
  const user = useSelector((state: RootState) => state.user.value)

  const checkUser = () => {
    if (user.id == null) {
      return <Register />
    } else {
      return <Profile />
    }
  }

  return (
    <div className="App">
      {checkUser()}
    </div>
  )
}

export default App
