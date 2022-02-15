import {Request, Response} from "express"
import { PizzaBusiness } from "../business/PizzaBusiness"

export class PizzaController {

    async createNewPizza(req: Request, res: Response) {
        try {
            const {name, price, ingredients} = req.body

            await new PizzaBusiness().createNewPizza(name, price, ingredients)

            res.status(200).send("Produto Criado!").end()

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async getPizzaById(req: Request, res: Response) : Promise<void> {
        try {

            const {id} = req.params

            const pizza = await new PizzaBusiness().getPizzaById()

            res.status(200).send(pizza).end()

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}