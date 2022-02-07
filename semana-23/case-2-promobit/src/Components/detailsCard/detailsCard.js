import React from 'react'
import { IMG_URL } from "../../Constants/url"
import { 
    DetailsBackground, 
    MoviePoster, 
    FirstDetailsContainer,
    MovieTitle,
    AditionalInfo,
    SynopsisTitle,
    SynopsisContainer,
    Synopsis 
} from "./styled"

const DetailsCard = (props) => {

    const releasedDates = props.certification[0].results

    const findBrArray = releasedDates && releasedDates.find(item => item.iso_3166_1 === "BR")
    const brAge = findBrArray && findBrArray.release_dates[0].certification 

    const age = (brAge) => { 
        if(brAge === "L"){
            return "L"
        }
        else if(brAge === undefined){
            return "Não informado"
        }
        else{
            return brAge + ' ' + 'anos'
        }
}

const genArray = props.details[0].genres && props.details[0].genres.map((gen => {
    return gen.name + ", "
}))

const release_date = props.details[0].release_date && props.details[0].release_date.split('-').reverse().join('/')


console.log(props.details)
    const movieDetail = props.details && props.details.map((detail) => {
        return (
            <FirstDetailsContainer>
                <MoviePoster src={`${IMG_URL}w342${detail.poster_path}`} alt={`${detail.title}`} />
                <div>
                    <MovieTitle key={detail.id}>{detail.title}</MovieTitle>
                    <AditionalInfo>{age(brAge)} • {release_date} (BR) • {genArray} • {detail.runtime}min</AditionalInfo>
                    <SynopsisTitle>Sinopse</SynopsisTitle>
                    <SynopsisContainer>
                        <Synopsis>{detail.overview ? detail.overview : "Não informado"}</Synopsis>
                    </SynopsisContainer>
                </div>
            </FirstDetailsContainer>
        )})

    return (
        <DetailsBackground>
            {movieDetail}
        </DetailsBackground>
    )
}

export default DetailsCard