import {Request, Response} from 'express'
import connection from '../connection'
import { character} from '../types'

export default async function getAllCharacters (
    req: Request,
    res: Response
) : Promise <void> {

    try {
        const name = req.query
        const character : character[] =  await connection("character")
        res.send(character)
    } catch (error) {
        res.status(500).send('Unexpected server error')
    }
}