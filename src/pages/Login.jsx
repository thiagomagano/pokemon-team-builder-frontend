import { useContext, useEffect, useState, useRef } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

import api from "../services/api";

const LOGIN_URL = "/login";

export default function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const errRef = useRef();
  const emailRef = useRef();

  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post(LOGIN_URL, { email });

      console.log(JSON.stringify(response?.data));

      const id = response?.data?.id;
      const name = response?.data?.name;

      setAuth({ email, id, name });
      localStorage.setItem("u", JSON.stringify({ email, id, name }));

      setEmail("");

      navigate("/profile", { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing E-mail");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
  }

  return (
    <main>
      <div className="login-container">
        <section className="form-container">
          <img src="/logo.png" alt="Pokemon Team Builder" />
          <form onSubmit={handleLogin}>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
              {errMsg}
            </p>
            <h1>Faça seu Login</h1>
            <input
              ref={emailRef}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="btn" type="submit">
              Sign In
            </button>

            <Link className="back-link" to="/register">
              Need an Account? Sign Up
            </Link>
          </form>
        </section>
        <img className="hero" src="/hero.png" alt="Os 3 Pokemons Iniciais" />
      </div>
    </main>
  );
}
