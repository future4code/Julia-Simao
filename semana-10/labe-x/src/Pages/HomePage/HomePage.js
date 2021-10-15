import { useHistory } from "react-router-dom";
import labeX from '../../labeX (1).png'
import { HomeContainer, LogoHome, LogoNameContainer, ButtonContainer } from './index.js'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'


export default function HomePage () {

    
    return (
    <HomeContainer>
        <LogoNameContainer>
            <LogoHome src={labeX} alt="Logo" />
            <Typography variant="subtitle1" color='white'>Uma nova forma de viajar</Typography>
        <ButtonContainer>
            <Link to={'/trips/list'}>
                <Button variant="outlined" >Quero explorar</Button>
            </Link>
            <Link to={'/login'}>
                <Button variant="outlined" >Área do Administrador</Button>
            </Link>
        </ButtonContainer>
        </LogoNameContainer>
    </HomeContainer>
    )
}

