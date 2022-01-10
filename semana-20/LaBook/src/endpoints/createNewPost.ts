import {Request, Response} from 'express'
import connection from '../connection'

export default async function createNewPost(
    req: Request,
    res: Response
) : Promise <void> {
    try {
        const {picture, description, type} = req.body

        await connection("newpost_labook")
            .insert({picture, description, type})
        res.status(201).send('Post criado!')
    } catch (error) {
        res.status(500).end()
    }
}