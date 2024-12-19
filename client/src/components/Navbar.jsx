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
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active-nav-link" : undefined
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active-nav-link" : undefined
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "active-nav-link" : undefined
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active-nav-link" : undefined
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    isActive ? "active-nav-link" : undefined
                  }
                >
                  Admin-Panel
                </NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink
                    to="/logout"
                    className={({ isActive }) =>
                      isActive ? "active-nav-link" : undefined
                    }
                  >
                    Logout
                  </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        isActive ? "active-nav-link" : undefined
                      }
                    >
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? "active-nav-link" : undefined
                      }
                    >
                      Login
                    </NavLink>
                  </li>
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
