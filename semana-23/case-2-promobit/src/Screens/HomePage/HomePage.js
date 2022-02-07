import React, { useContext } from "react"
import FiltersOptions from "../../Components/filters/filters"
import MovieCard from "../../Components/movieCard/movieCard"
import GlobalStateContext from "../../GlobalState/GlobalStateContext"
import { HomeContainer, TitleContainer, TitleBackground, SubtitleContainer } from "./styled"

const HomePage = () => {

    return(
        <HomeContainer>
            <TitleBackground>
            <TitleContainer>
                Milhões de filmes, séries e pessoas <br />para descobrir. Explore já.
            </TitleContainer>
            <SubtitleContainer>FILTRE POR:</SubtitleContainer>
                <FiltersOptions/>
            </TitleBackground>
            <MovieCard />
        </HomeContainer>
)}

export default HomePage