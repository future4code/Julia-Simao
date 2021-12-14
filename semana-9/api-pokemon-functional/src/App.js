import "./styles.css"
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokeCard from './PokeCard/PokeCard'

export default function App() {

  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState('')

  const getPokemons = () => {
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(res => {
      setPokeList(res.data.results)
  })
    .catch((err) => {
      alert(err.response.data);
  })
}

useEffect(() => {
  getPokemons();
}, [pokeName]);


  const handlePokeName = (ev) => {
    setPokeName(ev.target.value)
  }

  const getPokemonNames = pokeList.map((pokemon) => {
    return (
      <option key={pokemon.name} value={pokemon.name}>
        {pokemon.name}
      </option>
    )
  })

  return (
    <div className="App">
       <h1>Whos's that Pokemon?</h1>
        <select onChange={handlePokeName}>
        <option value={""}>Nenhum</option>
        {getPokemonNames}
        </select>
        {pokeName && <PokeCard 
        pokemon={pokeName} />}
    </div>
  );
}
