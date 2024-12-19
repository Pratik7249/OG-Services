import { NavLink } from "react-router-dom";
import { useContext } from "react"; // Import useContext here
import "./Navbar.css";
import { useAuth } from "../store/auth";
import { DarkModeContext } from "../context/DarkModeContext";
import { FaSun, FaMoon } from "react-icons/fa"; // Import the sun/moon icons

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext); // Use useContext here

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <a href="/">OG-SERVICES</a>
          </div>
          <nav>
            <ul>
              <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {isDarkMode ? <FaSun /> : <FaMoon />} {/* Toggle between sun and moon icons */}
              </button>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              {isLoggedIn ? (
                <li><NavLink to="/logout">Logout</NavLink></li>
              ) : (
                <>
                  <li><NavLink to="/register">Register</NavLink></li>
                  <li><NavLink to="/login">Login</NavLink></li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
