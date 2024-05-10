import { useEffect, useState } from 'react'
import Card from './components/Card'
import Button from './components/Button'
import './App.css'
import { ThemeProvider } from './context/theme'

function App() {
      const [themeMode, setThemeMode]=useState("light")

      const lightTheme=()=>{
        setThemeMode('light')
      } 
      const darkTheme=()=>{
        setThemeMode('dark')
      } 

      useEffect(() => {
      //  const tag= document.getElementsByTagName('html')
       document.querySelector('html').classList.remove("light", "dark")
       document.querySelector('html').classList.add(themeMode)
      }, [themeMode])
      
  return (
   <ThemeProvider value={{themeMode, darkTheme, lightTheme }}>
   <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <Button/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                   <Card/>     
                    </div>
                </div>
            </div>
   </ThemeProvider>
  )
}

export default App
