import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Header = styled.div`
    background-color: red;
    height: 100px;
    width: 100%;
`

export default class PaginaPrincipal extends React.Component {

    componentDidMount() {
        this.getRandomAdvice()
    }

    getRandomAdvice = async () => {
        const response = await axios.get('https://api.adviceslip.com/advice')
        console.log(response.data.slip.advice)
    }

    render () {
        return(
            <div>
                <Header>
                    <h1>Advice of the day</h1>
                </Header>
                <button onClick={this.props.irParaPokemon}>Lista de Pokemons</button>
            </div>
        )
    }
}