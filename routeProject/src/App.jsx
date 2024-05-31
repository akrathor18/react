import { useRef, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route , useParams} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import { HeroOne } from "./components/Hero";
import { Footer } from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
function App() {

const id = useParams()

const [show, setShow] = useState(false)
 
  return (
    <> 
    <BrowserRouter>
     <Nav/>
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
