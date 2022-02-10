import React, { useContext } from "react"
import GlobalStateContext from "../../GlobalState/GlobalStateContext"
import { FiltersContainer, FiltersBox } from "./styled"

export const FiltersOptions = () => {

    const { movie, genres, choiceGenres, setChoiceGenres } = useContext(GlobalStateContext)

    const genre = genres[0].genres

    const setChoicesGenres = (id) => {
        const newGenres = {...choiceGenres}
        if(newGenres[id]){
            delete newGenres[id]
        } else {
            newGenres[id] = true
        }
        setChoiceGenres({...newGenres})
    }

    const filtersComponents = 
        genre && genre.map((gen) => {
            return (
                <FiltersBox 
                    onClick={() => setChoicesGenres(gen.id)}
                    choice={choiceGenres[gen.id]}
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