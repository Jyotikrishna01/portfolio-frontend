import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import AdminProjects from "./components/AdminProjects";
import Services from "./components/Services";

import "./App.css";

function PortfolioHome() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Services />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioHome />} />

        <Route
          path="/admin/projects"
          element={<AdminProjects />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;