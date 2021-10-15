import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useProtectedPage } from '../../hook/useProtectedPage'

function CreateTrip () {

    useProtectedPage()

    const history = useHistory()

    const goToAdmHome = () => {
        history.push('/adm/trips/list')
    } 

    return (
        <div>
            <h2>Create Trip</h2>
            <Button onClick={goToAdmHome} variant="outlined">Voltar</Button>
            <Button variant="outlined">Criar</Button>
        </div>
    )
}

export default CreateTrip