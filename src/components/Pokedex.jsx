import { useEffect, useState } from "react";
import useTeam from "../hooks/useTeam";
import api from "../services/api";

export default function Pokedex() {
  const [types, setTypes] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterTypes, setFilterTypes] = useState([]);
  const [pokemonsFilter, setPokemonsFilter] = useState([]);

  // let filterTypes = [];
  // let pokemonsFilter = [];

  async function getAllTypes() {
    const response = await api.get("/types");
    const data = await response?.data;
    setTypes(data);
  }

  async function getAllPokemons() {
    const response = await api.get("/pokemons");
    const data = await response?.data;
    setPokemons(data);
    setPokemonsFilter(data);
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    getAllTypes();
    getAllPokemons();
  }, []);

  useEffect(() => {
    const newPokemons = setFilterPokemons(pokemons);
    setPokemonsFilter(newPokemons);
    if (filterTypes.length === 0) {
      setPokemonsFilter(pokemons);
    }
  }, [filterTypes]);

  function setFilterPokemons(pokemons) {
    if (pokemons) {
      const newPokemons = pokemons.filter((p) => {
        if (p.types.length > 1)
          return (
            filterTypes.indexOf(p.types[0].name) > -1 ||
            filterTypes.indexOf(p.types[1].name) > -1
          );
        return filterTypes.indexOf(p.types[0].name) > -1;
      });

      return newPokemons;
    }
  }

  function handleFilters(e) {
    const filter = e.target.value;

    if (e.target.checked) {
      setFilterTypes([...filterTypes, filter]);
    } else {
      setFilterTypes(filterTypes.filter((f) => f != filter));
    }
    console.log(filterTypes);
  }

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
                  return (
                    <TypeCheckBox
                      type={type}
                      key={index}
                      handleFilters={handleFilters}
                    />
                  );
                })}
            </fieldset>
          </form>
        </aside>

        <ul className="pokedex-list">
          {pokemonsFilter &&
            pokemonsFilter.map((pokemon, index) => {
              return <PokemonCard pokemon={pokemon} key={index} />;
            })}
          {isLoading && <li>Loading...</li>}
        </ul>
      </div>
    </div>
  );
}

function TypeCheckBox({ type, handleFilters }) {
  return (
    <div className="checkbox-item">
      <input
        className="filter-checkbox"
        type="checkbox"
        name="type"
        id={type.name}
        value={type.name}
        onChange={(e) => handleFilters(e)}
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
