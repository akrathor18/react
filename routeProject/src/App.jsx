import { useState } from "react";
import { BrowserRouter, Routes, Route, useParams, Link } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import { HeroOne } from "./components/Hero";
import { Footer } from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import data from './assets/data'
function App() {
  const [show, setShow] = useState(false);

  return (
    <>

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HeroOne />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

const UserProfile = () => {
  const { id } = useParams();

  // Convert id from params to a number since your data IDs are numbers
  const userId = parseInt(id, 10);

  function findId(user) {
    return user.id === userId;
  }

  const newdata = data.filter(findId);
  console.log(newdata);
  return (
    <>
      <Link to="/user/1" style={{ margin: 10 }}>1</Link>
      <Link to="/user/2" style={{ margin: 10 }}>2</Link>
      <Link to="/user/3" style={{ margin: 10 }}>3</Link>
      <Link to="/user/4" style={{ margin: 10 }}>4</Link>
      <Link to="/user/5" style={{ margin: 10 }}>5</Link>
      <Link to="/user/6" style={{ margin: 10 }}>6</Link>
      <Link to="/user/7" style={{ margin: 10 }}>7</Link>

      {newdata.length > 0 ? (
        <div>
          <h2>User ID: {id}</h2>
          <p>Name: {newdata[0].userName}</p>
          {/* <p>Age: {newdata[0].age}</p> */}
        </div>
      ) : (
        <h2>No user found with ID: {id}</h2>
      )}
    </>
  );
};

export default App;
