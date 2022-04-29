import useTeam from "../hooks/useTeam";
import axios from "axios";
import { useEffect } from "react";

const pokeapi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/type/",
});

const API_ENDPOINT = "https://pokeapi.co/api/v2/type";

export default function TeamItem({ pokemon, position }) {
  const { team, setTeam } = useTeam();

  async function getDamageRelation(type) {
    const response = await pokeapi.get(type.name);
    const data = response?.data;

    const veryGoodAgaist = data.damage_relations.double_damage_to[0]?.name;
    const veryBadAgaist = data.damage_relations.double_damage_from[0]?.name;

    const goodAgaist = data.damage_relations.half_damage_to[0]?.name;
    const badAgaist = data.damage_relations.half_damage_from[0]?.name;

    const superBadAgaist = data.damage_relations.no_damage_to[0]?.name;
    const superGoodAgaist = data.damage_relations.no_damage_from[0]?.name;

    console.log(`Muito Bom Contra: ${veryGoodAgaist || "xxxxxxxx"}`);
    console.log(`Muito Ruim Contra: ${veryBadAgaist || "xxxxxxxx"}`);
    console.log(`Bom Contra: ${badAgaist || "xxxxxxxx"}`);
    console.log(`Ruim Contra: ${goodAgaist || "xxxxxxxx"}`);
    console.log(`Não sofre dano: ${superGoodAgaist || "xxxxxxxx"}`);
    console.log(`Não dá dano: ${superBadAgaist || "xxxxxxxx"}`);
  }

  useEffect(() => {
    if (pokemon) getDamageRelation(pokemon.types[0]);
  }, [pokemon]);

  return pokemon ? (
    <li className="team-item">
      <div className="pokemon-avatar">
        <img src={pokemon.avatarUrl} alt="" className="pokemon-img" />
      </div>

      <ul className="pokemon-info">
        <li className="pokemon-index">#{pokemon.id}</li>
        <li className="pokemon-name">
          <h2>{pokemon.name}</h2>
        </li>
        <li>
          <ul className="pokemon-types">
            {pokemon.types.map((t, index) => {
              return (
                <li key={index} className="pokemon-types-item">
                  {t.name}
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
      <i
        className="close-icon"
        onClick={() => setTeam(team.filter((p) => p.name !== pokemon.name))}
      >
        x
      </i>
    </li>
  ) : (
    <li className="team-item">
      <div className="pokemon-avatar">
        <img src="/pokeball-placeholder.gif" alt="" className="pokemon-img" />
      </div>
      <div className="pokemon-info">
        <p className="info-placeholder">[Escola um Pokemon Abaixo]</p>
      </div>
    </li>
  );
}
