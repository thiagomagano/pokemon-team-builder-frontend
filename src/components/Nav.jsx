import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

function Nav() {
  const { auth, setAuth } = useAuth();
  function handleLogout() {
    setAuth("");
    localStorage.removeItem("u");
  }

  return (
    <nav>
      <p>Welcome, {auth.name}!</p>
      <div className="logo">
        <img src="/logo.png" alt="Pokemon-TemBuilder" />
        <span>Pokemon-TemBuilder</span>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/profile">Builder</Link>
          </li>
          <li>
            <Link to="/partys">Partys</Link>
          </li>
          <li>
            <a className="btn-logout" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
