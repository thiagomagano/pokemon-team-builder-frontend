import { useRef } from "react";
import toast from "react-hot-toast";
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

    if (auth?.id) {
      const newTeam = {
        title: teamTitleRef.current.value || "My Team",
        pokemonList: team.map((t) => t.id),
        userId: auth.id,
      };

      toast.promise(api.post("/team", newTeam), {
        loading: "Saving...",
        success: <b>Team saved! 💾</b>,
        error: <b>Could not save. ☹</b>,
      });
      cleanTeam();
    } else {
      toast.error(
        "You are not logged, cannot save the team ☹. Please login and try again!"
      );
    }
  }

  function cleanTeam(e = null) {
    if (e) {
      e.preventDefault();
      toast.success("Your team has been emptied", {
        icon: "🧹",
      });
    }

    setTeam([]);

    teamTitleRef.current.value = "";
  }

  return (
    <section className="team">
      {auth?.id && (
        <form className="team-form">
          <input ref={teamTitleRef} type="text" placeholder="Nome do Time" />
          <button className="btn-save" onClick={(e) => saveTeam(e)}>
            Save Team
          </button>
          <button className="btn-clean" onClick={(e) => cleanTeam(e)}>
            Clean Team
          </button>
        </form>
      )}
      <ul className="all-team">
        <TeamItem pokemon={team[0] || null} inBuilder={true} />
        <TeamItem pokemon={team[1] || null} inBuilder={true} />
        <TeamItem pokemon={team[2] || null} inBuilder={true} />
        <TeamItem pokemon={team[3] || null} inBuilder={true} />
        <TeamItem pokemon={team[4] || null} inBuilder={true} />
        <TeamItem pokemon={team[5] || null} inBuilder={true} />
      </ul>
    </section>
  );
}
