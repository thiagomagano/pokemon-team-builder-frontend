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
      <div className="logo">
        <img src="../../public/navlogo.png" alt="Pokemon-TemBuilder" />
        <span>Pokemon-TemBuilder</span>
      </div>
      <div className="nav-group">
        <p>Olá {auth.name}!</p>
        <button className="btn btn-logout" onClick={handleLogout}>
          Logout
        </button>
        <button className="btn btn-partys">
          <Link to="/partys">Partys</Link>
        </button>
        <button className="btn btn-profile">
          <Link to="/profile">Profile</Link>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
