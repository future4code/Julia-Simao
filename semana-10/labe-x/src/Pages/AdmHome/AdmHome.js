import { useHistory } from 'react-router-dom'
import { Button, List, ListItemButton, ListItemText } from '@mui/material'
import { useRequestData } from '../../hook/useRequestData'
import { useProtectedPage } from '../../hook/useProtectedPage'
import { baseUrl, user } from '../../constants/constants'
import { useEffect } from 'react'


function AdmHome () {

    useProtectedPage()

    const history = useHistory()

    const [tripsList, isLoadingTripsList, requestError] = useRequestData(`${baseUrl}/${user}/trips`)

    const goToHomePage = () => {
        history.push('/')
    }

    const goToCreateTripPage = () => {
        history.push('/adm/trips/create')
    }

    const goToTripDetailsPage = (id) => {
        history.push(`/adm/trips/${id}`)
    }

    const onLogout = () => {
        localStorage.clear()
        history.push('/login')
    }

    return (
        <div>
            <h2>AdmHome</h2>
            <Button onClick={goToHomePage} variant="outlined">Voltar</Button>
            <Button onClick={goToCreateTripPage} variant="outlined">Criar viagem</Button>
            <Button onClick={onLogout} variant="outlined">Logout</Button>

            <List component='nav' aria-label="secondary mailbox folders">
                <ListItemButton onClick={goToTripDetailsPage}>
                <ListItemText primary="Viagem para Marte" />
                </ListItemButton>

                <ListItemButton onClick={goToTripDetailsPage}>
                <ListItemText primary="Viagem para Lua" />
                </ListItemButton>
            </List>

                {/* {isLoadingTripsList && <p>Carregando requisição</p>}

                {!isLoadingTripsList && requestError && (
                <p>{requestError.message}</p>
                )}

                {!isLoadingTripsList &&
                tripsList &&
                tripsList.length === 0 && (
                    <p>Não há viagens no momento!</p>
                )}

                {!isLoadingTripsList &&
                tripsList && tripsList.map((trip) => {
                return (
                <div key={trip.id}>
                    <h3>{trip.name}</h3>
                    <Button onClick={() => goToTripDetailsPage(trip.id)} variant="outlined">Ver detalhes</Button>
                    <hr />
                </div>

                )})
                } */}
        </div>
    )
}

export default AdmHome