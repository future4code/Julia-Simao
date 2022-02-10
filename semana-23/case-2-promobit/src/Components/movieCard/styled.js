import styled from 'styled-components'

export const MovieContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1.5rem;
    margin: auto
`

export const MovieInfo = styled.div`
    align-items: center;
    text-align: left;
    width: 12rem;
    padding: 1rem;
`

export const MoviePoster = styled.img`
        border-radius: 0.2rem;
        cursor: pointer;
`

export const MovieTitle = styled.p`
    font-weight: bold;
    font-size: 0.9rem;
    padding-top: 0.3rem;
    padding-bottom: 0.4rem;
    cursor: pointer;
`

export const MovieDate = styled.p`
    font-weight: bold;
    font-size: 0.75rem;
    color: #646464
`
