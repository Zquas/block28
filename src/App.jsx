import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue";
import Red from "./components/Red";
import Home from "./components/Home";
import './App.css'

function App() {


  return (
    <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link>
        <Link to="/">Home</Link> <br></br>
          <Link to="/blue">Blue</Link> <br></br>
          <Link to="/red">Red</Link>
        </Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blue" element={<Blue/>} />
          <Route path="/red" element={<Red/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
