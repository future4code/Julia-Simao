import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdmHome from "../Pages/AdmHome/AdmHome"
import ApplicationForm from '../Pages/ApplicationForm/ApplicationForm'
import CreateTrip from '../Pages/CreateTrip/CreateTrip'
import HomePage from '../Pages/HomePage/HomePage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import TripDetails from '../Pages/TripDetails/TripDetails'
import TripsList from '../Pages/TripsList/TripsList'

export const Router = () => {
    return (
    <BrowserRouter>
        <Switch>

            <Route exact path={'/'}>
                <HomePage />
            </Route>

            <Route exact path={'/login'}>
                <LoginPage />
            </Route>

            <Route exact path={'/trips/list'}>
                <TripsList />
            </Route>

            <Route exact path={'/trips/application'}>
                <ApplicationForm />
            </Route>

            <Route exact path={'/adm/trips/list'}>
                <AdmHome />
            </Route>

            <Route exact path={'/adm/trips/create'}>
                <CreateTrip />
            </Route>

            <Route exact path={'/adm/trips/:id'}>
                <TripDetails />
            </Route>

            <Route>
                <div><h2>Página não encontrada</h2></div>
            </Route>

        </Switch>
    </BrowserRouter>
    )
}
