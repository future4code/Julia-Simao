import styled from 'styled-components'
import { BACKGROUND_COLOR, PRIMARY_COLOR } from '../../Constants/colors'

export const HomeContainer = styled.div`
    font-family: 'Roboto', sans-serif;
`
export const TitleBackground = styled.div`
    background-color: ${PRIMARY_COLOR};
    height: 25rem;
`
export const TitleContainer = styled.p`
    color: white;
    font-size: 2.7rem;
    font-weight: bold;
    text-align: center;
    padding-top: 4rem;
    letter-spacing: -0.008em;
    font-style: normal;
    letter: -0.5%
`

export const SubtitleContainer = styled.p`
    color: white;
    text-align: center;
    font-size: 0.9rem;
    padding-top: 3rem;
    font-weight: 550;
`