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
      <img src="/logo.png" alt="Pokemon-TemBuilder" />

      <ul className="nav-links">
        {!auth?.id ? (
          <li>
            <Link className="btn-logout" to="/login">
              👤 Login
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/home">🛠 Builder</Link>
            </li>
            <li>
              <Link to="/teams">👯‍♂️ Teams </Link>
            </li>
            <li>
              <Link className="btn-logout" to="/login" onClick={handleLogout}>
                ↪ Logout
              </Link>
            </li>
            <li>{auth?.name ? auth.name : "there"} 🙋🏻‍♂️</li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
