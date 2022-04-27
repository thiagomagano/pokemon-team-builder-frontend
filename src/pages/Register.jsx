import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

const REGISTER_URL = "/register";

export default function Register() {
  const errRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [sucess, setSucess] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    const newUser = {
      name,
      email,
    };

    try {
      const response = await api.post(REGISTER_URL, newUser);

      console.log(JSON.stringify(response?.data));

      setSucess(true);
      setName("");
      setEmail("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Email Taken");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  }

  return (
    <>
      {sucess ? (
        <main className="register-container">
          <div className="content">
            <h1>Sucess!</h1>
            <Link class="back-link" to="/login">
              Back to Login
            </Link>
          </div>
        </main>
      ) : (
        <main className="register-container">
          {/* <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p> */}
          <div className="content">
            <section>
              <img src="/logo.png" alt="Pokemon Team Builder" />
              <h1>Register</h1>
              <p>Login and start building your pokemon teams!</p>
            </section>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="E-mail @"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button class="btn btn-register" type="submit">
                Register
              </button>
              <Link class="back-link" to="/login">
                Back to Login
              </Link>
            </form>
          </div>
        </main>
      )}
    </>
  );
}
