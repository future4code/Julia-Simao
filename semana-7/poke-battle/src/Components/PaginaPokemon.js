import React from 'react'

export default class PaginaPokemon extends React.Component {
    render () {
        return(
            <div>
                <button onClick={this.props.irParaPrincipal}>Página inicial</button>
            </div>
        )
    }
}