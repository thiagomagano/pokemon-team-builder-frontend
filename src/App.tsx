import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List/List'
import Nav from './components/Nav/Nav'
import api from './services/api'

function App() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    async function getData() {
      try {
        const response = await api.get('/pokemons')
        setPokemons(response.data)

      } catch (err) {
        console.log(err)
      }
    }
    getData()

  }, [])

  return (
    <div>
      <Nav />
      <main>

        <List pokemons={pokemons} />
      </main>
    </div>
  )
}

export default App
