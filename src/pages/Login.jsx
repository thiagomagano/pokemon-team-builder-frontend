import { useEffect, useState, useRef } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

import api from "../services/api";
import toast from "react-hot-toast";

const LOGIN_URL = "/login";

export default function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const errRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  async function handleLogin(e) {
    e.preventDefault();
    const toastId = toast.loading("Performing login...", {
      duration: 5000,
    });

    try {
      //Implementar a lógica do Password
      const response = await api.post(LOGIN_URL, { email, password });

      const id = response?.data?.id;
      const name = response?.data?.name;

      setAuth({ email, id, name });
      localStorage.setItem("u", JSON.stringify({ email, id, name }));

      setEmail("");
      setPassword("");

      toast.dismiss(toastId);
      toast.success(`Welcome ${name}! 🙋🏻‍♂️`);

      navigate("/home", { replace: true });
    } catch (err) {
      toast.dismiss(toastId);
      toast.error("Login Failed");
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
    <section className="login-container">
      <div className="form-container">
        <form onSubmit={handleLogin} className="form-enter">
          <img src="/logo.png" alt="Pokemon Team Builder" />
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"}>
            {errMsg}
          </p>
          <input
            ref={emailRef}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn" type="submit">
            Sign In
          </button>

          <Link className="back-link" to="/register">
            Need an Account? Sign Up
          </Link>
          <Link className="back-link" to="/">
            Continue without login
          </Link>
        </form>
      </div>
      <div className="form-hero-image">
        <img src="/hero.png" alt="The 3 starters Pokemons happy" />
      </div>
    </section>
  );
}
