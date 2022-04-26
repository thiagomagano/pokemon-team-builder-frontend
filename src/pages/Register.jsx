import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Register() {
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
      const response = await api.post("/signup", newUser);

      console.log(JSON.stringify(response?.data));

      setSucess(true);
      setName("");
      setEmail("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
    }
  }

  return (
    <>
      {sucess ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to="/login">Sign In</Link>
          </p>
        </section>
      ) : (
        <main>
          <form onSubmit={handleRegister}>
            <h2>Crie seu Usuário </h2>
            <input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Realizar Login</button>
          </form>
        </main>
      )}
    </>
  );
}
