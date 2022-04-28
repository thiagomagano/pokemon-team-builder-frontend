import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import api from "../services/api";

import Nav from "../components/Nav";
import TeamItem from "../components/TeamItem";

export default function Partys() {
  const { auth } = useAuth();
  const [partys, setPartys] = useState([]);
  const [user, setUser] = useState("");

  async function getAllPartysByUser(user) {
    const userLocal = JSON.parse(localStorage.getItem("u"));
    setUser();
    const response = await api.get("/party", {
      params: {
        userId: user.id || userLocal.id,
      },
    });
    const data = await response?.data;
    setPartys(data);
  }

  useEffect(() => {
    getAllPartysByUser(auth);
  }, []);

  return (
    <div>
      <Nav />
      <ul class="partys">
        {partys &&
          partys.map((party, index) => {
            return (
              <li class="partys-item">
                <li>
                  <h2>
                    #{index + 1} - {party.title}
                  </h2>
                </li>
                <li class="pokemons-party">
                  {party.pokemons.map((poke) => (
                    <TeamItem pokemon={poke} />
                  ))}
                </li>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
