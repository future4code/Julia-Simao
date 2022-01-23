import {Request, Response} from 'express'
import connection from '../connection'

export default async function createNewUser (
    req: Request,
    res: Response
) : Promise <void> {
    try {
        const {name, email, pass} = req.body

        await connection('new_user_labook')
            .insert({name, email, pass})
        res.status(201).send('Usuário Criado')
    } catch (error) {
        res.status(500).end()
    }
}