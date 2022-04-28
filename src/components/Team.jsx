import { useRef } from "react";
import useAuth from "../hooks/useAuth";
import useTeam from "../hooks/useTeam";
import api from "../services/api";
import TeamItem from "./TeamItem";

export default function Team() {
  const { team, setTeam } = useTeam();
  const { auth } = useAuth();

  const teamTitleRef = useRef();

  async function saveTeam(e) {
    e.preventDefault();
    const newParty = {
      title: teamTitleRef.current.value || "Minha Party",
      pokemonList: team.map((t) => t.id),
      userId: auth.id,
    };

    console.log(newParty);

    const response = await api.post("/party", newParty);
    const data = console.log(response.data);

    teamTitleRef.current.value = "";
  }

  return (
    <section className="team">
      <form className="team-form">
        <input ref={teamTitleRef} type="text" placeholder="Nome do Time" />
        <button className="btn-save" onClick={(e) => saveTeam(e)}>
          Save Team
        </button>
        <button
          className="btn-clean"
          onClick={(e) => {
            e.preventDefault();
            setTeam([]);
          }}
        >
          Clean Team
        </button>
      </form>
      <ul className="all-team">
        <TeamItem position={1} pokemon={team[0] || null} />
        <TeamItem position={2} pokemon={team[1] || null} />
        <TeamItem position={3} pokemon={team[2] || null} />
        <TeamItem position={4} pokemon={team[3] || null} />
        <TeamItem position={5} pokemon={team[4] || null} />
        <TeamItem position={6} pokemon={team[5] || null} />
      </ul>
    </section>
  );
}
