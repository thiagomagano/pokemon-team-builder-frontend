import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.get("/login", {
        params: {
          email: email,
        },
      });
      const data = response.data;

      if (response.status === 200) {
        setUser(data);
        localStorage.setItem("u", JSON.stringify(response.data));
        console.log(localStorage.getItem("u"));

        alert(`Login Realizado com Sucesso! seja bem vindo ${user.name}`);

        navigate("/profile");
      }
    } catch (err) {
      console.log(err);
      alert("Email Não Encontrado!");
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
