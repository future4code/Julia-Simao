import styled, { keyframes } from "styled-components";


export const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  align-items: center;
  width: 400px;
  height: 600px;
  align-content: center;
  max-width: 100%;
  margin-left: 35%;
`;

export const ButtonHeader = styled.div`
  display: flex;
  flex-direction: inline;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 400px;
  padding: 8px;
`;

export const ProfilePic = styled.img`
  width: 300px;
  align-content: center;
`;

export const MatchPic = styled.img`
  max-width: 100%;
  height: auto;
  display: block-inline;
  margin: 0 auto;
  overflow: hidden;
  width: 80px;
  height: 80px;
  border-radius: 50px;

  // display: inline-block;
  // border-radius: 50px;
  // width: 80px;
  // height: 80px;
  // overflow: hidden;
  // object-fit: cover
`;

export const LogoAstroHome = styled.img`
  width: 100px;
`;


export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin: 50%;
`;

export const ButtonHomePage = styled.div`
  padding: 8px;
  margin: 12px;
  background-color: #ff6ea7;
  border-radius: 8px;
  font-size: 12px;
 `

 export const ProfilePicture = styled.img`
  display: block;
  z-index: 1;
  background-size: contain;
  height: 400px;
  max-width: 400px;
  text-indent: -50%;
  overflow: hidden;
`

export const ContainerMatch = styled.div`
  align-content: center;
  height: 500px;
  width: 400px;
  position: relative;
  object-fit: scale-down
`