import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useRequestData } from '../../hook/useRequestData'
import { baseUrl, user } from '../../constants/constants'

function TripsList () {

    const [tripsList, isLoadingTripsList, requestError] = useRequestData(`${baseUrl}/${user}/trips`)

    const history = useHistory()

    const goToHomePage = () => {
        history.push('/');
    };

    const goToApplicationPage = () => {
        history.push('/trips/application') 
    }
    
    return (
        <div>

                <h2>TripsList</h2>
                <Button onClick={goToHomePage} variant="outlined">Home</Button>
                <Button onClick={goToApplicationPage} variant="outlined" tripsList={tripsList}>Inscrever-se</Button>

                {isLoadingTripsList && <p>Carregando requisição</p>}

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
                    <p>{trip.description}</p>
                    <p>Duração: {trip.durationInDays} dias</p>
                    <div><p>{trip.planet}</p> <p>{trip.date}</p></div>
                    <hr />
                </div>

                )})
                }

        </div>
)
}

export default TripsList