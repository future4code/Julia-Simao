import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button'


function ApplicationForm () {

    const history = useHistory()

    const goToTripsList = () => {
        history.push('/trips/list')
    }


    return (
        <div>
            <h2>App Form</h2>
            <Button onClick={goToTripsList} variant="outlined">Lista de Viagens</Button>
            <form>
                <input 
                name='name'
                />
            <Button variant="outlined">Finalizar Inscrição</Button>
            </form> 
        </div>
    )
}

export default ApplicationForm