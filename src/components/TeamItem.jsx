import useTeam from "../hooks/useTeam";
import axios from "axios";
import { useEffect } from "react";
import typechart from "../utils/typechart";

const pokeapi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/type/",
});

const API_ENDPOINT = "https://pokeapi.co/api/v2/type";

export default function TeamItem({ pokemon, position }) {
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

      <span
        className="close-icon"
        onClick={() => setTeam(team.filter((p) => p.name !== pokemon.name))}
      >
        ❌
      </span>
    </li>
  ) : (
    <li className="team-item with-border">
      <div className="pokemon-avatar">
        <img src="/pokeball-placeholder.gif" alt="" className="pokemon-img" />
      </div>
    </li>
  );
}
