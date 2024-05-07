import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Header from './components/Header/Header'
import './App.css'
import Footer from './components/footer/Footer'

function App() {

  return (
  <>
  <Header/>
  <Outlet/>
  <Footer/>
  </>
  )
}

export default App
