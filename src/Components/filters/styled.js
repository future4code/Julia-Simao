import styled from 'styled-components'

export const FiltersContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    margin: auto;
    padding-top: 0.5rem;
    position: absolute;
    left: calc(20%);
    right: calc(20%);
`

export const FiltersBox = styled.p`
    background-color: white;
    color: #323232;
    border-radius: 0.2rem;
    padding: 0.6rem 0.7rem 0.6rem 0.7rem;
    font-size: 0.79rem;
    font-weight: bold;
    margin: 0.2rem;
    cursor: pointer;
    text-align: center;


    :hover{
        background-color: rgb(230, 230, 230)
    }
`