import React from 'react'
import styled from 'styled-components'
import './styles.css'

const ContainerTarefas = styled.div`
  
`

const TarefaList = styled.ul`
  padding: 0;
  width: 300px;
`

const Tarefa = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border: 1px solid black;
  margin: 4px;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`


class App extends React.Component {
    state = {
      tarefas: [
        {
          id: 1,
          texto: 'Texto da primeira tarefa',
          completa: false
        },
        {
          id: 2, 
          texto: 'Texto da segunda tarefa',
          completa: true 
        }
      ],
      inputValue: '',
      filtro: 'Completas'
    }


  componentDidUpdate() {
    const tarefa = this.state.tarefas
    const tarefaString = JSON.stringify(tarefa)
    window.localStorage.setItem("tarefa", tarefaString)
  };

  componentDidMount() {
    const tarefaString = window.localStorage.getItem("tarefa")
    if (tarefaString) {
      const tarefa = JSON.parse(tarefaString)
      this.setState({ tarefas: tarefa })
    }
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value})

  }

  criaTarefa = () => {
    const novaTarefa = {
        id: Date.now(),
	      texto: this.state.inputValue,
	      completa: false
    }

    const copiaListaTarefas = [...this.state.tarefas]
    copiaListaTarefas.push(novaTarefa)

    this.setState({ tarefas: copiaListaTarefas, inputValue: '' })

  }

  selectTarefa = (id) => {
  const novaListaDeTarefas = this.state.tarefas.map((tarefas) => {

    if (id === tarefas.id) {
      const novoStatus = {
        ... tarefas,
        completa: !tarefas.completa
      }
      return novoStatus

  } else {
      return tarefas
  }
  })

  this.setState({ tarefas: novaListaDeTarefas })

  }

  onChangeFilter = (event) => {
    this.setState({ completa: event.target.value })

  }

  removerTarefa = (id) => {
    const novasTarefas = [...this.state.tarefas]
    const paraRemoverTarefas = novasTarefas.filter((tarefas) => {
      return id !== tarefas.id
    })

    this.setState({ tarefas: paraRemoverTarefas })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input 
          name="Tarefa" 
          value={this.state.inputValue} 
          onChange={this.onChangeInput}
          placeholder='Tarefa'
          />
          
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>

        <ContainerTarefas>
          <TarefaList>
            {listaFiltrada.map(tarefa => {
              return (
                  <Tarefa
                    completa={tarefa.completa}
                    onClick={() => this.selectTarefa(tarefa.id)}
                  >
                    {tarefa.texto}
                    <button onClick={this.paraRemoverTarefas}>X</button>
                  </Tarefa>
                )
              })}
            </TarefaList>
          </ContainerTarefas>
      </div>
    )
  }
}

export default App
