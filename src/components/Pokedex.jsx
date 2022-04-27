import { useEffect, useState } from "react";
import api from "../services/api";

export default function Pokedex() {
  const [types, setTypes] = useState("");
  const [pokemons, setPokemons] = useState("");

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
        <div className="filter-types">
          <h3>Types</h3>
          <div className="checkbox-group">
            {types &&
              types.map((type) => {
                return <TypeCheckBox type={type} />;
              })}
          </div>
        </div>
        <div className="filter name">
          <input type="text" placeholder="Pesquise Por Nome" />
        </div>
        <button>Filtrar</button>
      </div>

      <ul className="pokedex-list">
        {pokemons &&
          pokemons.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} />;
          })}
      </ul>
    </div>
  );
}

function TypeCheckBox({ type }) {
  return (
    <div className="checkbox-item">
      <input
        className="filter-checkbox"
        type="checkbox"
        name={type.name}
        id={type.name}
        value={type.name}
      />
      <label htmlFor={type.name}> {type.name}</label>
    </div>
  );
}

function PokemonCard({ pokemon }) {
  return (
    <li className="pokemon-card">
      <ul>
        <li>
          <img
            className="card-image"
            src={pokemon.avatarUrl}
            alt={pokemon.name}
          />
        </li>
        <li>#{pokemon.id}</li>
        <li>{pokemon.name}</li>
      </ul>
    </li>
  );
}
