import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";
import HomePage from "../Screens/HomePage/HomePage"
import MovieDetails from "../Screens/MovieDetails/MovieDetails"

const MainRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movie/:id" element={<MovieDetails />}/>
                <Route path="*" element={<h1>Não encontrado</h1>} />
            </Routes>
    )
}

export default MainRoutes