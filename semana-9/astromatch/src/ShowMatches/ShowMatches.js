import { useEffect, useState } from 'react'
import axios from 'axios'
import { aluno, baseUrl } from '../constants/constants'
import { PrincipalContainer, ButtonHeader } from '../Styles/Styles'

function ShowMatches(props) {

  const [matchs, setMatchs] = useState({})

  useEffect(() => {
    const getAllMatchs = async () => {
      try {
        const res = axios.get(
          `${baseUrl}${aluno}/matches`
          )
        setMatchs(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    getAllMatchs();
  }, [])

  return (
    <div>
      <PrincipalContainer>
        <ButtonHeader>
          <h2>My AstroMatchs</h2>
          <button onClick={() => props.changePage('MatchPage')}>Voltar</button>
        </ButtonHeader>
      </PrincipalContainer>
    </div>
  )
}

export default ShowMatches