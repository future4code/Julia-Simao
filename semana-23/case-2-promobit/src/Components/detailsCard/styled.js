import styled from 'styled-components'
import { PRIMARY_COLOR } from "../../Constants/colors";

export const DetailsBackground = styled.div`
    background-color: ${PRIMARY_COLOR};
    height: 29rem;
`

export const FirstDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 3rem;
`

export const MoviePoster = styled.img`
    border-radius: 0.2rem;
    margin: 0 2rem;
`

export const MovieTitle = styled.p`
    font-weight: 700;
    color: white;
    font-size: 2rem;
    max-width: 20rem;
`

export const AditionalInfo = styled.p`
    color: white;
    padding-top: 0.5rem;
    font-size: 0.9rem;
`

export const SynopsisTitle = styled.p`
    color: white;
    font-weight: bold;
    font-size: 1rem;
    padding-top: 1.5rem;
`

export const SynopsisContainer = styled.div`
    max-width: 30rem;
`

export const Synopsis = styled.p`
    color: white;
    font-size: 0.9rem;
    padding-top: 0.6rem;

`