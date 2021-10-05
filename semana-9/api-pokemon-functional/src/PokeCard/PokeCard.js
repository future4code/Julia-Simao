import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Img = styled.img`
width: 180px;
margin-top: -30px;
` 

export default function PokeCard(props) {
  
  const [pokemon, setPokemon] = useState({})


  useEffect (() => {

    const getPokemonByName = async () => {
      try {
      const res = await 
        axios.get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
          setPokemon(res.data)
          console.log(res.data)
            } catch(err) {
          alert(err.response.data)
    }}

    getPokemonByName()
      }, [props.pokemon])

  return (
    <div>
        <h3>it's <strong>{pokemon.name}</strong></h3>
        <p>{pokemon.weight}kg - {pokemon.types && pokemon.types[0].type.name}</p>
        {pokemon.sprites && (
          <Img src={pokemon.sprites.front_default} alt={pokemon.name} />
    )}
        {pokemon.sprites && (
          <Img src={pokemon.sprites.back_default} alt={pokemon.name} />
    )}
    </div>
  )
}