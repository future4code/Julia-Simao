import React, { useContext, useState } from "react"
import GlobalStateContext from "../../GlobalState/GlobalStateContext"
import { FiltersContainer, FiltersBox } from "./styled"

export const FiltersOptions = () => {

    const { genres } = useContext(GlobalStateContext)

    const genre = genres[0].genres


    // const handleGenre = (value) => {
    //     setGenreSearch(value);
    // }
    
    const filtersComponents = 
        genre && genre.map((gen) => {
            return (
                <FiltersBox 
                    // onClick={() => handleGenre(genre.id)}
                    key={gen.id} >
                        {gen.name}
                </FiltersBox>
            )
        })

    return (
        <FiltersContainer>
            {filtersComponents}
        </FiltersContainer>
    )

}

export default FiltersOptions