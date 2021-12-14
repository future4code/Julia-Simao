import axios from "axios";
import React, { useEffect, useState } from "react";
import { aluno, baseUrl, body } from "../constants/constants";
import { PrincipalContainer, ButtonHeader, ProfilePic } from "../Styles/Styles";

function MatchPage(props) {
  const [profiles, setProfiles] = useState({});
  const [matchUser, setMatchUser] = useState(true);
  const [astroMatch, setAstroMatch] = useState(true);

  const chooseMatch = (matchUser) => {
    setMatchUser(matchUser);
  };

   const getProfileToChoose = async () => {
    try {
      const res = await axios.get(`${baseUrl}${aluno}/person`);
      setProfiles(res.data.profile);
    } catch (err) {
      console.log(err)
    }
  };

  const matchFromAstro = async () => {
    try {
      const body = {
        id: profiles.id,
        choice: true
      };
      const res = await axios.post(`${baseUrl}${aluno}/choose-person`, body)
      setAstroMatch(res.data.isMatch);
      getProfileToChoose()
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    getProfileToChoose();
  }, []);

  return (
    <div>
      <PrincipalContainer>
        <ButtonHeader>
          <h2>AstroMatch</h2>
          <button onClick={() => props.changePage("ShowMatches")}>
            Meus Matchs
          </button>
        </ButtonHeader>
        <div>
          
            <ProfilePic src={profiles.photo} alt={profiles.name} />
          <br />
          <strong>{profiles.name}</strong>, {profiles.age}
          <p>{profiles.bio}</p>
          <button onClick={() => matchFromAstro(false)}>x</button>
          <button onClick={() => matchFromAstro(true)}>o</button>
        </div>
      </PrincipalContainer>
    </div>
  );
}

export default MatchPage;
