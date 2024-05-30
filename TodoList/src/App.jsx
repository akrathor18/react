import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Nav from "./components/Nav";
import TodoForm from "./components/TodoForm";
function App() {
  
  return (
    <>
    <Nav/>
    <TodoForm/>
    </>
  );
}

export default App;
