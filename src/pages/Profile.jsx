import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import api from "../services/api";

import { TeamProvider } from "../context/TeamProvider";

import Nav from "../components/Nav";
import Team from "../components/Team";
import Pokedex from "../components/Pokedex";

export default function Profile() {
  const { auth, setAuth } = useAuth();
  const [_, setUserData] = useState(null);

  async function getUserData() {
    const userLocal = JSON.parse(localStorage.getItem("u"));
    const response = await api.get("/team", {
      params: {
        userId: auth?.id || userLocal?.id,
      },
    });
    const data = await response?.data;

    setUserData(data);
    return response;
  }

  useEffect(() => {
    if (localStorage.getItem("u") !== undefined)
      setAuth(JSON.parse(localStorage.getItem("u")));
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
