import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import "./App.css";
//import components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App:React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
