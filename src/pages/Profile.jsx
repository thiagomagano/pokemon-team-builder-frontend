import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import api from "../services/api";

import { TeamProvider } from "../context/TeamProvider";

import Nav from "../components/Nav";
import Team from "../components/Team";
import Pokedex from "../components/Pokedex";

export default function Profile() {
  const { auth, setAuth } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("u")));
  }, []);

  useEffect(() => {
    async function getUserData() {
      const userLocal = JSON.parse(localStorage.getItem("u"));
      const response = await api.get("/party", {
        params: {
          userId: auth.id || userLocal.id,
        },
      });
      const data = await response?.data;

      setUserData(data);
      return response;
    }

    getUserData();
  }, []);

  return (
    <>
      <Nav />
      <main className="container">
        <TeamProvider>
          <Team />
          <Pokedex />
        </TeamProvider>
      </main>
    </>
  );
}
