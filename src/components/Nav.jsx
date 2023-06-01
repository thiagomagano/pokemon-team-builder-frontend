import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Nav() {
  const { auth, setAuth } = useAuth();
  function handleLogout() {
    setAuth("");
    localStorage.removeItem("u");
  }

  return (
    <nav>
      <p>Hey, {auth.name} 🙋🏻‍♂️</p>

      <img src="/logo.png" alt="Pokemon-TemBuilder" />

      <ul className="nav-links">
        <li>
          <Link to="/profile">🛠 Builder</Link>
        </li>
        <li>
          <Link to="/teams">👯‍♂️ Teams </Link>
        </li>
        <li>
          <a className="btn-logout" onClick={handleLogout}>
            👋🏼 Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
