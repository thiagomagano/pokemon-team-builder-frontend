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
        <button className="btn logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Nav;
