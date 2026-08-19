import { useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <a href="#home" className="logo" onClick={closeMenu}>
          JG<span>.</span>
        </a>

        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a
            href="#contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Let's Talk
            <FiArrowUpRight />
          </a>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;