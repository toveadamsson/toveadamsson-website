import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ---------
import Intro from "./components/Intro";
import Projects from "./components/Projects";
// import Contact from "./components/ContactForm";
import Contact from "./components/ContactForm"
// import Footer from "./components/Footer";
import About from "./components/About";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
