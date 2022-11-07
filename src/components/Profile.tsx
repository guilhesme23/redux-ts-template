import { useSelector } from 'react-redux'
import { RootState } from '../store'

function Profile() {
  const user = useSelector((store: RootState) => store.user.value)

  return (
    <>
      <h1>Profile</h1>
      <section className="container">
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
      </section>
    </>
  )
}

export default Profile