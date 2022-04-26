import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();

    const newUser = {
      name,
      email,
    };

    createUser(newUser);

    navigate("/login");
  }

  async function createUser(user) {
    const response = await api.post("/signup", user);
    localStorage.setItem("u", response.data);

    console.log(localStorage.getItem("u"));
    alert("Usuário Criado com sucesso");
  }

  return (
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
  );
}
