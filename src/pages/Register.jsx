import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

const REGISTER_URL = "/register";

export default function Register() {
  const errRef = useRef();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [sucess, setSucess] = useState(false);
  const [errMsg, setErrMsg] = useState("error!");

  async function handleRegister(e) {
    e.preventDefault();
    const toastId = toast.loading("Performing register...", {
      duration: 10000,
    });
    const newUser = {
      name,
      email,
    };

    try {
      const response = await api.post(REGISTER_URL, newUser);

      setSucess(true);
      toast.dismiss(toastId);
      toast.success(`Register is done`);

      setName("");
      setEmail("");
      navigate("/login", { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Email Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      toast.dismiss(toastId);
      toast.error(`${errMsg}`);
    }
  }

  return (
    <>
      {sucess ? (
        <main className="register-container">
          <div className="box">
            <h1>Sucess!</h1>
            <Link className="back-link" to="/login">
              Back to Login
            </Link>
          </div>
        </main>
      ) : (
        <main className="register-container">
          <div className="box">
            <img src="/logo.png" alt="Pokemon Team Builder" />
            <h1>Register</h1>
            <p>Login and start building your pokemon teams!</p>
            <form onSubmit={handleRegister} className="form-enter">
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
              <button className="btn btn-register" type="submit">
                Register
              </button>
              <Link className="back-link" to="/login">
                Back to Login
              </Link>
            </form>
          </div>
        </main>
      )}
    </>
  );
}
