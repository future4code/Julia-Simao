import React from 'react'
import { useParams } from "react-router-dom"
import { 
    DetailsContainer, 
} from "./styled"
import { BASE_URL, API_KEY } from "../../Constants/url"
import useRequestData from "../../Hooks/useRequestData"
import DetailsCard from "../../Components/detailsCard/detailsCard"
import dotenv from 'dotenv'

dotenv.config()

const MovieDetails = () => {

    const {id} = useParams()

    const details = useRequestData
        (`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=pt-BR`)
        console.log(details)

    const certification = useRequestData
        (`${BASE_URL}/movie/${id}/release_dates?api_key=${API_KEY}`)

    return(
        <DetailsContainer>
            <DetailsCard 
                id={id} details={details} certification={certification} />
        </DetailsContainer>
    )}

export default MovieDetails