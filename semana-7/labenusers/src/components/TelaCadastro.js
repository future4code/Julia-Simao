import React from 'react'
import axios from 'axios'

export default class TelaCadastro extends React.Component {

  state = [
    {
      nomeUsuario: "",
      emailUsuario: ""
    }
  ]


  onCreateUser = (ev) => {
    this.setState({nomeUsuario: ev.target.value})
  }

  onCreateEmail = (ev) => {
    this.setState({emailUsuario: ev.target.value})
  }

  fazerCadastro = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const body = {
          name: this.state.nomeUsuario,
          email: this.state.emailUsuario
    }

    axios.post(url, body, {
      headers: {
        Authorization: "julia-cortez-maryam"
      }
    })
    .then((res) => {
      alert("Usuário(a) cadastrado(a) com sucesso! :)")
      this.setState({nomeUsuario: "", emailUsuario: ""})
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }


    render () {
        return (
            <div>
                <button onClick={this.props.irParaLista}>Ir para Lista de Usuários</button>
                <h2>Cadastro</h2>
                  <p>Nome:</p>
                    <input 
                      placeholder={'Nome'} 
                      onChange={this.onCreateUser} 
                      value={this.state.nomeUsuario} 
                    />
      
                  <p>Email:</p>
                    <input 
                      placeholder={'E-mail'} 
                      onChange={this.onCreateEmail} 
                      value={this.state.emailUsuario} 
                    />

                  <button onClick={this.fazerCadastro}>Enviar</button>
            </div>
        )
    }
}