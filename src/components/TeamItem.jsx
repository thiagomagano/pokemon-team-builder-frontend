import useTeam from "../hooks/useTeam";

export default function TeamItem({ pokemon, position }) {
  const { team, setTeam } = useTeam();
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
        <img
          src="../../public/pokeball-placeholder.gif"
          alt=""
          className="pokemon-img"
        />
      </div>
      <div className="pokemon-info">
        <p className="info-placeholder">[Escola um Pokemon Abaixo]</p>
      </div>
    </li>
  );
}
