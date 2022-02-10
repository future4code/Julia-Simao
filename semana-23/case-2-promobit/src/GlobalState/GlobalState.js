import React, {useEffect, useState} from 'react'
import { API_KEY, BASE_URL } from '../Constants/url'
import useRequestData from '../Hooks/useRequestData'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {

    const [choiceGenres, setChoiceGenres] = useState({})

    const movie = useRequestData
        (`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-br`)

    const genres = useRequestData(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=pt-br`)

    
    const data = {
        movie,
        genres,
        choiceGenres,
        setChoiceGenres
    }

    return (
    <GlobalStateContext.Provider value={data}>
        {props.children}
    </GlobalStateContext.Provider>
    )}

export default GlobalState