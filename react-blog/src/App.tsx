import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
//import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MouseTrailer from "./components/MouseTrailer";
//import pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import Blog from "./pages/Blog";
import New from "./pages/New";
import Edit from "./pages/Edit";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <MouseTrailer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/New" element={<New />} />
          <Route path="/Edit/:id" element={<Edit />} />
          <Route path="/Blog/:id" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
