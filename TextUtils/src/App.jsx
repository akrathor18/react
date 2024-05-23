import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav.jsx";
import TextFrom from "./components/TextFrom.jsx";
import Alter from "./components/Alter.jsx";
import Contact from "./components/Contact.jsx";
function App() {
  return (
  <>
      <BrowserRouter>
      <Nav/>
        <Routes>
        <Route path="/contact" element={<Contact   />}/>
        <Route path="/home" element={<TextFrom/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
