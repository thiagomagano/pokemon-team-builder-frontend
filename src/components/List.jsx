import Card from "./Card";

function List({ pokemons }) {
  // const [pokemons, setPokemons] = useState([])
  // const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await api.get('/pokemons')
  //       setPokemons(response.data)

  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getData()

  // }, [])

  return (
    <ul className="list">
      {pokemons &&
        pokemons.map((p, index) => {
          return <Card key={index} pokemon={p} />;
        })}
    </ul>
  );
}

export default List;
