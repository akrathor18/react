import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='/github' element={<Github />} />
      
       </Route>
  )
)
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>   
    <RouterProvider router={router} />
  </React.StrictMode>
)
