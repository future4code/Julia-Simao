import styled from 'styled-components'


export const HomeContainer = styled.div`
    width: 100%;
    heigth: 100vh;
    font-family: Roboto;
    margin-top: 10%;
    background-color: #000000;
` 

export const LogoNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

export const LogoHome = styled.img`
    width: 300px;
` 

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: inline;
    width: 400px;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    a {
        text-decoration: none;
    }
` 