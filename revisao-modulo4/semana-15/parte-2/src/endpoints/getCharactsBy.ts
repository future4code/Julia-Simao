import {Request, Response} from 'express'
import { characters } from '../data'

export default function getCharacterBy (
    req: Request,
    res: Response
) : void {
    const result = characters.filter(
        character => {
            return character.gender === req.params.gender &&
            character.name.includes(req.query.name as string)
        }
    )
    res.status(206).send(result)
}