import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import api from "../services/api";

import Nav from "../components/Nav";
import TeamItem from "../components/TeamItem";
import Loader from "../components/Loader";

export default function Teams() {
  const { auth } = useAuth();
  const [teams, setTeams] = useState([]);
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  async function getAllTeamsByUser(user) {
    setLoading(true);
    const userLocal = JSON.parse(localStorage.getItem("u"));
    setUser();
    const response = await api.get("/team", {
      params: {
        userId: user.id || userLocal.id,
      },
    });
    const data = await response?.data;
    setTeams(data);
    setLoading(false);
  }

  useEffect(() => {
    getAllTeamsByUser(auth);
  }, []);

  return (
    <div>
      <Nav />
      <ul className="teams">
        {teams &&
          teams.map((team, index) => {
            return (
              <li key={index} className="teams-item">
                <h2>
                  #{index + 1} - {team.title}
                </h2>

                <ul className="pokemons-team">
                  {team.pokemons.map((poke, index) => (
                    <TeamItem key={index} pokemon={poke} inBuilder={false} />
                  ))}
                </ul>
              </li>
            );
          })}
      </ul>
      <Loader show={loading} />
    </div>
  );
}
