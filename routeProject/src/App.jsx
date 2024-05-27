import { useRef, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import { HeroOne } from "./components/Hero";
import { Footer } from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
function App() {
//   const ref= useRef()
//  const [count, setCount] = useState(0)
//  useEffect(() => {
//    console.log(ref.current);
//  },

const [show, setShow] = useState(false)
 
  return (
    <> 
    <BrowserRouter>
     <Nav/>
     {show&& <Contact/>}

    <button onClick={()=>{setShow(!show)}} >Click me to show contact button</button>
     <Routes>
      <Route path="/"  element={<HeroOne/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<NotFound/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  );
}

export default App;
