import React from 'react'
import axios from 'axios'


const header = {
  headers: {
    Authorization: "julia-cortez-maryam"
  }
}


class App extends React.Component {

  state = [
    {
      nomeUsuario: "",
      emailUsuario: ""
    }
  ]

  componentDidMount() {
    this.getAllPlaylists();
  }

  onCreateUser = (ev) => {
    this.setState({nomeUsuario: ev.target.value})
  }

  onCreateEmail = (ev) => {
    this.setState({emailUsuario: ev.target.value})
  }

  createUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.nomeUsuario,
      email: this.state.emailUsuario
    };

    axios
      .post(url, body, header)
      .then((res) => {
        alert('Usuário cadastrado')
        console.log(res)
        this.setState({ nomeUsuario: "", emailUsuario: "" });
        this.getAllUsers();
      })
      .catch((err) => {
        alert(err);
      });
  };

  render () {
    
  return (
    <div>
      <h3>Login</h3>
      <p>Nome:</p>
        <input 
          placeholder={'Nome'} 
          name={'nome'} 
          onChange={this.onCreateUser} 
          value={this.state.nomeUsuario} 
        />
      
      <p>Email:</p>
        <input 
          placeholder={'E-mail'} 
          name={'email'} 
          onChange={this.onCreateEmail} 
          value={this.state.emailUsuario} 
        />

      <br /> <br />
      <button onClick={this.createUser}>Enviar</button>
    </div>
      );
    }
  }

export default App;
