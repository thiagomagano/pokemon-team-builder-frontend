import './card.css'

function Card({ pokemon }) {
  return (
    <li className='card'>
      <img src={pokemon.avatarUrl} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <ul className='types'>
        {pokemon.types.map((t, index) => {
          return <li key={index}>{t.name}</li>
        })}
      </ul>
    </li>
  )
}

export default Card