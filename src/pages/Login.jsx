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

  const [email, setEmail] = useState("");
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
      const response = await api.post(LOGIN_URL, { email });

      const id = response?.data?.id;
      const name = response?.data?.name;

      setAuth({ email, id, name });
      localStorage.setItem("u", JSON.stringify({ email, id, name }));

      setEmail("");

      toast.dismiss(toastId);
      toast.success(`Welcome ${name}! 🙋🏻‍♂️`);

      navigate("/profile", { replace: true });
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
    <div className="login-container">
      <section className="form-container">
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
          <button className="btn" type="submit">
            Sign In
          </button>

          <button className="btn">
            <Link className="back-link" to="/profile">
              Enter without login
            </Link>
          </button>

          <Link className="back-link" to="/register">
            Need an Account? Sign Up
          </Link>
        </form>
      </section>
      <img
        className="hero"
        src="/hero.png"
        alt="The 3 starter Pokemons happy"
      />
    </div>
  );
}
