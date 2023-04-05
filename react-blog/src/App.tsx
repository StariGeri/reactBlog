import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import "./App.css";
//import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
        <Footer/>
      </div>
    </Router>
  );
}
export default App;
