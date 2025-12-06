import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthModal from "../AuthSignInAndSignUp/AuthModal";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsAuthenticated(false);
  };

  const handleModalClose = () => {
    setShowAuthModal(false);
  };

  return (
    <header>
      <div className="top-bar">
        <span>Berlin • +49 123 456 7890</span>
        <div className="top-buttons">
          <button>Browse</button>
          {isAuthenticated ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={() => setShowAuthModal(true)}>Login</button>
          )}
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-left">
          <div className="logo-circle"></div>
          <span className="brand">ShimmerSea Designs</span>
        </div>

        <button
          className={`menu-icon${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul
          id="primary-navigation"
          className={`nav-links ${menuOpen ? " active" : ""}`}
        >
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/trending" onClick={() => setMenuOpen(false)}>
              Trending
            </Link>
          </li>
          <li>
            <Link to="/deals" onClick={() => setMenuOpen(false)}>
              Deals
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      <AuthModal isOpen={showAuthModal} onClose={handleModalClose} />
    </header>
  );
}
