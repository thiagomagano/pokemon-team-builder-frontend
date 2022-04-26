import { useContext, useEffect, useState } from "react";
//import UserContext from "../context/AuthProvider";
import api from "../services/api";

export default function Profile() {
  //const { user, setUser } = useContext(UserContext);
  const [party, setParty] = useState("");

  async function getTeams() {
    const response = await api.get("/party", {
      params: {
        userId: user.id,
      },
    });
    if (response) return response.data[0];
  }

  useEffect(() => {
    const resp = getTeams();
    setParty(resp);
  }, []);

  return (
    <div>
      <div>
        Seja Bem Vindo! @{user.name} seu id é {user.id}
      </div>
      <div>
        <h2>Party</h2>
      </div>
    </div>
  );
}
