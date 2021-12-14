import React from "react";
import { PrincipalContainer, LogoAstroHome, ContainerHome, ButtonHomePage } from "../Styles/Styles";

import { logo, nome } from '../constants/constants'


export function HomePage(props) {
  return (
    <PrincipalContainer>
      <ContainerHome>
      <LogoAstroHome 
      src={logo} 
      alt="astromatch"
      // animation="tada"
      // useNativeDriver
      >
      </LogoAstroHome>
      <img src={nome} alt='AstroMatch' />
      <ButtonHomePage onClick={() => props.changePage("MatchPage")}>Explorar Estrelas</ButtonHomePage>
      </ContainerHome>
    </PrincipalContainer>
  )
}

