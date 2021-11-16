import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import DetailsPage from '../pages/DetailsPage/DetailsPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignUpPage from '../pages/SignUpPage'

const Router = () => {
    return (
    <BrowserRouter>
    <Header />
        <Switch>

            <Route exact path='/login'>
                <LoginPage />
            </Route>

            <Route exact path='/cadastro'>
                <SignUpPage />
            </Route>

            <Route exact path='/'>
                <FeedPage />
            </Route>

            <Route exact path='/detalhes/:id'>
                <DetailsPage />
            </Route>

            <Route>
                <ErrorPage />
            </Route>

        </Switch>
    </BrowserRouter>
    )
}

export default Router