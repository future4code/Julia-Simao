import axios from "axios";
import React, { useEffect, useState } from "react";
import { aluno, baseURL } from "../constants/constants";
import { PrincipalContainer, ButtonHeader, ProfilePicture, ContainerMatch } from "../Styles/Styles";

function MatchPage(props) {
  const [profiles, setProfiles] = useState([]);
  const [choice, setChoice] = useState(true);

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = async () => {
    try {
      const res = await axios.get(`${baseURL}/${aluno}/person`);
      setProfiles(res.data.profile);
    } catch (err) {
      alert(err);
    }
  };

  const clearAllMatchs = async () => {
    try {
      const res = await axios.put(`${baseURL}/${aluno}/clear`);
      getProfileToChoose();
    } catch (err) {
      alert(err);
    }
  };

  const choosePerson = async (choice) => {
    try {
      const body = {
        id: profiles.id,
        choice: choice
      };
      const res = await axios.post(`${baseURL}/${aluno}/choose-person`, body);
      setChoice(res.data.isMatch);
      getProfileToChoose();
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <PrincipalContainer>
        <ButtonHeader>
          <button onClick={() => props.changePage('HomePage')}>Home</button>
          <h2>AstroMatch</h2>
          <button onClick={() => props.changePage('ShowMatches')}>
            Meus Matchs
          </button>
        </ButtonHeader>
        <div>
          {profiles ? (
            <>
              {" "}
              <ContainerMatch>
              <ProfilePicture src={profiles.photo} alt={profiles.name} />
              <br />
              <strong>{profiles.name}</strong>, {profiles.age}
              <p>{profiles.bio}</p>
              <button onClick={() => choosePerson(false)}>x</button>
              <button onClick={() => choosePerson(true)}>o</button>
              </ContainerMatch>
            </>
          ) : (
            <p>Acabaram os perfis :(</p>
          )}
        </div>
        <button onClick={() => clearAllMatchs()}>Clear</button>
      </PrincipalContainer>
      
    </div>
  );
}

export default MatchPage;
