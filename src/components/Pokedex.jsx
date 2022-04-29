import { useEffect, useState } from "react";
import useTeam from "../hooks/useTeam";
import api from "../services/api";

export default function Pokedex() {
  const [types, setTypes] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [checkbox, setCheckbox] = useState("");
  const [searchName, setSearchName] = useState("");

  async function getAllTypes() {
    const response = await api.get("/types");
    const data = await response?.data;
    setTypes(data);
  }

  async function getAllPokemons() {
    const response = await api.get("/pokemons");
    const data = await response?.data;
    setPokemons(data);
  }

  // function handleFilters(pokemons) {
  //   return pokemons.filter(
  //     (pokemon) => pokemon.name.toLowerCase().indexOf(searchName) > -1
  //   );
  // }

  useEffect(() => {
    getAllTypes();
    getAllPokemons();
  }, []);

  return (
    <div className="pokedex">
      <div className="pokedex-title">
        <h2>Pokedex</h2>
      </div>

      <div className="filter">
        <aside>
          <form>
            <fieldset>
              <legend>Types</legend>
              {types &&
                types.map((type, index) => {
                  return <TypeCheckBox type={type} key={index} />;
                })}
            </fieldset>
          </form>
        </aside>

        <ul className="pokedex-list">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <PokemonCard pokemon={pokemon} key={index} />;
            })}
        </ul>
      </div>
    </div>
  );
}

function TypeCheckBox({ type }) {
  return (
    <div className="checkbox-item">
      <input
        className="filter-checkbox"
        type="checkbox"
        name="type"
        id={type.name}
        value={type.name}
      />
      <label htmlFor={type.name}> {type.name}</label>
    </div>
  );
}

function PokemonCard({ pokemon }) {
  const { team, setTeam } = useTeam();

  function insertIntoParty(pokemon) {
    team.length < 6 ? setTeam([...team, pokemon]) : console.log("team is full");
  }

  return (
    <li className="pokemon-card" onClick={() => insertIntoParty(pokemon)}>
      <ul>
        <li className="card-image-container">
          <img
            className="card-image"
            src={pokemon.avatarUrl}
            alt={pokemon.name}
          />
        </li>
        <li className="description-id">#{pokemon.id}</li>
        <li className="description-name">{pokemon.name}</li>
      </ul>
    </li>
  );
}
