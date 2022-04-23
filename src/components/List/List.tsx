import Card from '../Card/Card'
import './list.css'

function List({ pokemons }) {
  return (
    <ul className='list'>
      {pokemons && pokemons.map((p, index) => {
        return <Card key={index} pokemon={p} />
      })}
    </ul>
  )
}

export default List