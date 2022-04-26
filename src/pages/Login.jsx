import { useContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    let data = null;

    try {
      const response = await api.get("/login", {
        params: {
          email: email,
        },
      });
      data = await response.data;
    } catch (err) {
      console.log(err);
      alert("Email Não Encontrado!");
    }
    if (data) {
      setAuth(data);
      localStorage.setItem("u", JSON.stringify(data));

      const newUser = JSON.parse(localStorage.getItem("u"));

      alert(`Login Realizado com Sucesso! Seja bem vindo ${newUser.name}`);
      console.log(auth);
      navigate("/profile");
    }
  }

  return (
    <main>
      <form onSubmit={handleLogin}>
        <h2>Faça Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </main>
  );
}
