import "./NavBar.css";

export default function NavBar() {
  return (
    <header>
      <div className="top-bar">
        <span>California • +123 456 7890</span>
        <div className="top-buttons">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-left">
          <div className="logo-circle"></div>
          <span className="brand">sea</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Trending</a>
          </li>
          <li>
            <a href="/">Deals</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
        <button className="sign-in">Sign In</button>
      </nav>
    </header>
  );
}
