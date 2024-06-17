import { useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
