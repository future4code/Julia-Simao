import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 300px;
  margin-top: 15%;
  margin-left: 37%;
  font-family: sans-serif;
`

const Title = styled.h1`
  border: 1px solid black;
  padding: 10px;
`

export default class App extends React.Component {

  state = {
    advice: [],
    searchAdvice: ""
  }

getRandomAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then((res) => {
      this.setState({advice: res.data.slip.advice})
    })
}



  render () {
    const adviceOfTheDay = this.state.advice
    return (
      <ContainerInfo>
       <Title>Advice of the Day</Title>
       <button onClick={this.getRandomAdvice}>Generate advice</button>
       <br />
       {adviceOfTheDay}
      </ContainerInfo>
    )
  }
}

