import { useState } from "react";
// import { BrowserRouter, Router, Routers } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import { HeroOne } from "./components/Hero";
import { Footer } from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
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
