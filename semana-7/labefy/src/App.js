import React from 'react'
import axios from 'axios'



export default class App extends React.Component {

  state = {
    playlistName: "",
    allMyPlaylists: [],
    tracks: [],
        trackName: "",
        artist: "",
        url: ""
  }

  componentDidMount() {
    this.getAllPlaylists()
  }


getAllPlaylists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    axios.get(url, {
      headers: {
        Authorization: "julia-cortez-maryam"
      }
    }).then((res) => {
      this.setState({allMyPlaylists: res.data.result.list})
    }).catch((err) => {
      alert("Ocorreu um erro, tente novamente.")
  })
  }

createPlaylist = async () => {

    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const body = {
      name: this.state.playlistName 
  }

    const res = await axios.post(url, body, {
      headers: {
        Authorization: "julia-cortez-maryam"
      }})
    .try((res) => {
      this.setState({playlistName: ""})
      alert('Playlist criada com sucesso!')
    }).catch((err) => {
      alert('Ocorreu um erro, tente novamente.')
    })
  }


deletePlaylist = async (id) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

  if(window.confirm('Deseja deletar a playlist?')) {

    try {
      const response = await axios.delete(url, {
        headers: {
          Authorization: "julia-cortez-maryam"
        }})
          this.getAllPlaylists()
          alert('Playlist deletada com sucesso!')
      } catch(err) {
          alert('Ocorreu um erro, tente novamente.')
      }
  }
  }

getAllTracks = async (id) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

    const res = await axios.get(url, {
      headers: {
        Authorization: "julia-cortez-maryam"
      }
    }).then((res) => {
      this.setState({playlistTracks: res.data.result.tracks}) 
      })
    .catch((err) => {
      console.log(err)
    })
  }

  onCreateNewPlaylist = (ev) => {
    this.setState({playlistName: ev.target.value})
  }

  render() {

    const listaPlaylists = this.state.allMyPlaylists.map((playlist) => {
      return (
      <div key={playlist.id}>
        {playlist.name}
        <button onClick={() => this.deletePlaylist(playlist.id)}>x</button>
        <button onClick={() => this.getAllTracks(playlist.id)}>Ver músicas</button>
      </div>
    )})


    return (
      <div>
        <input
        placeholder="Nome da Playlist"
        onChange={this.onCreateNewPlaylist}
        value={this.state.playlistName}
        />
        <button onClick={this.createPlaylist}>Criar Playlist</button>
        {listaPlaylists}
      </div>
    )
  }  
}


