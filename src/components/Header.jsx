import { useState } from "react";
import logo from "../assets/polished-by-leydi-logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const isHomePage = window.location.pathname === "/";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <a
        href="#top"
        className="site-logo"
        onClick={closeMenu}
        aria-label="Polished by Leydi home"
      >
        <img
          src={logo}
          alt="Polished by Leydi"
        />
      </a>

      <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>

        {!isHomePage && (
          <a href="/" onClick={closeMenu}>
            Home
          </a>
        )}

        <a href="/about" onClick={closeMenu}>
          About
        </a>

        <a href="/services">Services</a>

        <a href="/gallery" onClick={closeMenu}>
          Gallery
        </a>

        <a href="/about#reviews" onClick={closeMenu}>
          Reviews
        </a>

        <a href="/contact" onClick={closeMenu}>
          Contact
        </a>
      </nav>

      <a href="/contact" className="header-book">
        Book Now
        <span>↗</span>
      </a>

      <button
        className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

export default Header;