import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { IMG_URL } from "../../Constants/url"
import GlobalStateContext from "../../GlobalState/GlobalStateContext"
import { MovieInfo, MovieContainer, MovieTitle, MovieDate, MoviePoster} from "./styled"

export const MovieCard = () => {

    const { movie, choiceGenres } = useContext(GlobalStateContext)

    const movies = movie[0].results

    const filteredMovies = movies && Object.keys(choiceGenres).length ? movies.filter((mov) => {
        const genresId = mov.genre_ids
        for (const id of genresId) {
            if(choiceGenres[id]){
                return true
            }
        }
        return false
    }) : movies

    const navigate = useNavigate()

    return(
        <MovieContainer>
            {filteredMovies && filteredMovies.map((movie) => {
                return (
                    <MovieInfo key={movie.id}>
                        <MoviePoster src={`${IMG_URL}w154${movie.poster_path}`}  alt={`${movie.title}`}
                        onClick={() => navigate(`/movie/${movie.id}`)}/>
                        <MovieTitle>{movie.title}</MovieTitle>
                        <MovieDate>{movie.release_date.split('-').reverse().join('/')}</MovieDate>
                    </MovieInfo>
                )
            })}
            
        </MovieContainer>
    )
}

export default MovieCard