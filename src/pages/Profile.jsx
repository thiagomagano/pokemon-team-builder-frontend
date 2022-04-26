import { useContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import api from "../services/api";

export default function Profile() {
  const { auth, setAuth } = useAuth();
  const [userData, setUserData] = useState(null);
  const [party, setParty] = useState("");

  async function getUserData() {
    const response = await api.get("/party", {
      params: {
        userId: auth.id,
      },
    });
    const data = await response?.data;
    setUserData(data);
  }

  useEffect(() => {
    getUserData().then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div>Seja Bem Vindo! @{auth.name}</div>
    </div>
  );
}
