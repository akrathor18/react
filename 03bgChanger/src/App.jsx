import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor]=useState("white")

  return (
  <>
  <div className="w-full h-screen" style={{backgroundColor:color}}></div>
  <div className="flex fixed flex-wrap bottom-2  bg-red-400 w-full p-5 justify-center">
  <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
  <button
  onClick={()=>{setColor("black")}}
    type="button"
    style={{backgroundColor:"black"}}
    className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
  >black
  </button>
  <button
  onClick={()=>{setColor("yellow")}}
    type="button"
    style={{backgroundColor:"yellow"}}

    className="rounded-md px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
  >yellow
  </button>
  <button
  onClick={()=>{setColor("red")}}
    type="button"
    style={{backgroundColor:"red"}}
    className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
  >
    Red
  </button>
  <button
  onClick={()=>{setColor("green")}}
  type="button"
    style={{backgroundColor:"green"}}
    className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >
    Green
  </button>
  <button
  onClick={()=>{setColor("blue")}}
  type="button"
    style={{backgroundColor:"blue"}}
    className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >blue
  </button>
  <button
  onClick={()=>{setColor("pink")}}
  type="button"
    style={{backgroundColor:"pink"}}
    className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >Pink
  </button>
  <button
  onClick={()=>{setColor("Aqua")}}
  type="button"
    style={{backgroundColor:"Aqua"}}
    className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
  >Aqua
  </button>
</div>

  </div>
  </>
  )
}

export default App
