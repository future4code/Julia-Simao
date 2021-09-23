import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const CardUsuario = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
`

export default class TelaListaUsuarios extends React.Component{

    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

pegarUsuarios = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    axios.get(url, {
        headers: {
            Authorization: "julia-cortez-maryam"
        }
    })
    .then((res) => {
        this.setState({usuarios: res.data})
    })
    .catch((err) => {
        alert("Ocorreu um erro, tente novamente.")
    })
}

deletarUsuarios = async (id, name) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`

    if(window.confirm(`Tem certeza que deseja deletar o cadastro de 
    ${this.state.usuarios.id, this.state.usuarios.name}?`)) {

        try {
            const res = await axios.delete(url, {
                headers: {
                    Authorization: "julia-cortez-maryam"
                }})
            this.pegarUsuarios()
            alert('Usuário deletado com sucesso!')
        } catch(err) {
            alert('Ocorreu um erro, tente novamente.')
        }
    }
}

//     axios.delete(url, {
//         headers: {
//             Authorization: "julia-cortez-maryam"
//         }
//     })
//     .then((res) => {
//         this.pegarUsuarios()
//         alert('Usuário deletado com sucesso!')
//     })
//     .catch((err) => {
//         alert('Ocorreu um erro, tente novamente.')
//     })
// }


    render() {

        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
            <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuarios(user.id, user.name)}>x</button>
            </CardUsuario>
            )
        })
        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}