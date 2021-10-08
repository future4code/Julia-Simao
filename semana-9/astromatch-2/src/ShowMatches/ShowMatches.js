import { useEffect, useState } from "react";
import axios from "axios";
import { aluno, baseURL } from "../constants/constants";
import { PrincipalContainer, ButtonHeader, MatchPic } from "../Styles/Styles";

function ShowMatches(props) {
  const [matchs, setMatchs] = useState([])
  const [order, setOrder] = useState(1)

  useEffect(() => {
    getMatches();
  }, []);

const getMatches = async () => {
  try {
    const res = await axios.get(`${baseURL}/${aluno}/matches`)
    setMatchs(res.data.matches)
  } catch (err) {
    alert(err)
  }
}

const allMatchs = matchs
.sort((matchAtual, matchSeguinte) => {
  return (
  order * matchAtual.name.localeCompare(matchSeguinte.name)
  )
})
.map((match) => {
  return <div key={match.id}>
        <MatchPic src={match.photo} alt={match.name} />
        {match.name}
        </div>
})

  return (
    <div>
      <PrincipalContainer>
        <ButtonHeader>
          <h2>My AstroMatchs</h2>
          <button onClick={() => props.changePage("MatchPage")}>Voltar</button>
          {allMatchs.length}
        </ButtonHeader>
        {allMatchs}
      </PrincipalContainer>
    </div>
  );
}

export default ShowMatches;
