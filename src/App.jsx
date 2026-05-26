import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Project Pages (existing)
import Calculator from "./components/Calculator";
import Counter from "./components/Counter";
import Weather from "./components/Weather";
import Palindrome from "./components/Palindrome";

// 👉 NEW imports (sirf add kiye hain)
import Login from "./components/Login";
import Registration from "./components/Registration";
import Stopwatch from "./components/Stopwatch";
import Toggle from "./components/Toggle";
import Map from "./components/Map";
import Armstrong from "./components/Armstrong";


// 👉 Home Page (same as before)
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>

        {/* Main Portfolio */}
        <Route path="/" element={<Home />} />

        {/* Existing Project Pages */}
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/palindrome" element={<Palindrome />} />

        {/* 👉 NEW Routes (sirf add kiye hain) */}
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/toggle" element={<Toggle />} />
        <Route path="/map" element={<Map />} />
        <Route path="/armstrong" element={<Armstrong />} />

      </Routes>
    </Router>
  );
}

export default App;