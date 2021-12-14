import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl, user } from '../../constants/constants'
import { useProtectedPage } from '../../hook/useProtectedPage'
import { useRequestData } from '../../hook/useRequestData'
import { useParams, useHistory } from 'react-router'
import Button from '@mui/material/Button'
import { DetailsContainer } from './index'
import TripInfo from './TripInfoCard'
import CandidatesForTrip from './CandidatesForTrip'

function TripDetails () {

    const [trip, setTrip] = useState([])
    const [isLoadingDetails, setIsLoadingDetails] = useState(false)
    const [error, setError] = useState()

    useProtectedPage()
    
    const history = useHistory()

    const goToAdmPage = () => {
        history.push('/adm/trips/list')
    }

    const params = useParams()

    useEffect(() => {
        setIsLoadingDetails(true) 
        const token = localStorage.getItem('token')
        axios.get(`${baseUrl}/${user}/trip/${params.id}`, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            setTrip(res.data)
            setIsLoadingDetails(false)
        }).catch((err) => {
            setError(err)
            setIsLoadingDetails(false)
        })
    }, [])

console.log(trip)

    return (
        <div>
            <h2>TripDetails</h2>
            <Button onClick={goToAdmPage} variant="outlined">Voltar</Button>
            <DetailsContainer>
                <TripInfo />
                <CandidatesForTrip />
            </DetailsContainer>
            
        </div>
    )
}

export default TripDetails


{/* {isLoadingDetails && <p>Carregando requisição</p>}
            {!isLoadingDetails && error && <p>{error.message}</p>}
            {!isLoadingDetails && trip && trip.map((trip) => {
                return (
                    <div key={trip.id}>
                        <h2>{trip.name}</h2>
                    </div>
                )
            })} */}