import { useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <div className="bg-gradient-custom min-h-screen">
      <Router>
        <header id="root">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/works" element={<Works />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </header>
      </Router>
      <main>
        <article>
          <section id="hero-section">
            <h1>Hi...</h1>
            <h1>I'm Shana Adams</h1>
          </section>
          <section id="skills-experience" className="flex-container">
            <aside id="skills">Skills</aside>
            <div>
              <h2>Experience/Projects</h2>
            </div>
          </section>
        </article>
      </main>
      <footer>
        {/* <Contact /> */}
        <h2>footer</h2>
      </footer>
    </div>
  );
}

export default App;
