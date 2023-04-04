import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <section className = "heroSection">
        <Navbar />
        <div className="curve"></div>
      </section>
    </div>
  );
}

export default App;
