import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useTeam from "../hooks/useTeam";
import api from "../services/api";
import Loader from "./Loader";

export default function Pokedex() {
  const [types, setTypes] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterType, setFilterType] = useState("");
  const [pokemonsFilter, setPokemonsFilter] = useState([]);
  const [error, setError] = useState(null);

  async function getAllTypes() {
    try {
      const response = await api.get("/types");
      const data = await response?.data;
      setTypes(data);
    } catch (err) {
      console.error("Error loading types:", err);
      // Types error is not critical, so we don't set error state
    }
  }

  async function getAllPokemons() {
    try {
      setError(null);
      const response = await api.get("/pokemons");
      const data = await response?.data;
      setPokemons(data);
      setPokemonsFilter(data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error loading pokemons:", err);
      setError("Failed to load pokemons. Please try again.");
      setIsLoading(false);
      toast.error("Failed to load pokemons");
    }
  }

  useEffect(() => {
    setIsLoading(true);
    getAllTypes();
    getAllPokemons();
  }, []);

  useEffect(() => {
    if (filterType === "") {
      setPokemonsFilter(pokemons);
    } else {
      const newPokemons = setFilterPokemons(pokemons);
      setPokemonsFilter(newPokemons);
    }
  }, [filterType, pokemons]);

  function setFilterPokemons(pokemons) {
    if (pokemons) {
      const newPokemons = pokemons.filter((p) => {
        if (p.types.length > 1)
          return (
            p.types[0].name === filterType || p.types[1].name === filterType
          );
        return p.types[0].name === filterType;
      });

      return newPokemons;
    }
  }

  function handleFilter(e) {
    setFilterType(e.target.value);
  }

  return (
    <div className="pokedex">
      <div className="pokedex-title">
        <h2>Pokedex</h2>
      </div>

      <form>
        <fieldset>
          <legend>Filter</legend>
          <select
            className="filter-select"
            name="type"
            id="type-filter"
            value={filterType}
            onChange={handleFilter}
          >
            <option value="">All Types</option>
            {types &&
              types.map((type, index) => {
                return (
                  <option key={index} value={type.name}>
                    {type.name}
                  </option>
                );
              })}
          </select>
        </fieldset>
      </form>

      {error ? (
        <div className="pokedex-error">
          <p>{error}</p>
          <button onClick={() => {
            setIsLoading(true);
            getAllPokemons();
          }} className="retry-button">
            Try Again
          </button>
        </div>
      ) : (
        <ul className="pokedex-list">
          {pokemonsFilter &&
            pokemonsFilter.map((pokemon, index) => {
              return <PokemonCard pokemon={pokemon} key={index} />;
            })}
          {isLoading && <Loader show={isLoading} />}
        </ul>
      )}
    </div>
  );
}

function PokemonCard({ pokemon }) {
  const { team, setTeam } = useTeam();

  function insertIntoTeam(pokemon) {
    if (team.length < 6) {
      setTeam([...team, pokemon]);
      toast.success(`${pokemon.name}  has been added to your team`);
    } else {
      toast.error("Your team is already full");
    }
  }

  return (
    <li
      className="pokemon-card"
      onClick={() => {
        insertIntoTeam(pokemon);
      }}
    >
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
