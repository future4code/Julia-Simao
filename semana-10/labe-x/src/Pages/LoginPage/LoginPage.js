import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button'
import { ContainerLogin, LoginDetailsContainer, ButtonsContainer } from './index'
import { useState } from 'react'
import { baseUrl, user } from '../../constants/constants'
import axios from 'axios'

function LoginPage () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    const goToHomePage = () => {
        history.push('/');
    };

    const onChangeEmail = (ev) => {
        setEmail(ev.target.value)
    }

    const onChangePassword = (ev) => {
        setPassword(ev.target.value)
    }

    const onSubtmitLogin = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post(`${baseUrl}/${user}/login`, body)
        .then((res) => {
            console.log('deu certo', res.data)
            localStorage.setItem('token', res.data.token)
            history.push('/adm/trips/list')
        }).catch((err) => {
            console.log(err.response)
        })
    }


        return (
        <ContainerLogin>
            <LoginDetailsContainer>
                <h1>Login</h1>
                <form>
                <TextField
                    fullWidth
                    label='E-mail'
                    required
                    margin='normal'
                    type='email'
                    value={email}
                    onChange={onChangeEmail}
                />
                <TextField
                    fullWidth
                    label='Senha'
                    required
                    margin="normal"
                    type='password'
                    value={password}
                    onChange={onChangePassword}
                    helperText='*Campos obrigatórios'
                />
                </form>
                <ButtonsContainer>
                    <Button onClick={goToHomePage} variant="outlined">Voltar</Button>
                    <Button onClick={onSubtmitLogin} variant='contained'>Fazer Login</Button>
                </ButtonsContainer>
            </LoginDetailsContainer>
        </ContainerLogin>
        )
}

export default LoginPage