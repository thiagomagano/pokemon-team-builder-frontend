import useTeam from "../hooks/useTeam";
import { useEffect } from "react";
import typechart from "../utils/typechart";
import toast from "react-hot-toast";

export default function TeamItem({ pokemon, inBuilder }) {
  const { team, setTeam } = useTeam();

  function getDamageRelation(type, relation) {
    const relations = typechart[type][relation];

    return `${relations.join(" | ")}`;
  }

  function getPokedexImage(id) {
    const paddedId = ("00" + id).slice(-3);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
  }

  useEffect(() => {}, [pokemon]);

  return pokemon ? (
    <li
      className={
        pokemon.types.length === 1
          ? `team-item ${pokemon.types[0].name}`
          : `team-item ${pokemon.types[0].name} ${pokemon.types[0].name}-${pokemon.types[1].name}`
      }
    >
      <div className="pokemon-avatar">
        <p className="pokemon-name">#{`${pokemon.id}`}</p>
        <img
          className="pokemon-img"
          src={getPokedexImage(pokemon.id) || pokemon.avatarUrl}
          alt={`Sprite for pokemon: ${pokemon.name}`}
        />
        <p className="pokemon-name">{`${pokemon.name}`}</p>
      </div>

      <div className="pokemon-info">
        <ul className="pokemon-types">
          {pokemon.types.map((t, index) => {
            return (
              <li key={index} className={`pokemon-types-item ${t.name}-c`}>
                {t.name}
              </li>
            );
          })}
        </ul>
        <ul className="type-chart">
          <li>
            <strong>Super-effective against</strong>:
            <p>{getDamageRelation(pokemon.types[0].name, "strengths")}</p>
          </li>
          <li>
            <strong>Not-very-effective against</strong>:
            <p>{getDamageRelation(pokemon.types[0].name, "weaknesses")}</p>
          </li>
          <li>
            <strong>No-effect against</strong>:
            <p>{getDamageRelation(pokemon.types[0].name, "immunes")}</p>
          </li>
        </ul>
      </div>
      {inBuilder && (
        <span
          className="close-icon"
          onClick={() => {
            setTeam(team.filter((p) => p.name !== pokemon.name));
            toast.success(`${pokemon.name} has been removed from your team`);
          }}
        >
          ❌
        </span>
      )}
    </li>
  ) : (
    <li className="team-item with-border">
      <div className="pokemon-avatar">
        <img
          src="/pokeball-placeholder.gif"
          alt="pokeball placeholder"
          className="pokemon-img"
        />
      </div>
    </li>
  );
}
