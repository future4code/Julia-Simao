import {Request, Response} from 'express'
import connection from '../connection'

export default async function updateCharacter(
    req: Request,
    res: Response
) : Promise <void> {
    try {
        const {name, gender, description} = req.body
        const {id} = req.params

        await connection("character")
        .update({name, gender, description})
        .where({id})
        res.status(200).end()
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message)
    }
}