
import './App.css'
import Profile from './context/components/Profile'
import Profile from './components/Profile'
import UserContextProvider from './context/components/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App