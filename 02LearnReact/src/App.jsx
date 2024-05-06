import { useState } from 'react'
import Card from "./components/cards"
function App() {
  const [count, setCount] = useState(0)
let myobj={
  name :"ashish",
  age :"17",
  key:"value"
}
let arr=[1,2,5,8]
  return (
    <>
      <h1 className="p-4 text-3xl font-bold underline bg-green-600 text-center text-red-800">
    Hello world!
  </h1>
<Card name="ashish" obj={myobj} myarr={arr} />
<Card name="chai aur code" />
    </>
  )
}

export default App
