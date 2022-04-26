const pokemon = {
  id: 1,
  name: "bulbasaur",
  avatarUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  types: [
    {
      id: 11,
      name: "grass",
      url: "https://pokeapi.co/api/v2/type/12/",
    },
    {
      id: 3,
      name: "poison",
      url: "https://pokeapi.co/api/v2/type/4/",
    },
  ],
};

export default function Team() {
  return (
    <section className="team">
      <ul className="all-team">
        <TeamItem position={1} pokemon={pokemon} />
        <TeamItem position={2} />
        <TeamItem position={3} />
        <TeamItem position={4} />
        <TeamItem position={5} />
        <TeamItem position={6} />
      </ul>
    </section>
  );
}

function TeamItem({ pokemon, position }) {
  return pokemon ? (
    <li className="team-item">
      {/* <span>{position}</span> */}
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
            {pokemon.types.map((t) => {
              return <li className="pokemon-types-item">{t.name}</li>;
            })}
          </ul>
        </li>
      </ul>
      <i className="close-icon">x</i>
    </li>
  ) : (
    <li className="team-item">
      {/* <span>{position}</span> */}
      <div className="pokemon-avatar">
        <img
          src="../../public/pokeball-placeholder.gif"
          alt=""
          className="pokemon-img"
        />
      </div>
      <ul className="pokemon-info">
        <li className="pokemon-index">#0</li>
        <li className="pokemon-name">Name</li>
        <li className="pokemon-types">Types 1 | Type2</li>
      </ul>
      <i className="close-icon">x</i>
    </li>
  );
}
