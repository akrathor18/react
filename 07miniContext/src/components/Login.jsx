import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <center>
        <h2>Login</h2>
    <div className='flex justify-center '>
        <input
        className='text-black p-2 mr-5'
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='password' 
        className='text-black p-2 mr-5'
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
    </div>
        <button
        className='bg-blue-600 m-8 p-2 rounded-xl'
        onClick={handleSubmit}>Submit</button>
        </center>
  )
}

export default Login